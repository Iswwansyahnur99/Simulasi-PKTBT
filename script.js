document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const quizSection = document.getElementById('quiz-section');
    const resultSection = document.getElementById('result-section');
    const questionNumberSpan = document.getElementById('question-number');
    const questionTextDiv = document.getElementById('question-text');
    const optionsContainerDiv = document.getElementById('options-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const reviewBtn = document.getElementById('review-btn');
    const answerReviewDiv = document.getElementById('answer-review');
    const retakeBtn = document.getElementById('retake-btn');
    const timerDisplay = document.getElementById('time');
    const progressBar = document.getElementById('progress-bar');

    let shuffledQuestions = []; // To store shuffled questions
    let currentQuestionIndex = 0;
    let userAnswers = []; // To store user's selected answers
    let score = 0;
    let timeLeft = 45 * 60; // 45 minutes in seconds
    let timerInterval;

    // --- Utility Function: Shuffle an array (Fisher-Yates algorithm) ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    }

    // --- Timer Functions ---
    function startTimer() {
        timerInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                submitQuiz(); // Auto-submit when time runs out
                alert('Waktu ujian habis!');
                return;
            }

            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            timeLeft--;
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    // --- Core Quiz Functions ---

    function loadQuestion() {
        if (currentQuestionIndex >= shuffledQuestions.length) {
            submitQuiz(); // Ensure submission if navigated beyond last question
            return;
        }

        const question = shuffledQuestions[currentQuestionIndex];
        questionNumberSpan.textContent = `Soal ${currentQuestionIndex + 1} dari ${shuffledQuestions.length}`;
        questionTextDiv.textContent = question.question;
        optionsContainerDiv.innerHTML = ''; // Clear previous options

        // Shuffle options for the current question
        const shuffledOptions = shuffleArray([...question.options]); // Create a copy to shuffle

        shuffledOptions.forEach((option, index) => {
            const optionId = `q${currentQuestionIndex}-option${option.charAt(0)}`; // Use actual option char (A,B,C,D) for ID
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.id = optionId;
            radioInput.name = `question-${currentQuestionIndex}`;
            radioInput.value = option.charAt(0); // Get A, B, C, D

            // Check if user has already answered this question
            if (userAnswers[currentQuestionIndex] === radioInput.value) {
                radioInput.checked = true;
            }

            radioInput.addEventListener('change', (event) => {
                userAnswers[currentQuestionIndex] = event.target.value;
                updateProgressBar(); // Update progress bar on answer change
            });

            const label = document.createElement('label');
            label.htmlFor = optionId;
            const span = document.createElement('span');
            span.textContent = option;
            label.appendChild(radioInput);
            label.appendChild(span);
            optionsContainerDiv.appendChild(label);
        });

        updateNavigationButtons();
        updateProgressBar();
    }

    function updateNavigationButtons() {
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.style.display = currentQuestionIndex === shuffledQuestions.length - 1 ? 'none' : 'inline-block';
        submitBtn.style.display = currentQuestionIndex === shuffledQuestions.length - 1 ? 'inline-block' : 'none';
    }

    function updateProgressBar() {
        // Count how many questions have been answered
        const answeredQuestionsCount = userAnswers.filter(answer => answer !== null).length;
        const progressPercentage = (answeredQuestionsCount / shuffledQuestions.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    function calculateScore() {
        score = 0;
        shuffledQuestions.forEach((q, index) => {
            if (userAnswers[index] === q.answer) {
                score++;
            }
        });
    }

    function submitQuiz() {
        stopTimer(); // Stop the timer
        calculateScore();
        quizSection.style.display = 'none';
        resultSection.style.display = 'block';
        scoreSpan.textContent = score;
        totalQuestionsSpan.textContent = shuffledQuestions.length;

        // Disable all buttons in quiz section after submission
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        submitBtn.disabled = true;
        // Optionally disable radio buttons if you want to prevent further interaction
        const radioButtons = optionsContainerDiv.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => radio.disabled = true);
    }

    function reviewAnswers() {
        answerReviewDiv.innerHTML = ''; // Clear previous review
        answerReviewDiv.style.display = 'block';

        shuffledQuestions.forEach((q, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === q.answer;

            const answerItem = document.createElement('div');
            answerItem.classList.add('answer-item');
            answerItem.classList.add(isCorrect ? 'correct' : 'incorrect');

            const qText = document.createElement('p');
            qText.classList.add('question-text-review');
            qText.textContent = `Soal ${index + 1}: ${q.question}`;
            answerItem.appendChild(qText);

            const chosenOption = q.options.find(opt => opt.charAt(0) === userAnswer);
            const correctOption = q.options.find(opt => opt.charAt(0) === q.answer);

            const yourAnswerP = document.createElement('p');
            yourAnswerP.classList.add('your-answer');
            yourAnswerP.textContent = `Jawaban Anda: ${chosenOption ? chosenOption : 'Belum Dijawab'}`;
            answerItem.appendChild(yourAnswerP);

            const correctAnswerP = document.createElement('p');
            correctAnswerP.classList.add('correct-answer');
            correctAnswerP.textContent = `Jawaban Benar: ${correctOption}`;
            answerItem.appendChild(correctAnswerP);

            const explanationP = document.createElement('p');
            explanationP.classList.add('explanation');
            explanationP.textContent = `Penjelasan: ${q.explanation}`;
            answerItem.appendChild(explanationP);

            answerReviewDiv.appendChild(answerItem);
        });
    }

    function resetQuiz() {
        // Shuffle questions for a new quiz session
        shuffledQuestions = shuffleArray([...questions]); // Use a copy of the original questions array

        currentQuestionIndex = 0;
        userAnswers = Array(shuffledQuestions.length).fill(null); // Reset all answers to null
        score = 0;
        timeLeft = 45 * 60; // Reset timer
        stopTimer(); // Clear any existing timer
        startTimer(); // Start a new timer

        quizSection.style.display = 'block';
        resultSection.style.display = 'none';
        answerReviewDiv.style.display = 'none'; // Hide review section

        // Re-enable quiz buttons
        prevBtn.disabled = false;
        nextBtn.disabled = false;
        submitBtn.disabled = false;

        loadQuestion();
        updateProgressBar(); // Initialize progress bar
    }

    // --- Event Listeners ---

    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        }
    });

    submitBtn.addEventListener('click', submitQuiz);
    reviewBtn.addEventListener('click', reviewAnswers);
    retakeBtn.addEventListener('click', resetQuiz);

    // Initial load when page is ready
    resetQuiz(); // Start the quiz and timer
});