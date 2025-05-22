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
    const passingStatus = document.getElementById('passing-status'); // New element for passing status

    const NUM_QUESTIONS_TO_DISPLAY = 50; // Set to 50 questions
    const EXAM_DURATION_MINUTES = 45; // 45 minutes
    const PASSING_SCORE = 70; // Passing score threshold

    let selectedQuestions = []; // To store the 50 randomly selected questions
    let currentQuestionIndex = 0;
    let userAnswers = []; // To store user's selected answers
    let correctAnswersCount = 0; // Track number of correct answers
    let finalScore = 0; // Final score (correct answers * 2)
    let timeLeft = EXAM_DURATION_MINUTES * 60; // Timer in seconds
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
                alert('Waktu ujian habis! Jawaban Anda otomatis disubmit.');
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
        if (currentQuestionIndex >= selectedQuestions.length) {
            submitQuiz(); // Ensure submission if navigated beyond last question
            return;
        }

        const question = selectedQuestions[currentQuestionIndex];
        questionNumberSpan.textContent = `Soal ${currentQuestionIndex + 1} dari ${selectedQuestions.length}`;
        questionTextDiv.textContent = question.question;
        optionsContainerDiv.innerHTML = ''; // Clear previous options

        // Shuffle options for the current question (using the original options array to preserve A,B,C,D labeling)
        // We'll only shuffle the order of display, not the actual string content
        const optionLabels = ['A', 'B', 'C', 'D'];
        const shuffledOptionLabels = shuffleArray([...optionLabels]); // Shuffle A, B, C, D

        // Map shuffled labels to original option content
        const displayOptions = shuffledOptionLabels.map(label => {
            // Find the original option that matches this label
            return question.options.find(opt => opt.startsWith(label));
        });

        displayOptions.forEach((optionContent, index) => {
            if (!optionContent) return; // Skip if optionContent is undefined

            const originalLabel = optionContent.charAt(0); // Get original label (A, B, C, D)
            const optionId = `q${currentQuestionIndex}-option${originalLabel}`;
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.id = optionId;
            radioInput.name = `question-${currentQuestionIndex}`;
            radioInput.value = originalLabel; // Store the original label (A, B, C, D) as the value

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
            span.textContent = optionContent; // Display the original option content
            label.appendChild(radioInput);
            label.appendChild(span);
            optionsContainerDiv.appendChild(label);
        });

        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.style.display = currentQuestionIndex === selectedQuestions.length - 1 ? 'none' : 'inline-block';
        submitBtn.style.display = currentQuestionIndex === selectedQuestions.length - 1 ? 'inline-block' : 'none';
    }

    function updateProgressBar() {
        // Count how many questions have been answered
        const answeredQuestionsCount = userAnswers.filter(answer => answer !== null).length;
        const progressPercentage = (answeredQuestionsCount / selectedQuestions.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    function calculateResult() {
        correctAnswersCount = 0;
        selectedQuestions.forEach((q, index) => {
            if (userAnswers[index] === q.answer) {
                correctAnswersCount++;
            }
        });
        finalScore = correctAnswersCount * 2; // Score is correct answers * 2
    }

    function submitQuiz() {
        stopTimer(); // Stop the timer
        calculateResult(); // Calculate correct answers count and final score

        quizSection.style.display = 'none';
        resultSection.style.display = 'block';
        scoreSpan.textContent = finalScore;
        totalQuestionsSpan.textContent = NUM_QUESTIONS_TO_DISPLAY;

        // Determine passing status and apply copywriting
        passingStatus.textContent = ''; // Clear previous status
        passingStatus.classList.remove('lulus', 'gagal'); // Clear previous classes

        if (finalScore >= PASSING_SCORE) {
            passingStatus.textContent = "Selamat! Anda LULUS PKTBT!";
            passingStatus.classList.add('lulus');
            passingStatus.innerHTML += `<br><small>Hasil kerja keras dan ketekunanmu terbayar tuntas. Pertahankan semangat ini!</small>`;
        } else {
            passingStatus.textContent = "Maaf, Anda BELUM LULUS PKTBT.";
            passingStatus.classList.add('gagal');
            passingStatus.innerHTML += `<br><small>Jangan menyerah! Setiap usaha adalah bagian dari perjalanan. Evaluasi jawaban Anda, pelajari lebih dalam, dan coba lagi dengan semangat baru!</small>`;
        }

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

        selectedQuestions.forEach((q, index) => {
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
        // Select 50 random questions from the full bank of questions
        const shuffledBankQuestions = shuffleArray([...questions]); // Shuffle the entire bank
        selectedQuestions = shuffledBankQuestions.slice(0, NUM_QUESTIONS_TO_DISPLAY); // Take the first 50

        currentQuestionIndex = 0;
        userAnswers = Array(selectedQuestions.length).fill(null); // Reset all answers to null for 50 questions
        correctAnswersCount = 0;
        finalScore = 0;
        timeLeft = EXAM_DURATION_MINUTES * 60; // Reset timer
        stopTimer(); // Clear any existing timer
        startTimer(); // Start a new timer

        quizSection.style.display = 'block';
        resultSection.style.display = 'none';
        answerReviewDiv.style.display = 'none'; // Hide review section
        passingStatus.textContent = ''; // Clear passing status text
        passingStatus.classList.remove('lulus', 'gagal'); // Clear passing status classes

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
        if (currentQuestionIndex < selectedQuestions.length - 1) {
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
