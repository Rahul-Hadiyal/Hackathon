// codex_server.js (Consolidated Version)

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

// Assuming adaptive_assessment_system.js is in the same directory
// and exports the class. We will integrate its logic here for simplicity.
const { AdaptiveAssessmentAI } = require('./adaptive_assessment_system.js');
const assessmentAI = new AdaptiveAssessmentAI();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
// Serve frontend files from the 'public' directory
app.use(express.static('public'));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200 // Increased for development/testing
});
app.use(limiter);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));


// ===================================
// SCHEMAS
// ===================================

// User Schema (from original server)
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher', 'parent'], required: true },
  grade: String,
  school: String,
  subjects: [{ name: String, skillLevel: { type: Number, default: 50 }}],
  teacherCode: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
const User = mongoose.model('User', userSchema);

// Question Schema (from original server)
const questionSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  topic: String,
  difficulty: { type: String, enum: ['Very easy', 'Easy', 'Moderate', 'Difficult'], required: true },
  questionText: { type: String, required: true },
  options: [String],
  correctAnswer: { type: String, required: true }, // 'a', 'b', 'c', or 'd'
  explanation: String,
  fundamentals: [String]
});
const Question = mongoose.model('Question', questionSchema);

// Enhanced Assessment Schema (from new files)
const enhancedAssessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true },
  assessmentType: { type: String, enum: ['adaptive', 'traditional'], default: 'adaptive' },
  startTime: { type: Date, default: Date.now },
  endTime: Date,
  isCompleted: { type: Boolean, default: false },
  assessmentId: { type: String, required: true, unique: true },
  totalQuestions: { type: Number, default: 0 },
  correctAnswers: { type: Number, default: 0 },
  accuracy: { type: Number, default: 0 },
  adaptiveScore: { type: Number, default: 0 },
  fundamentalScores: {
    listening: { type: Number, default: 0 },
    grasping: { type: Number, default: 0 },
    retention: { type: Number, default: 0 },
    application: { type: Number, default: 0 }
  },
  responses: [{
    questionId: String,
    selectedAnswer: String,
    isCorrect: Boolean,
    difficulty: String,
    timeTaken: Number,
    fundamentals: [String],
    topic: String
  }],
  aiFeedback: String,
  weakFundamentals: [String],
  recommendations: [{ area: String, suggestion: String, exercises: [String] }],
  percentile: Number
});
const EnhancedAssessment = mongoose.model('EnhancedAssessment', enhancedAssessmentSchema);

// ===================================
// AUTH MIDDLEWARE
// ===================================
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access token required' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// ===================================
// ORIGINAL API ROUTES (Auth, Profile)
// ===================================
app.post('/api/auth/signup', async (req, res) => {
    // ... (Keep your existing signup logic from codex_server.js)
    try {
        const { email, password, name, role, grade, school } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword, name, role, grade, school });
        await user.save();
        
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/auth/login', async (req, res) => {
    // ... (Keep your existing login logic from codex_server.js)
     try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid credentials' });

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role, grade: user.grade, school: user.school } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/user/profile', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password');
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// ===================================
// NEW AI ASSESSMENT ROUTES
// ===================================
app.post('/api/assessment/start-adaptive', authenticateToken, async (req, res) => {
  try {
    const { subject } = req.body;
    const userId = req.user.userId;
    
    // In a real app, you'd fetch the student's profile from a LearningAnalytics model
    const studentProfile = { weakFundamentals: [], preferredDifficulty: 'Very easy' };
    
    const result = assessmentAI.startAdaptiveAssessment(subject, studentProfile);
    
    const assessment = new EnhancedAssessment({
      userId,
      subject,
      assessmentId: result.assessmentId,
    });
    await assessment.save();
    
    res.json({
      assessmentId: result.assessmentId,
      question: result.question,
    });
  } catch (error) {
    console.error('Start adaptive assessment error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/assessment/:assessmentId/answer-adaptive', authenticateToken, async (req, res) => {
  try {
    const { assessmentId } = req.params;
    const { questionId, selectedAnswer, timeTaken } = req.body;
    
    const assessment = await EnhancedAssessment.findOne({ assessmentId, userId: req.user.userId });
    if (!assessment) return res.status(404).json({ error: 'Assessment not found' });

    const result = assessmentAI.processAnswerAndGetNext(assessmentId, questionId, selectedAnswer, timeTaken);
    
    const currentQuestion = assessmentAI.assessmentHistory.get(assessmentId).questions.find(q => q.id === questionId);

    // Update assessment in DB
    assessment.responses.push({
      questionId: questionId,
      selectedAnswer: selectedAnswer,
      isCorrect: result.correct,
      timeTaken: timeTaken,
      difficulty: currentQuestion.difficulty,
      fundamentals: currentQuestion.fundamentals,
      topic: currentQuestion.topic
    });

    if (result.completed) {
      const report = result.feedback;
      assessment.isCompleted = true;
      assessment.endTime = new Date();
      assessment.totalQuestions = report.totalQuestions;
      assessment.correctAnswers = report.correctAnswers;
      assessment.accuracy = report.accuracy;
      assessment.adaptiveScore = report.adaptiveScore;
      assessment.fundamentalScores = report.fundamentalAssessment;
      assessment.aiFeedback = report.aiFeedback.toString();
      assessment.weakFundamentals = report.weakFundamentals;
      assessment.recommendations = report.recommendations;
    }
    
    await assessment.save();
    res.json(result);

  } catch (error) {
    console.error('Process answer error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/assessment/:assessmentId/ai-report', authenticateToken, async (req, res) => {
   try {
    const assessment = await EnhancedAssessment.findOne({ assessmentId: req.params.assessmentId });
    if (!assessment) return res.status(404).json({ error: "Report not found" });

    // Simple permission check
    if (assessment.userId.toString() !== req.user.userId) {
        return res.status(403).json({ error: "Access denied" });
    }

    res.json({
        assessmentInfo: {
            subject: assessment.subject,
            endTime: assessment.endTime,
            duration: assessment.endTime - assessment.startTime,
        },
        performance: {
            adaptiveScore: assessment.adaptiveScore,
            accuracy: assessment.accuracy,
            totalQuestions: assessment.totalQuestions,
        },
        fundamentalAnalysis: assessment.fundamentalScores,
        aiInsights: {
            feedback: assessment.aiFeedback,
            recommendations: assessment.recommendations,
        },
        detailedResponses: assessment.responses
    });
   } catch (error) {
        res.status(500).json({ error: error.message });
   }
});

// ===================================
// SERVER START
// ===================================
app.listen(PORT, () => {
  console.log(`CodeX Backend Server running on http://localhost:${PORT}`);
});

module.exports = app;