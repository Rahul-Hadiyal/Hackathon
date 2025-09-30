// Global state management
const state = {
  currentUser: null,
  currentSection: "home",
  assessment: {
    subject: null,
    questions: [],
    currentQuestionIndex: 0,
    answers: [],
    startTime: null,
    difficulty: "easy",
    testCount: 0
  },
  testHistory: [],
  userProgress: {
    correctAnswers: {},
    incorrectAnswers: {},
    difficultyLevel: "easy"
  }
};

// Sample question bank structure - Questions to be pasted here
const sampleQuestionBank = {
  skills: [
    {
      name: "Quantitative",
      questions: [
        {
          id: 1,
          question: "The ratio 5 : 4 expressed as a percent equals:",
          options: ["12.5%", "40%", "80%", "125%"],
          answer: "d",
          answer_text: "125%",
          difficulty: "very easy"
        },
        {
          id: 2,
          question: "3.5 can be expressed in terms of percentage as:",
          options: ["0.35%", "3.5%", "35%", "350%"],
          answer: "d",
          answer_text: "350%",
          difficulty: "very easy"
        },
        {
          id: 3,
          question: "Half of 1 percent written as a decimal is:",
          options: ["0.005", "0.05", "0.02", "0.2"],
          answer: "a",
          answer_text: "0.005",
          difficulty: "very easy"
        },
        {
          id: 4,
          question: "What is 15 percent of Rs. 34?",
          options: ["Rs. 3.40", "Rs. 3.75", "Rs. 4.50", "Rs. 5.10"],
          answer: "d",
          answer_text: "Rs. 5.10",
          difficulty: "very easy"
        },
        {
          id: 5,
          question: "63% of __ is: 2.25",
          options: ["2.25", "2.40", "2.50", "2.75"],
          answer: "a",
          answer_text: "2.25",
          difficulty: "very easy"
        },
        {
          id: 6,
          question: "88% of 370 + 24% of 210 - ? = 118?",
          options: ["256", "258", "268", "358"],
          answer: "b",
          answer_text: "258",
          difficulty: "very easy"
        },
        {
          id: 7,
          question: "860% of 50 + 50% of 860 = ?",
          options: ["430", "516", "860", "960"],
          answer: "c",
          answer_text: "860",
          difficulty: "very easy"
        },
        {
          id: 8,
          question: "45% of 750 - 25% of 480 = ?",
          options: ["216", "217.50", "236.50", "245"],
          answer: "b",
          answer_text: "217.50",
          difficulty: "very easy"
        },
        {
          id: 9,
          question: "40% of 1640 + ? = 35% of 980 + 150% of 850",
          options: ["372", "842", "962", "1052"],
          answer: "c",
          answer_text: "962",
          difficulty: "very easy"
        },
        {
          id: 10,
          question: "218% of 1674 = ? (choose the correct option shown)",
          options: ["0.5", "4", "6", "9"],
          answer: "d",
          answer_text: "9",
          difficulty: "very easy"
        },
        {
          id: 11,
          question: "60% of 264 is the same as:",
          options: ["10% of 44", "15% of 1056", "30% of 132", "None of these"],
          answer: "b",
          answer_text: "15% of 1056",
          difficulty: "very easy"
        },
        {
          id: 12,
          question:
            "270 candidates appeared for an examination, of which 252 passed. The pass percentage is:",
          options: ["80%", "85%", "90%", "93.33%"],
          answer: "d",
          answer_text: "93.33%",
          difficulty: "very easy"
        },
        {
          id: 13,
          question:
            "5 out of 2250 parts of earth is sulphur. What is the percentage of sulphur in earth:",
          options: ["0.22%", "0.222%", "0.0022%", "0.022%"],
          answer: "b",
          answer_text: "0.222%",
          difficulty: "very easy"
        },
        {
          id: 14,
          question: "What percent of 7.2 kg is 18 gms?",
          options: [".025%", "0.25%", "2.5%", "25%"],
          answer: "b",
          answer_text: "0.25%",
          difficulty: "very easy"
        },
        {
          id: 15,
          question: "0.01 is what percent of 0.1?",
          options: ["10%", "100%", "1%", "0.1%"],
          answer: "a",
          answer_text: "10%",
          difficulty: "very easy"
        },
        {
          id: 16,
          question: "What percent of Rs. 2650 is Rs. 1987.50?",
          options: ["60%", "75%", "80%", "90%"],
          answer: "b",
          answer_text: "75%",
          difficulty: "very easy"
        },
        {
          id: 17,
          question: "What percent of day is 3 hours?",
          options: ["12.5%", "6%", "10%", "25%"],
          answer: "a",
          answer_text: "12.5%",
          difficulty: "very easy"
        },
        {
          id: 18,
          question:
            "How many litres of pure acid are there in 8 litres of a 20% solution?",
          options: ["1.4", "1.5", "1.6", "2.4"],
          answer: "c",
          answer_text: "1.6",
          difficulty: "very easy"
        },
        {
          id: 19,
          question: "Which one of the following shows the best percentage?",
          options: ["25%", "50%", "75%", "100%"],
          answer: "b",
          answer_text: "50%",
          difficulty: "very easy"
        },
        {
          id: 20,
          question: "5% of (25% of Rs.1600) is:",
          options: ["Rs. 5", "Rs. 17.5", "Rs. 20", "Rs. 25"],
          answer: "c",
          answer_text: "Rs. 20",
          difficulty: "very easy"
        }
      ]
    },
    {
      name: "Logical",
      questions: [
        {
          id: 21,
          question: "If x is 75% of y, y is what percent of x?",
          options: ["100%", "122.22%", "133.33%", "140%"],
          answer: "c",
          answer_text: "133.33%",
          difficulty: "easy"
        },
        {
          id: 22,
          question:
            "If 18% of x is the same as 13.50% of y, 50% of x is the same as:",
          options: ["12.50% of y", "17.50% of y", "25% of y", "37.50% of y"],
          answer: "d",
          answer_text: "37.50% of y",
          difficulty: "easy"
        },
        {
          id: 23,
          question:
            "A student multiplied a number by 4/5 instead of 5/4. What is the percentage error in the calculation?",
          options: ["30%", "36%", "42%", "48%"],
          answer: "b",
          answer_text: "36%",
          difficulty: "easy"
        },
        {
          id: 24,
          question: "If 'r'% of 'r' is 49, what is the value of 'r'?",
          options: ["7", "70", "7.7", "77"],
          answer: "b",
          answer_text: "70",
          difficulty: "easy"
        },
        {
          id: 25,
          question:
            "If 25% of (A + B) = 80% of (A – B), A is what percentage of B?",
          options: ["161.91", "176.91", "184.91", "190.91"],
          answer: "d",
          answer_text: "190.91",
          difficulty: "easy"
        },
        {
          id: 26,
          question:
            "In a school 30% of the students play football and 50% of students play cricket. If 40% of the students play neither football nor cricket, what percentage of total students play both the games?",
          options: ["10", "12", "14", "20"],
          answer: "d",
          answer_text: "20",
          difficulty: "easy"
        },
        {
          id: 27,
          question:
            "30 liters of water is added to a 120 liters mixture containing 40% of alcohol. What is the concentration of alcohol in the resultant mixture?",
          options: ["30", "31", "32", "33.33"],
          answer: "c",
          answer_text: "32",
          difficulty: "easy"
        },
        {
          id: 28,
          question: "75 g is what percent of 2.25 kg?",
          options: ["3.33", "33.33", "4", "40"],
          answer: "a",
          answer_text: "3.33%",
          difficulty: "easy"
        },
        {
          id: 29,
          question:
            "If 25% of A is added to 50% of B, the resultant will be 90% of B. What percentage of A is B?",
          options: ["32.50", "40", "50", "62.50"],
          answer: "d",
          answer_text: "62.50",
          difficulty: "easy"
        },
        {
          id: 30,
          question:
            "If x% of 'a' is the same as y% of 'b', a variable 'z' can be written as:",
          options: ["(x*y)/100", "(a*b)/100", "(x*a)/(y*b)", "(y*b)/(x*a)"],
          answer: "c",
          answer_text: "(x*a)/(y*b)",
          difficulty: "easy"
        },
        {
          id: 31,
          question:
            "In 2020, 37.50% of the total employees of a company paid income tax. If 450 employees of the company did not pay tax, what is the total number of employees in the company?",
          options: ["600", "660", "720", "780"],
          answer: "c",
          answer_text: "720",
          difficulty: "easy"
        },
        {
          id: 32,
          question:
            "If A is 50% more than C and B is 25% less than C, A is what percent more/less than B?",
          options: ["70", "80", "90", "100"],
          answer: "d",
          answer_text: "100",
          difficulty: "easy"
        },
        {
          id: 33,
          question:
            "In a big garden 40% of the trees are mango trees. The number of mango trees is 80% of the number of guava trees. The rest of the trees are Jambolan trees. If the number of Jambolan trees is 40, what is the total number of trees in the garden?",
          options: ["360", "400", "480", "500"],
          answer: "b",
          answer_text: "400",
          difficulty: "easy"
        },
        {
          id: 34,
          question:
            "The population of a village is 1200. 58.33% of the total population are males. 50% of males and 60% of females of the village are literate. What is the total illiterate population of the village?",
          options: ["400", "480", "540", "550"],
          answer: "d",
          answer_text: "550",
          difficulty: "easy"
        },
        {
          id: 35,
          question:
            "What is to be added to 40% of 900 so that the sum must be equal to 30% of 2600?",
          options: ["300", "360", "420", "480"],
          answer: "c",
          answer_text: "420",
          difficulty: "easy"
        },
        {
          id: 36,
          question:
            "A number is divided into two parts in such a way that 75% of the 1st part is 12 less than 30% of the 2nd part and 50% of the 2nd part is 56 more than 80% of the 1st part. What is the number?",
          options: ["300", "320", "340", "350"],
          answer: "b",
          answer_text: "320",
          difficulty: "easy"
        },
        {
          id: 37,
          question:
            "A box contains 90 blue balls, 110 red balls, 150 black balls and 50 pink balls. 50% of blue balls and 70% of red balls are taken away. What percentage of the initial number of balls are remaining in the box?",
          options: ["60", "62.50", "67.50", "69.50"],
          answer: "d",
          answer_text: "69.50",
          difficulty: "easy"
        },
        {
          id: 38,
          question:
            "Out of two numbers, 66.67% of the bigger number is equal to 90% of the smaller number. If the sum of the numbers is 188, what is the value of the greater number?",
          options: ["100", "108", "112", "120"],
          answer: "b",
          answer_text: "108",
          difficulty: "easy"
        },
        {
          id: 39,
          question:
            "If 70% of a number added to 90 gives the result as the number itself. What is the number?",
          options: ["300", "360", "420", "480"],
          answer: "a",
          answer_text: "300",
          difficulty: "easy"
        },
        {
          id: 40,
          question:
            "If x% of y% of 125 is the same as 5% of 900, what is the product of x and y?",
          options: ["3000", "3200", "3400", "3600"],
          answer: "d",
          answer_text: "3600",
          difficulty: "easy"
        }
      ]
    },
    {
      name: "Verbal",
      questions: [
        {
          id: 41,
          question:
            "Sagar deposits 25% of his monthly salary in a bank account. From the rest of the salary, he spends 40% on rent and a combined amount of Rs. 15,000 on groceries. If now he has Rs. 12,000, what amount does he deposit in the bank account?",
          options: ["Rs. 10,000", "Rs. 15,000", "Rs. 20,000", "Rs. 25,000"],
          answer: "b",
          answer_text: "Rs. 15,000",
          difficulty: "moderate"
        },
        {
          id: 42,
          question:
            "Rs. 5300 is divided among Anuj, Manuj and Tanuj. Anuj gets 20% more amount than Manuj and Manuj gets 25% less amount than Tanuj. Find the amount (in Rs.) received by Tanuj.",
          options: ["2000", "2400", "2500", "2700"],
          answer: "a",
          answer_text: "2000",
          difficulty: "moderate"
        },
        {
          id: 43,
          question:
            "Riyansh has some pink and some white balls. The sum of 20% of pink balls and 40% of white balls is equal to 50% of the sum of 60% of pink balls and 60% of white balls. What is the ratio of total number of white balls to that of pink balls?",
          options: ["1 : 1", "1 : 2", "2 : 1", "3 : 2"],
          answer: "a",
          answer_text: "1 : 1",
          difficulty: "moderate"
        },
        {
          id: 44,
          question:
            "A student got 80% marks in an exam that has four subjects. He gets 75% marks in the first subject, 60% in the second, 90% in the third. If each subject has equal maximum marks, how many marks did he get out of 80 in the fourth subject?",
          options: ["60", "66", "72", "76"],
          answer: "d",
          answer_text: "76",
          difficulty: "moderate"
        },
        {
          id: 45,
          question:
            "90 is added to 60% of ‘X’ and the resultant is divided by 12. If the quotient is 50, what is the value of ‘X’?",
          options: ["750", "800", "850", "900"],
          answer: "c",
          answer_text: "850",
          difficulty: "moderate"
        },
        {
          id: 46,
          question:
            "The sum of the numbers of boys and girls in a school is 400. If the number of boys is ‘X’, the number of girls becomes ‘X’% of the total number of students. What is the total number of boys?",
          options: ["50", "60", "75", "80"],
          answer: "d",
          answer_text: "80",
          difficulty: "moderate"
        },
        {
          id: 47,
          question:
            "Due to an increment of 20% in the price of eggs, 5 less eggs are available for Rs. 200. What is the new rate of a dozen eggs?",
          options: ["Rs. 60", "Rs. 72", "Rs. 80", "Rs. 96"],
          answer: "d",
          answer_text: "Rs. 96",
          difficulty: "moderate"
        },
        {
          id: 48,
          question:
            "In 2020, 37.50% of the total employees of a company pay income tax. If 450 employees of the company did not pay tax, what is the total number of employees in the company?",
          options: ["600", "660", "720", "780"],
          answer: "c",
          answer_text: "720",
          difficulty: "moderate"
        },
        {
          id: 49,
          question:
            "Raju, Sanju and Kartik purchased an identical bike for the same price and all of them sold their bikes one year later. Raju sold his bike 25% cheaper than that of Sanju and 25% dearer than that of Kartik. The amount at which Kartik sold his bike is what percentage of the amount at which Sanju sold his bike?",
          options: ["30", "40", "50", "60"],
          answer: "d",
          answer_text: "60",
          difficulty: "moderate"
        },
        {
          id: 50,
          question:
            "In an election between two candidates, 30% of the voters on the voters’ list did not cast their votes. The winner was supported by 40% of all voters on the list and he got 900 votes more than his rival. What was the total number of voters on the list?",
          options: ["9000", "10000", "12000", "12500"],
          answer: "a",
          answer_text: "9000",
          difficulty: "moderate"
        },
        {
          id: 51,
          question:
            "The combined income of a village increased by 50% and the per capita income increased by 20% during a certain period. By what percentage did the population of the village increase during the same period?",
          options: ["10", "15", "20", "25"],
          answer: "d",
          answer_text: "25",
          difficulty: "moderate"
        },
        {
          id: 52,
          question:
            "Jatin spent 25% of his income on travelling expenses and 33.33% of the remaining on shopping. If the remaining amount left with Jatin is Rs. 14,400, find his income.",
          options: ["Rs. 20,000", "Rs. 24,000", "Rs. 25,000", "None of these"],
          answer: "d",
          answer_text: "None of these",
          difficulty: "moderate"
        },
        {
          id: 53,
          question:
            "A shopkeeper has some quantity of rice and some quantity of wheat. The total quantity of 20% rice and 30% wheat is 5/8 of the total quantity of 60% rice and 40% wheat. What is the ratio of the total quantity of rice to the total quantity of wheat?",
          options: ["1 : 1", "1 : 2", "3 : 2", "None of these"],
          answer: "d",
          answer_text: "None of these",
          difficulty: "moderate"
        },
        {
          id: 54,
          question:
            "When 80 is added to 80% of a number, the resultant is the number itself. Find 50% of that number.",
          options: ["200", "210", "220", "240"],
          answer: "a",
          answer_text: "200",
          difficulty: "moderate"
        },
        {
          id: 55,
          question:
            "Malini donated 25% of her income to a charity and deposited 40% of the rest in a bank. If she is left with Rs. 10,800, what is her income?",
          options: ["Rs. 20,000", "Rs. 24,000", "Rs. 25,000", "Rs. 27,000"],
          answer: "b",
          answer_text: "Rs. 24,000",
          difficulty: "moderate"
        },
        {
          id: 56,
          question:
            "In an exam, the marks scored by A are 40% more than the marks scored by B who has scored 25% less than the marks scored by C. If C scores 250 and the full marks of the exam is 500, what is the percentage of marks obtained by A?",
          options: ["47.50", "50", "52.50", "57.50"],
          answer: "c",
          answer_text: "52.50",
          difficulty: "moderate"
        },
        {
          id: 57,
          question:
            "A worker’s hourly wages increased by 20% and his weekly working hours reduced by 10%. If the worker was getting Rs. 1200 per week previously, what would be his weekly wages now?",
          options: ["Rs. 1,296", "Rs. 1,331", "Rs. 1,444", "Rs. 1,600"],
          answer: "a",
          answer_text: "Rs. 1,296",
          difficulty: "moderate"
        },
        {
          id: 58,
          question:
            "A student got 175 marks in a test paper. His percent of marks would have been 47.50% had he got 15 more marks. Find the percentage of marks he actually got.",
          options: ["37.50", "40", "43.75", "48"],
          answer: "c",
          answer_text: "43.75",
          difficulty: "moderate"
        },
        {
          id: 59,
          question:
            "A has twice as much money as B and B has 50% more money than C. If the average money with them is Rs. 12,100, how much money does A have?",
          options: ["Rs. 12,500", "Rs. 14,400", "Rs. 16,800", "Rs. 19,800"],
          answer: "d",
          answer_text: "Rs. 19,800",
          difficulty: "moderate"
        },
        {
          id: 60,
          question:
            "A person spent 50% of his monthly income on household expenses and 40% of the remaining on the rent. If the remaining amount left with the person is Rs. 4800, find his annual income.",
          options: ["Rs. 16,000", "Rs. 18,500", "Rs. 1,72,000", "Rs. 1,92,000"],
          answer: "d",
          answer_text: "Rs. 1,92,000",
          difficulty: "moderate"
        }
      ]
    },
    {
      name: "Analytical",
      questions: [
        {
          id: 61,
          question:
            "Joy's income is 50% more than Kim's income, and his savings are 37.5% less than Kim's expenditure. Kim's savings is 80% less than Joy's expenditure. If the combined savings of Joy and Kim is Rs. 31,500, what is the income (in Rs.) of Kim?",
          options: ["42,000", "45,000", "54,000", "36,000"],
          answer: "b",
          answer_text: "45,000",
          difficulty: "difficult"
        },
        {
          id: 62,
          question:
            "In an election between three candidates A, B and C, 20% of the eligible voters did not cast their votes and 200 of the cast votes were declared invalid. A got 50% of the valid votes and won by 2520 votes. C was the last among them and got 20% of the valid votes. How many eligible voters were there on the list?",
          options: ["16,000", "21,000", "24,000", "14,400"],
          answer: "a",
          answer_text: "16,000",
          difficulty: "difficult"
        },
        {
          id: 63,
          question:
            "The number of employees in company A is 80% of the number of employees in company B, and the number of employees in company C is 40% less than that in company B. The average number of employees in companies A, B and C is 4800. There are 1200 and 1400 male employees in A and C, respectively. What is the average number of female employees in companies A and C?",
          options: ["2900", "3200", "2500", "2600"],
          answer: "a",
          answer_text: "2900",
          difficulty: "difficult"
        },
        {
          id: 64,
          question:
            "A salesman's commission rate changed from 10% of the total sales to a fixed salary of Rs. 30,000 per month plus 4% commission on sales exceeding Rs. 1 lakh. The new remuneration is Rs. 5,000 more than that from the previous scheme. What was the salesman's monthly sales amount (in Rs.) assuming equal monthly sales?",
          options: ["3,50,000", "2,90,000", "3,60,000", "3,75,000"],
          answer: "a",
          answer_text: "3,50,000",
          difficulty: "difficult"
        },
        {
          id: 65,
          question:
            "The maximum marks for exams W, X, Y and Z are 120%, 150%, 80% and 100%, respectively, of the maximum marks for exam V. The score obtained in V, W, X, Y and Z are in the ratio 7 : 5 : 11 : 4 : 6. The total percentage score of Z and V together is 65%. What is the overall percentage score of all the exams?",
          options: ["55%", "60%", "75%", "72%"],
          answer: "b",
          answer_text: "60%",
          difficulty: "difficult"
        },
        {
          id: 66,
          question:
            "A student scored 60% in Mathematics and 80% in Science, both subjects having equal maximum marks. He then falsely increased his obtained marks by 10% in Mathematics and by 5% in Science, and also increased the maximum marks by 40% for Mathematics and by ‘Y’% for Science. If the original overall percentage was 40% more than the adjusted overall percentage score, find the value of ‘Y’.",
          options: ["60%", "50%", "75%", "62.5%"],
          answer: "a",
          answer_text: "60%",
          difficulty: "difficult"
        },
        {
          id: 67,
          question:
            "Four friends, Aman, Bhavesh, Seema and Karan, decided to pool their money together to donate to a charity. They had a total of Rs. 900. Aman had three times the amount that Seema had, while Bhavesh had Rs. 60 more than Karan. Aman and Bhavesh together had double the amount that Seema and Karan together had. Find the amount (in Rs.) with Aman.",
          options: ["360", "240", "320", "450"],
          answer: "a",
          answer_text: "360",
          difficulty: "difficult"
        },
        {
          id: 68,
          question:
            "A school had two exams, Maths and Science, and the number of students who passed the Maths exam was 28.57% higher than the number of students who passed the Science exam. Of those who took the Maths exam, 25% failed, and of those who took the Science exam, 30% failed. The total number of students who failed any of the two exams was 90. If each student appeared for exactly one exam, what was the total number of students?",
          options: ["350", "330", "370", "280"],
          answer: "a",
          answer_text: "350",
          difficulty: "difficult"
        },
        {
          id: 69,
          question:
            "A group of friends went out for dinner and the total bill was Rs. 6400. Aman paid twice as much as Bhavesh, Chirag paid 25% less than Bhavesh and Dinesh paid 66.67% more than Chirag. A sum of Rs. 1600 was spent on fuel which was split equally among them. What percent of the total expenses were paid by Dinesh?",
          options: ["33.33%", "20%", "12.5%", "25%"],
          answer: "d",
          answer_text: "25%",
          difficulty: "difficult"
        },
        {
          id: 70,
          question:
            "The population of a town is 384,000 and the number of females is 40% more than the number of males. Out of the total male population, 40% are adults and the rest are children. Out of the total female population, 50% are adults and the rest are children. Find the total number of children in the town.",
          options: ["2,12,000", "2,08,000", "1,96,000", "2,16,000"],
          answer: "b",
          answer_text: "2,08,000",
          difficulty: "difficult"
        },
        {
          id: 71,
          question:
            "In a school, there are a total of 1200 students, including all age groups. 62.5% of the students below the age of 10 are enrolled in the music club, out of which 40% attend the club regularly. Among the students who are aged 10 years or more, 30% of the students enrolled for music club and 25% of them attend the club regularly. If 174 students attend the club regularly, how many students in the school are aged 10 years or more?",
          options: ["560", "720", "600", "840"],
          answer: "b",
          answer_text: "720",
          difficulty: "difficult"
        },
        {
          id: 72,
          question:
            "The number of workers in a factory is 800 more than that of supervisors. The total number of supervisors selected for a training session is 24 less than the number of workers selected. The number of supervisors and the number of workers selected for the training session are 8% and 6%, respectively. How many supervisors are selected for the training?",
          options: ["72", "108", "96", "84"],
          answer: "c",
          answer_text: "96",
          difficulty: "difficult"
        },
        {
          id: 73,
          question:
            "A father splits his money among his four children, A, B, C and D, in a certain way. A gets 25% of the total amount, B gets 60% of what A gets and D gets Rs. 5400 more than what C gets. If the average amount of money each child has is 10% of the father's salary, and the father's salary is Rs. 60,000, what is the amount (in Rs.) that D received?",
          options: ["8400", "9600", "9900", "10500"],
          answer: "c",
          answer_text: "9900",
          difficulty: "difficult"
        },
        {
          id: 74,
          question:
            "A store has three products, X, Y and Z, with production costs in the ratio of 8 : 5 : 7. If the store sells X, Y and Z with profits of 25%, 22%, and 20%, respectively, what is the total percentage profit from all three products?",
          options: ["22.5%", "20.5%", "21.33%", "24.33%"],
          answer: "a",
          answer_text: "22.5%",
          difficulty: "difficult"
        },
        {
          id: 75,
          question:
            "A group of investors invest a certain amount in a startup. They make a profit of 50% of the total investment each year and reinvest 80% of the total revenue (principal + profit) in the business while distributing the remaining revenue as a bonus to the employees. They repeat this cycle for 3 years. If the revenue at the end of the third year was Rs. 75,600, what was the amount (in Rs.) of money they distributed as bonuses at the end of the 2nd year?",
          options: ["12,600", "14,300", "11,600", "13,200"],
          answer: "a",
          answer_text: "12,600",
          difficulty: "difficult"
        },
        {
          id: 76,
          question:
            "Raman and Kajal have a certain number of chocolates with them. Kajal says to Raman “If I give you 20% of my chocolates, I will have 12 fewer chocolates than you”. Raman says to Kajal, “If I give you chocolates equal to 37.5% of your chocolates, you will have 5 times as many chocolates as me”. What is the total number of chocolates with them?",
          options: ["396", "356", "420", "442"],
          answer: "a",
          answer_text: "396",
          difficulty: "difficult"
        },
        {
          id: 77,
          question:
            "The number of members in club P to that in Q is in the ratio of p : q. In clubs P and Q, 80% and 50% of the members are male, respectively, and the difference between the number of females is 10% of the total number of members in P and Q combined. What is the value of 7p + 5q, if there are more females in Q than in P?",
          options: ["45", "43", "64", "37"],
          answer: "b",
          answer_text: "43",
          difficulty: "difficult"
        },
        {
          id: 78,
          question:
            "Two shopkeepers A and B sold some watches and pens. The number of pens sold by A is three times the number of watches sold by B. The number of watches sold by A is 25% of the number of pens sold by B. If the total number of products sold by B is twice the total number of products sold by A, what is the total number of watches sold as a percentage of the total number of pens sold?",
          options: ["21.33%", "28.56%", "26.92%", "31.45%"],
          answer: "c",
          answer_text: "26.92%",
          difficulty: "difficult"
        },
        {
          id: 79,
          question:
            "In a college election, there were two candidates: A and B. The number of people who did not vote is six times the difference between the valid votes of the two candidates. 25% of the cast votes were declared invalid. The valid votes winner got is 39% of the cast votes and he won by 84 votes. What was the total number of voters on the voting list?",
          options: ["3280", "3350", "3416", "3304"],
          answer: "d",
          answer_text: "3304",
          difficulty: "difficult"
        },
        {
          id: 80,
          question:
            "A teacher distributes some chocolates equally among all the students of a class. Each student gets 4 chocolates more than the total number of students in the class. If each student gets 2 chocolates less than the total number of students in the class, the teacher has to distribute 25% fewer chocolates. By what percent the total number of chocolates should be increased, such that on even distribution each student gets 8 chocolates more than the number of students in the class?",
          options: ["12.5%", "16.67%", "8.33%", "15%"],
          answer: "b",
          answer_text: "16.67%",
          difficulty: "difficult"
        }
      ]
    }
  ]
};

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  checkAuthState();
  setupEventListeners();
  setupNavScrollEffect();

  // Hide AI chatbot initially
  const chatbotContainer = document.getElementById("ai-chatbot-container");
  if (chatbotContainer) {
    chatbotContainer.style.display = "none";
  }
});

// Authentication Functions
function showAuthModal(type) {
  const modalHTML = type === "login" ? createLoginModal() : createSignupModal();
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = modalHTML;

  const modalOverlay = modalContainer.querySelector(".modal-overlay");
  setTimeout(() => modalOverlay.classList.add("active"), 10);
}

function createLoginModal() {
  return `
    <div class="modal-overlay">
      <div class="modal-content glass-card">
        <button class="modal-close" onclick="closeModal()">&times;</button>
        <h2>Welcome Back!</h2>
        <p>Login to continue your learning journey</p>
        <form onsubmit="handleLogin(event)">
          <div class="form-group">
            <label>Email</label>
            <input type="email" id="login-email" required placeholder="your@email.com">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" id="login-password" required placeholder="••••••••">
          </div>
          <button type="submit" class="btn" style="width: 100%;">Login</button>
        </form>
        <div class="auth-switch">
          Don't have an account? <span onclick="showAuthModal('signup')">Sign up</span>
        </div>
      </div>
    </div>
  `;
}

function createSignupModal() {
  return `
    <div class="modal-overlay">
      <div class="modal-content glass-card">
        <button class="modal-close" onclick="closeModal()">&times;</button>
        <h2>Join CodeX</h2>
        <p>Create your account and start learning</p>
        
        <div class="progress-bar">
          <div class="progress-fill" id="signup-progress" style="width: 33%"></div>
        </div>
        
        <form onsubmit="handleSignup(event)">
          <div class="form-step active" id="step1">
            <h3>Choose Your Role</h3>
            <div class="role-selection">
              <div class="role-btn" onclick="selectRole(this, 'student')">
                <h3>🎓 Student</h3>
                <p>Learn and grow</p>
              </div>
              <div class="role-btn" onclick="selectRole(this, 'teacher')">
                <h3>👨‍🏫 Teacher</h3>
                <p>Teach and guide</p>
              </div>
              <div class="role-btn" onclick="selectRole(this, 'parent')">
                <h3>👪 Parent</h3>
                <p>Monitor progress</p>
              </div>
            </div>
            <input type="hidden" id="signup-role" required>
          </div>
          
          <div class="form-step" id="step2">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" id="signup-name" required placeholder="Your Name">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" id="signup-email" required placeholder="your@email.com">
            </div>
          </div>
          
          <div class="form-step" id="step3">
            <div class="form-group">
              <label>Password</label>
              <input type="password" id="signup-password" required placeholder="••••••••" minlength="8">
            </div>
            <div class="form-group">
              <label>Grade/Class (Students only)</label>
              <select id="signup-grade">
                <option value="">Select Grade</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>
            <div class="form-group">
              <label>School Name</label>
              <input type="text" id="signup-school" placeholder="Your School Name">
            </div>
          </div>
          
          <div class="form-navigation">
            <button type="button" class="btn btn-ghost" onclick="previousStep()" id="prev-step-btn" style="display: none;">Previous</button>
            <button type="button" class="btn" onclick="nextStep()" id="next-step-btn">Next</button>
            <button type="submit" class="btn btn-secondary" id="submit-btn" style="display: none;">Create Account</button>
          </div>
        </form>
        
        <div class="auth-switch">
          Already have an account? <span onclick="showAuthModal('login')">Login</span>
        </div>
      </div>
    </div>
  `;
}

function selectRole(element, role) {
  document
    .querySelectorAll(".role-btn")
    .forEach((btn) => btn.classList.remove("selected"));
  element.classList.add("selected");
  document.getElementById("signup-role").value = role;
}

let currentStep = 1;
function nextStep() {
  if (currentStep === 1 && !document.getElementById("signup-role").value) {
    alert("Please select a role");
    return;
  }

  if (currentStep < 3) {
    document.getElementById(`step${currentStep}`).classList.remove("active");
    currentStep++;
    document.getElementById(`step${currentStep}`).classList.add("active");

    document.getElementById("signup-progress").style.width = `${
      (currentStep / 3) * 100
    }%`;

    if (currentStep > 1)
      document.getElementById("prev-step-btn").style.display = "inline-block";
    if (currentStep === 3) {
      document.getElementById("next-step-btn").style.display = "none";
      document.getElementById("submit-btn").style.display = "inline-block";
    }
  }
}

function previousStep() {
  if (currentStep > 1) {
    document.getElementById(`step${currentStep}`).classList.remove("active");
    currentStep--;
    document.getElementById(`step${currentStep}`).classList.add("active");

    document.getElementById("signup-progress").style.width = `${
      (currentStep / 3) * 100
    }%`;

    if (currentStep === 1)
      document.getElementById("prev-step-btn").style.display = "none";
    if (currentStep < 3) {
      document.getElementById("next-step-btn").style.display = "inline-block";
      document.getElementById("submit-btn").style.display = "none";
    }
  }
}

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  // ✅ Check if a user with this email exists
  const savedUserRaw = localStorage.getItem(`user_${email}`);
  if (!savedUserRaw) {
    alert("Invalid email or password. Please sign up first.");
    return; // stop login
  }

  const savedUser = JSON.parse(savedUserRaw);
  if (savedUser.password !== password) {
    alert("Invalid email or password. Please try again.");
    return; // stop login
  }

  // User exists and password matches
  const existingStreak = getStoredStreak(email);

  // Simulate authentication
  const mockUser = {
    id: Math.random().toString(36).substr(2, 9),
    email: email,
    name: email.split("@")[0],
    role: "student",
    grade: "10",
    school: "Demo High School",
    loginStreak: existingStreak.streak,
    lastLogin: new Date().toDateString()
  };

  // Update streak and save user
  updateLoginStreak(mockUser);
  state.currentUser = mockUser;
  localStorage.setItem("currentUser", JSON.stringify(mockUser));

  // Load user data
  loadUserData(mockUser.id);

  closeModal();
  navigateToDashboard(mockUser.role);
}

function handleSignup(event) {
  event.preventDefault();

  const role = document.getElementById("signup-role").value;
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const grade = document.getElementById("signup-grade").value;
  const school = document.getElementById("signup-school").value;

  const newUser = {
    id: Math.random().toString(36).substr(2, 9),
    email: email,
    name: name,
    role: role,
    grade: grade || null,
    school: school || null,
    loginStreak: 1,
    lastLogin: new Date().toDateString(),
    firstLogin: true
  };

  // Initialize streak for new user
  localStorage.setItem(
    `loginStreak_${email}`,
    JSON.stringify({
      streak: 1,
      lastLogin: new Date().toDateString()
    })
  );

  state.currentUser = newUser;
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  localStorage.setItem(`user_${email}`, JSON.stringify(newUser)); // ✅ ADD THIS LINE

  // Initialize empty user data
  state.testHistory = [];
  state.userProgress = {
    correctAnswers: {},
    incorrectAnswers: {},
    difficultyLevel: "easy"
  };

  closeModal();
  navigateToDashboard(role);
}

function getStoredStreak(email) {
  const stored = localStorage.getItem(`loginStreak_${email}`);
  const today = new Date().toDateString();

  if (!stored) {
    return { streak: 1, lastLogin: today };
  }

  const streakData = JSON.parse(stored);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (streakData.lastLogin === today) {
    return streakData;
  } else if (streakData.lastLogin === yesterday.toDateString()) {
    return { streak: streakData.streak + 1, lastLogin: today };
  } else {
    return { streak: 1, lastLogin: today };
  }
}

function updateLoginStreak(user) {
  if (user) {
    const streakData = {
      streak: user.loginStreak,
      lastLogin: user.lastLogin
    };
    localStorage.setItem(
      `loginStreak_${user.email}`,
      JSON.stringify(streakData)
    );
  }
}

function loadUserData(userId) {
  state.testHistory =
    JSON.parse(localStorage.getItem(`testHistory_${userId}`)) || [];
  state.userProgress = JSON.parse(
    localStorage.getItem(`userProgress_${userId}`)
  ) || {
    correctAnswers: {},
    incorrectAnswers: {},
    difficultyLevel: "easy"
  };
}

function closeModal() {
  const modalOverlay = document.querySelector(".modal-overlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    setTimeout(() => {
      document.getElementById("modal-container").innerHTML = "";
      currentStep = 1;
    }, 300);
  }
}

function checkAuthState() {
  const savedUser = localStorage.getItem("currentUser");
  if (savedUser) {
    state.currentUser = JSON.parse(savedUser);
    loadUserData(state.currentUser.id);
    navigateToDashboard(state.currentUser.role);
  }
}

function logout() {
  const userId = state.currentUser?.id;

  // Save user data
  if (userId) {
    localStorage.setItem(
      `testHistory_${userId}`,
      JSON.stringify(state.testHistory)
    );
    localStorage.setItem(
      `userProgress_${userId}`,
      JSON.stringify(state.userProgress)
    );
  }

  localStorage.removeItem("currentUser");

  // Reset state
  state.currentUser = null;
  state.testHistory = [];
  state.userProgress = {
    correctAnswers: {},
    incorrectAnswers: {},
    difficultyLevel: "easy"
  };

  // Hide only dashboards and assessment/report views
  document
    .querySelectorAll(
      "#student-dashboard, #teacher-dashboard, #parent-dashboard, #assessment-view, #report-view"
    )
    .forEach((section) => (section.style.display = "none"));

  // Show home section
  const homeSection = document.getElementById("home");
  if (homeSection) homeSection.style.display = "block";

  // Show main content and navbar
  const mainContent = document.getElementById("main-content");
  const navbar = document.getElementById("navbar");
  if (mainContent) mainContent.style.display = "block";
  if (navbar) navbar.style.display = "block";

  // Hide AI chatbot
  const chatbotContainer = document.getElementById("ai-chatbot-container");
  if (chatbotContainer) chatbotContainer.style.display = "none";

  // Scroll to top
  window.scrollTo(0, 0);
}

// Navigation
function navigateToDashboard(role) {
  switch (role) {
    case "student":
      showStudentDashboard();
      break;
    case "teacher":
      showTeacherDashboard();
      break;
    case "parent":
      showParentDashboard();
      break;
  }
}

function showSection(sectionId) {
  // Hide all sections
  document
    .querySelectorAll("main > section, .hidden-section")
    .forEach((section) => {
      section.style.display = "none";
    });

  // Show the requested section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = "block";
    targetSection.classList.remove("hidden-section");
  }

  // Show/hide main content
  const mainContent = document.getElementById("main-content");
  if (sectionId === "home" || !sectionId) {
    if (mainContent) mainContent.style.display = "block";
  } else {
    if (mainContent) mainContent.style.display = "none";
  }

  //Restore chatbot visibility automatically
  const chatbot = document.getElementById("ai-chatbot-container");
  if (chatbot && state.currentUser?.role === "student") {
    chatbot.style.display = "block";
  }

  state.currentSection = sectionId;
}

// Student Dashboard
function showStudentDashboard() {
  showSection("student-dashboard");

  if (state.currentUser) {
    const nameDisplay = document.getElementById("student-name-display");
    const gradeDisplay = document.getElementById("profile-grade");
    const schoolDisplay = document.getElementById("profile-school");

    if (nameDisplay) nameDisplay.textContent = state.currentUser.name;
    if (gradeDisplay)
      gradeDisplay.textContent = `Grade ${state.currentUser.grade || "N/A"}`;
    if (schoolDisplay)
      schoolDisplay.textContent = state.currentUser.school || "Not specified";

    // Show login streak
    displayLoginStreak();
  }

  renderSubjectSelection();
  loadStudentProgress();

  // Show AI chatbot for students only
  const chatbotContainer = document.getElementById("ai-chatbot-container");
  if (chatbotContainer && state.currentUser?.role === "student") {
    chatbotContainer.style.display = "block";
    // AI CHATBOT INTEGRATION POINT - Initialize chatbot here
  }
}

function displayLoginStreak() {
  // Add streak display to dashboard if it doesn't exist
  const dashboardHeader = document.querySelector(
    "#student-dashboard .dashboard-header"
  );
  if (dashboardHeader && state.currentUser.loginStreak > 1) {
    let streakElement = document.getElementById("login-streak");
    if (!streakElement) {
      streakElement = document.createElement("div");
      streakElement.id = "login-streak";
      streakElement.style.cssText = `
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background: linear-gradient(135deg, #ff6b6b, #ffa500);
        border-radius: 25px;
        color: white;
        font-weight: 600;
        display: inline-block;
        font-size: 1.1rem;
      `;
      dashboardHeader.appendChild(streakElement);
    }
    streakElement.textContent = `🔥 ${state.currentUser.loginStreak} day streak!`;
    streakElement.style.display = "inline-block";
  }
}

function renderSubjectSelection() {
  const subjects = [
    { name: "Quantitative", icon: "📊", key: "Quantitative" },
    { name: "Logical", icon: "🧠", key: "Logical" },
    { name: "Verbal", icon: "💬", key: "Verbal" },
    { name: "Analytical", icon: "🔍", key: "Analytical" }
  ];

  const container = document.getElementById("subject-selection-list");
  if (container) {
    container.innerHTML = subjects
      .map(
        (subject) => `
      <button class="subject-btn" onclick="startAssessment('${subject.key}')">
        <div class="subject-icon">${subject.icon}</div>
        <div>${subject.name}</div>
      </button>
    `
      )
      .join("");
  }
}

function loadStudentProgress() {
  const recentTests = state.testHistory.slice(-5);
  const container = document.getElementById("recent-tests");

  if (container) {
    if (recentTests.length > 0) {
      container.innerHTML = recentTests
        .map(
          (test) => `
        <div class="profile-item">
          <span class="profile-label">${test.subject}</span>
          <span>${test.score}% - ${test.grade}</span>
        </div>
      `
        )
        .join("");
    } else {
      container.innerHTML =
        '<p class="no-tests">Take your first test to see your progress!</p>';
    }
  }
}

// Teacher Dashboard
function showTeacherDashboard() {
  showSection("teacher-dashboard");

  // Hide AI chatbot for non-students
  const chatbotContainer = document.getElementById("ai-chatbot-container");
  if (chatbotContainer) {
    chatbotContainer.style.display = "none";
  }

  if (state.currentUser) {
    const teacherDisplay = document.getElementById("teacher-name-display");
    if (teacherDisplay) teacherDisplay.textContent = state.currentUser.name;
  }

  loadTeacherStats();
  loadStudentList();
}

function loadTeacherStats() {
  const totalStudents = document.getElementById("total-students");
  const activeTests = document.getElementById("active-tests");
  const avgPerformance = document.getElementById("avg-performance");

  if (totalStudents) totalStudents.textContent = "32";
  if (activeTests) activeTests.textContent = "5";
  if (avgPerformance) avgPerformance.textContent = "78%";
}

function loadStudentList() {
  const mockStudents = [
    { name: "Alice Johnson", score: 92, status: "excellent" },
    { name: "Bob Smith", score: 78, status: "good" },
    { name: "Charlie Brown", score: 65, status: "needs-improvement" },
    { name: "Diana Prince", score: 88, status: "excellent" },
    { name: "Ethan Hunt", score: 73, status: "good" }
  ];

  const container = document.getElementById("teacher-student-list");
  if (container) {
    container.innerHTML = mockStudents
      .map(
        (student) => `
      <div class="student-item">
        <span class="student-name">${student.name}</span>
        <span class="student-score score-${student.status}">${student.score}%</span>
      </div>
    `
      )
      .join("");
  }
}

function createNewTest() {
  alert("Test creation feature coming soon!");
}

function viewAllReports() {
  alert("Reports view coming soon!");
}

function exportData() {
  alert("Data export feature coming soon!");
}

// Parent Dashboard
function showParentDashboard() {
  showSection("parent-dashboard");

  // Hide AI chatbot for non-students
  const chatbotContainer = document.getElementById("ai-chatbot-container");
  if (chatbotContainer) {
    chatbotContainer.style.display = "none";
  }

  if (state.currentUser) {
    const childDisplay = document.getElementById("child-name-display");
    if (childDisplay) childDisplay.textContent = "Your Child";
  }

  loadParentDashboard();
}

function loadParentDashboard() {
  const subjects = `
    <div class="profile-item">
      <span class="profile-label">Quantitative</span>
      <span>85% - B+</span>
    </div>
    <div class="profile-item">
      <span class="profile-label">Logical</span>
      <span>92% - A</span>
    </div>
    <div class="profile-item">
      <span class="profile-label">Verbal</span>
      <span>78% - B</span>
    </div>
    <div class="profile-item">
      <span class="profile-label">Analytical</span>
      <span>88% - A-</span>
    </div>
  `;

  const subjectsContainer = document.getElementById("parent-child-subjects");
  if (subjectsContainer) {
    subjectsContainer.innerHTML = subjects;
  }

  const ctx = document.getElementById("parent-progress-chart");
  if (ctx && typeof Chart !== "undefined") {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Overall Performance",
            data: [75, 78, 82, 85],
            borderColor: "#6366f1",
            backgroundColor: "rgba(99, 102, 241, 0.1)",
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: { color: "rgba(148, 163, 184, 0.1)" },
            ticks: { color: "#94a3b8" }
          },
          x: {
            grid: { color: "rgba(148, 163, 184, 0.1)" },
            ticks: { color: "#94a3b8" }
          }
        }
      }
    });
  }
}

// Assessment System
function startAssessment(subject) {
  state.assessment.subject = subject;
  state.assessment.testCount = state.testHistory.filter(
    (test) => test.subject === subject
  ).length;
  state.assessment.questions = generateAdaptiveQuestions(subject);
  state.assessment.currentQuestionIndex = 0;
  state.assessment.answers = [];
  state.assessment.startTime = new Date();

  if (state.assessment.questions.length === 0) {
    alert(
      "No questions available for this subject. Please add questions to the question bank."
    );
    return;
  }

  showSection("assessment-view");

  //Hide chatbot when exam starts
  toggleChatbotDuringExam(true);

  displayQuestion();
}

function generateAdaptiveQuestions(subject) {
  const skillData = sampleQuestionBank.skills.find(
    (skill) => skill.name === subject
  );
  if (!skillData || !skillData.questions || skillData.questions.length === 0) {
    console.error(`No questions found for subject: ${subject}`);
    return [];
  }

  let questions = [...skillData.questions];
  const userProgress = state.userProgress;
  const testCount = state.assessment.testCount;

  // Determine difficulty based on test count and previous performance
  let targetDifficulty = "easy";
  if (testCount === 0) {
    targetDifficulty = "easy";
  } else if (testCount >= 1 && testCount < 3) {
    targetDifficulty = "easy";
  } else if (testCount >= 3 && testCount < 6) {
    targetDifficulty = "moderate";
  } else {
    targetDifficulty = "difficult";
  }

  // Filter questions by difficulty and adaptive logic
  let adaptiveQuestions = questions.filter((q) => {
    const qId = q.id;
    const wasCorrect = userProgress.correctAnswers[qId];
    const wasIncorrect = userProgress.incorrectAnswers[qId];

    if (wasCorrect) {
      // If answered correctly before, give harder questions
      return q.difficulty === "moderate" || q.difficulty === "difficult";
    } else if (wasIncorrect) {
      // If answered incorrectly before, give same or easier questions
      return q.difficulty === "easy" || q.difficulty === "very easy";
    } else {
      // New question, use target difficulty
      return q.difficulty === targetDifficulty || q.difficulty === "easy";
    }
  });

  // Fallback to all questions if filtered set is too small
  if (adaptiveQuestions.length < 10) {
    adaptiveQuestions = questions;
  }

  // Randomize and select 10 questions
  return shuffleArray(adaptiveQuestions).slice(
    0,
    Math.min(10, adaptiveQuestions.length)
  );
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function displayQuestion() {
  if (state.assessment.questions.length === 0) {
    alert("No questions available for this subject. Please contact support.");
    backToDashboard();
    return;
  }

  const question =
    state.assessment.questions[state.assessment.currentQuestionIndex];
  const container = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");

  // Update progress info
  const currentSubject = document.getElementById("current-subject");
  const currentQuestion = document.getElementById("current-question");
  const totalQuestions = document.getElementById("total-questions");

  if (currentSubject) currentSubject.textContent = state.assessment.subject;
  if (currentQuestion)
    currentQuestion.textContent = state.assessment.currentQuestionIndex + 1;
  if (totalQuestions)
    totalQuestions.textContent = state.assessment.questions.length;

  // Display question with difficulty indicator
  if (container) {
    container.innerHTML = `
      <h3>${question.question}</h3>
      <span class="difficulty-badge difficulty-${question.difficulty.replace(
        " ",
        "-"
      )}">${question.difficulty}</span>
    `;
  }

  // Display options
  if (optionsContainer) {
    optionsContainer.innerHTML = question.options
      .map(
        (option, index) => `
      <button class="option-btn" onclick="selectOption(${index})">
        ${String.fromCharCode(65 + index)}. ${option}
      </button>
    `
      )
      .join("");
  }

  // Update navigation buttons
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (prevBtn) prevBtn.disabled = state.assessment.currentQuestionIndex === 0;
  if (nextBtn) {
    nextBtn.textContent =
      state.assessment.currentQuestionIndex ===
      state.assessment.questions.length - 1
        ? "Finish"
        : "Next";
  }

  // Restore selected answer if exists
  if (
    state.assessment.answers[state.assessment.currentQuestionIndex] !==
    undefined
  ) {
    const selectedIndex =
      state.assessment.answers[state.assessment.currentQuestionIndex];
    const optionButtons = document.querySelectorAll(".option-btn");
    if (optionButtons[selectedIndex]) {
      optionButtons[selectedIndex].classList.add("selected");
    }
  }
}

function selectOption(index) {
  // Remove previous selection
  document
    .querySelectorAll(".option-btn")
    .forEach((btn) => btn.classList.remove("selected"));

  // Add selection
  const optionButtons = document.querySelectorAll(".option-btn");
  if (optionButtons[index]) {
    optionButtons[index].classList.add("selected");
  }

  // Store answer
  state.assessment.answers[state.assessment.currentQuestionIndex] = index;
}

function nextQuestion() {
  if (
    state.assessment.currentQuestionIndex <
    state.assessment.questions.length - 1
  ) {
    state.assessment.currentQuestionIndex++;
    displayQuestion();
  } else {
    finishAssessment();
  }
}

function previousQuestion() {
  if (state.assessment.currentQuestionIndex > 0) {
    state.assessment.currentQuestionIndex--;
    displayQuestion();
  }
}

function finishAssessment() {
  const endTime = new Date();
  const timeTaken = Math.round(
    (endTime - state.assessment.startTime) / 1000 / 60
  );

  // Calculate score and update progress
  let correctAnswers = 0;
  state.assessment.questions.forEach((question, index) => {
    const userAnswer = state.assessment.answers[index];
    const correctAnswerIndex =
      question.answer === "a"
        ? 0
        : question.answer === "b"
        ? 1
        : question.answer === "c"
        ? 2
        : 3;

    if (userAnswer === correctAnswerIndex) {
      correctAnswers++;
      state.userProgress.correctAnswers[question.id] = true;
    } else {
      state.userProgress.incorrectAnswers[question.id] = true;
    }
  });

  const score = Math.round(
    (correctAnswers / state.assessment.questions.length) * 100
  );
  const grade = getGrade(score);

  // Save to history
  const testResult = {
    subject: state.assessment.subject,
    score: score,
    grade: grade,
    timeTaken: timeTaken,
    date: new Date().toISOString(),
    questionsAttempted: state.assessment.questions.length,
    correctAnswers: correctAnswers
  };

  state.testHistory.push(testResult);

  // Save to localStorage
  if (state.currentUser) {
    localStorage.setItem(
      `testHistory_${state.currentUser.id}`,
      JSON.stringify(state.testHistory)
    );
    localStorage.setItem(
      `userProgress_${state.currentUser.id}`,
      JSON.stringify(state.userProgress)
    );
  }

  // Show report
  showReport(testResult);
}

function getGrade(score) {
  if (score >= 90) return "A+";
  if (score >= 85) return "A";
  if (score >= 80) return "A-";
  if (score >= 75) return "B+";
  if (score >= 70) return "B";
  if (score >= 65) return "B-";
  if (score >= 60) return "C+";
  if (score >= 55) return "C";
  return "D";
}

function showReport(testResult) {
  showSection("report-view");

  // Display basic metrics
  document.getElementById("report-subject-display").textContent =
    testResult.subject;
  document.getElementById("report-score").textContent = testResult.score;
  document.getElementById("report-accuracy").textContent =
    testResult.score + "%";
  document.getElementById("report-grade").textContent = testResult.grade;
  document.getElementById("report-time").textContent =
    testResult.timeTaken + " min";

  // Generate AI feedback
  generateAIFeedback(testResult);

  // Create performance chart
  createPerformanceChart(testResult);

  //Show chatbot again after exam
  toggleChatbotDuringExam(false);
}

function generateAIFeedback(testResult) {
  let feedback = "";

  if (testResult.score >= 90) {
    feedback = `Excellent work! You've demonstrated strong mastery of ${testResult.subject}. Your understanding is comprehensive and you're ready for more advanced topics. Consider exploring additional challenging problems to further enhance your skills.`;
  } else if (testResult.score >= 75) {
    feedback = `Good performance! You have a solid grasp of the fundamentals in ${testResult.subject}. Focus on the areas where you made mistakes to improve further. Practice more complex problems to strengthen your understanding.`;
  } else if (testResult.score >= 60) {
    feedback = `You're making progress in ${testResult.subject}, but there's room for improvement. Review the concepts you found challenging and practice similar problems. Don't hesitate to seek help from teachers or peers.`;
  } else {
    feedback = `This assessment shows you need more practice with ${testResult.subject} fundamentals. Start with basic concepts and gradually work your way up. Consider getting additional support through tutoring or study groups.`;
  }

  feedback += `\n\n<strong>Personalized Recommendations:</strong>\n`;
  feedback += `• Spend 30 minutes daily on practice problems\n`;
  feedback += `• Review incorrect answers and understand why\n`;
  feedback += `• Try explaining concepts to others to reinforce learning`;

  document.getElementById("report-feedback-content").innerHTML = feedback;
}

function createPerformanceChart(testResult) {
  const ctx = document.getElementById("report-chart");
  if (ctx) {
    new Chart(ctx, {
      type: "radar",
      data: {
        labels: [
          "Accuracy",
          "Speed",
          "Consistency",
          "Difficulty Level",
          "Improvement"
        ],
        datasets: [
          {
            label: "Your Performance",
            data: [
              testResult.score,
              Math.min(100, 120 - testResult.timeTaken * 2),
              85,
              75,
              90
            ],
            backgroundColor: "rgba(99, 102, 241, 0.2)",
            borderColor: "#6366f1",
            pointBackgroundColor: "#6366f1",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#6366f1"
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            grid: { color: "rgba(148, 163, 184, 0.1)" },
            ticks: {
              color: "#94a3b8",
              backdropColor: "transparent"
            },
            pointLabels: {
              color: "#94a3b8",
              font: { size: 12 }
            }
          }
        }
      }
    });
  }
}

function backToDashboard() {
  if (state.currentUser) {
    navigateToDashboard(state.currentUser.role);
  } else {
    showSection("home");
  }
}

function retakeTest() {
  if (state.assessment.subject) {
    startAssessment(state.assessment.subject);
  }
}

// AI Chatbot Functions - Gemini Integration
let chatHistory = [];
const GEMINI_API_KEY = "AIzaSyDfSyDPdzYdd-iksPPwppTItgq4FtnID10"; // Replace with your own key

// System prompt to define the AI's role
const systemPrompt = `You are an expert AI Learning Assistant, designed to help students of all ages. Your name is 'StudyBot'.
Your primary goals are:
1. **Clarify Doubts:** Explain complex topics in a simple, easy-to-understand manner. Use analogies and real-world examples.
2. **Identify Weaknesses:** If a student seems confused about a fundamental concept, gently point it out and offer to explain it before moving on. For example, if they ask about calculus but struggle with algebra, suggest a quick algebra review.
3. **Suggest Learning Approaches:** Offer different ways to learn a topic (e.g., "We can try a step-by-step explanation, an analogy, or I can quiz you. Which do you prefer?").
4. **Be Encouraging and Patient:** Maintain a positive, supportive, and friendly tone. Never make the student feel bad for not knowing something. Use phrases like "Great question!", "That's a common point of confusion," or "We'll figure this out together."
5. **Make Decisions:** When a student is unsure what to do next, help them decide on a learning path. Ask questions to understand their goals.
6. **Keep it Conversational:** Act like a real, friendly tutor, not a machine.`;

// Initialize chat history on first use
function initializeChatHistory() {
    if (chatHistory.length === 0) {
        chatHistory.push({
            role: "system",
            parts: [{ text: systemPrompt }]
        });
    }
}

function toggleChatbot() {
    const chatbotWindow = document.getElementById("ai-chatbot-window");
    if (chatbotWindow) {
        chatbotWindow.classList.toggle("hidden");
        
        // Initialize on first open
        if (!chatbotWindow.classList.contains("hidden")) {
            initializeChatHistory();
            document.getElementById("chatbot-input").focus();
        }
    }
}

async function sendChatbotMessage() {
    const input = document.getElementById("chatbot-input");
    const sendButton = document.getElementById("chatbot-send-btn");
    const errorMessageDiv = document.getElementById("chatbot-error");
    const userMessage = input.value.trim();

    if (!userMessage) return;

    // Initialize chat history if needed
    initializeChatHistory();

    // Add user message to chat history and UI
    addChatMessage(userMessage, "user");
    chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });
    
    input.value = '';
    sendButton.disabled = true;
    errorMessageDiv.classList.add('hidden');

    // Add loading indicator
    const loadingIndicator = addChatMessage('...', "bot", true);

    try {
        // Call the Gemini API
        const modelResponse = await callGeminiAPI(chatHistory);
        
        // Remove loading indicator
        loadingIndicator.remove();
        
        addChatMessage(modelResponse, "bot");
        
        // Add model response to history
        chatHistory.push({ role: 'model', parts: [{ text: modelResponse }] });

    } catch (error) {
        console.error("API Error:", error);
        loadingIndicator.remove();
        errorMessageDiv.textContent = "Sorry, something went wrong. Please try again.";
        errorMessageDiv.classList.remove('hidden');
        // Remove the failed user message from history
        chatHistory.pop();
    } finally {
        sendButton.disabled = false;
        input.focus();
    }
}

function handleChatbotEnter(event) {
    if (event.key === "Enter") {
        sendChatbotMessage();
    }
}

function addChatMessage(message, sender, isLoading = false) {
    const messagesContainer = document.getElementById("chatbot-messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = sender === "user" ? "user-message" : "bot-message";

    const messageContent = document.createElement("div");
    messageContent.className = "message-content";
    
    if (isLoading) {
        messageContent.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; gap: 4px;">
            <div style="width: 8px; height: 8px; background: currentColor; border-radius: 50%; animation: chatPulse 1.4s infinite; opacity: 0.6;"></div>
            <div style="width: 8px; height: 8px; background: currentColor; border-radius: 50%; animation: chatPulse 1.4s 0.2s infinite; opacity: 0.6;"></div>
            <div style="width: 8px; height: 8px; background: currentColor; border-radius: 50%; animation: chatPulse 1.4s 0.4s infinite; opacity: 0.6;"></div>
        </div>`;
    } else {
        // Simple markdown-like formatter for bold text
        message = message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        messageContent.innerHTML = `<p>${message.replace(/\n/g, '<br>')}</p>`;
    }
    
    messageDiv.appendChild(messageContent);
    messagesContainer.appendChild(messageDiv);

    // Scroll to the bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return messageDiv;
}

async function callGeminiAPI(history) {
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;

    // We only need user and model messages for the payload, not the system prompt directly in 'contents'
    const payloadContents = history.slice(1); // Exclude system prompt from main contents

    const payload = {
        contents: payloadContents,
        systemInstruction: { // Pass the system prompt here
            parts: history[0].parts
        },
    };
    
    let response;
    let retries = 3;
    let delay = 1000;

    while(retries > 0) {
        try {
            response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                break; // Success
            } else if (response.status === 429) { // Throttling
                console.log(`Rate limited. Retrying in ${delay / 1000}s...`);
            } else {
                throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
            }

        } catch(e) {
            // Network errors or other fetch issues
            if (retries === 1) throw e; // Last retry failed, throw error
        }
        
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
        retries--;
    }

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates.length > 0 && data.candidates[0].content.parts.length > 0) {
        return data.candidates[0].content.parts[0].text;
    } else {
        // Handle cases where response might be blocked or empty
        return "I'm sorry, I couldn't generate a response for that. Could you please try rephrasing your question?";
    }
}

function toggleChatbotDuringExam(isExamActive) {
    const chatbot = document.getElementById("ai-chatbot-container");
    if (!chatbot) return;

    if (isExamActive) {
        chatbot.style.display = "none";
    } else {
        chatbot.style.display = "block";
    }
}

// Utility Functions
function setupEventListeners() {
  // Close modal on outside click
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  });

  // Handle escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

function setupNavScrollEffect() {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
}

// Add smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

// Prevent form resubmission on refresh
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);

  function toggleChatbotDuringExam(isExamActive) {
    const chatbot = document.getElementById("ai-chatbot-container");
    if (!chatbot) return;

    if (isExamActive) {
      chatbot.style.display = "none"; // Hide chatbot during exam
    } else {
      chatbot.style.display = "block"; // Show chatbot again
    }
  }
}
