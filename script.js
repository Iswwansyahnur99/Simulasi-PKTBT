document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const startSection = document.getElementById('start-section');
    const quizArea = document.getElementById('quiz-area');
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
    const passingStatus = document.getElementById('passing-status');
    const jobCategoryRadios = document.querySelectorAll('input[name="job-category"]');
    const startQuizBtn = document.getElementById('start-quiz-btn');

    const EXAM_DURATION_MINUTES = 45;
    const PASSING_SCORE = 70; // Passing score threshold

    let selectedQuestions = []; // To store the questions for the current quiz session
    let currentQuestionIndex = 0;
    let userAnswers = []; // To store user's selected answers
    let correctAnswersCount = 0;
    let finalScore = 0;
    let timeLeft = EXAM_DURATION_MINUTES * 60;
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
            submitQuiz();
            return;
        }

        const question = selectedQuestions[currentQuestionIndex];
        questionNumberSpan.textContent = `Soal ${currentQuestionIndex + 1} dari ${selectedQuestions.length}`;
        questionTextDiv.textContent = question.question;
        optionsContainerDiv.innerHTML = ''; // Clear previous options

        const optionLabels = ['A', 'B', 'C', 'D'];
        const shuffledOptionLabels = shuffleArray([...optionLabels]);

        const displayOptions = shuffledOptionLabels.map(label => {
            return question.options.find(opt => opt.startsWith(label));
        });

        displayOptions.forEach((optionContent) => {
            if (!optionContent) return;

            const originalLabel = optionContent.charAt(0);
            const optionId = `q${currentQuestionIndex}-option${originalLabel}`;
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.id = optionId;
            radioInput.name = `question-${currentQuestionIndex}`;
            radioInput.value = originalLabel;

            if (userAnswers[currentQuestionIndex] === radioInput.value) {
                radioInput.checked = true;
            }

            radioInput.addEventListener('change', (event) => {
                userAnswers[currentQuestionIndex] = event.target.value;
                updateProgressBar();
            });

            const label = document.createElement('label');
            label.htmlFor = optionId;
            const span = document.createElement('span');
            span.textContent = optionContent;
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
        stopTimer();
        calculateResult();

        quizArea.style.display = 'none';
        resultSection.style.display = 'block';
        scoreSpan.textContent = finalScore;
        totalQuestionsSpan.textContent = selectedQuestions.length * 2; // Display max score
        totalQuestionsSpan.textContent = selectedQuestions.length; // Display total questions answered (correctly)

        passingStatus.textContent = '';
        passingStatus.classList.remove('lulus', 'gagal');

        if (finalScore >= PASSING_SCORE) {
            passingStatus.textContent = "Selamat! Anda LULUS PKTBT!";
            passingStatus.classList.add('lulus');
            passingStatus.innerHTML += `<br><small>Hasil kerja keras dan ketekunanmu terbayar tuntas. Pertahankan semangat ini, langkahmu menuju karier cemerlang semakin dekat!</small>`;
        } else {
            passingStatus.textContent = "Maaf, Anda BELUM LULUS PKTBT.";
            passingStatus.classList.add('gagal');
            passingStatus.innerHTML += `<br><small>Jangan menyerah! Setiap usaha adalah bagian dari perjalanan. Evaluasi jawaban Anda, pelajari lebih dalam, dan coba lagi dengan semangat baru! Keberhasilan hanya tertunda, bukan terhalang.</small>`;
        }

        prevBtn.disabled = true;
        nextBtn.disabled = true;
        submitBtn.disabled = true;
        const radioButtons = optionsContainerDiv.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => radio.disabled = true);
    }

    function reviewAnswers() {
        answerReviewDiv.innerHTML = '';
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

    function prepareQuiz(category) {
        let adminQuestionsForQuiz = [];
        let substantiveQuestionsForQuiz = [];
        const totalQuestions = 50;

        if (category === 'fungsional-siaran') {
            // Fungsional Siaran: 25 Administratif + 35 Substantif
            adminQuestionsForQuiz = shuffleArray([...administrativeQuestions]).slice(0, 25);
            substantiveQuestionsForQuiz = shuffleArray([...substantiveQuestions]).slice(0, 35);
            selectedQuestions = shuffleArray([...adminQuestionsForQuiz, ...substantiveQuestionsForQuiz]); // Combine and re-shuffle
        } else { // 'lainnya' (Administratif Umum)
            // Lainnya: 50 Administratif
            selectedQuestions = shuffleArray([...administrativeQuestions]).slice(0, 50);
        }

        currentQuestionIndex = 0;
        userAnswers = Array(selectedQuestions.length).fill(null);
        correctAnswersCount = 0;
        finalScore = 0;
        timeLeft = EXAM_DURATION_MINUTES * 60;

        startSection.style.display = 'none';
        quizArea.style.display = 'block'; // Show the quiz area
        resultSection.style.display = 'none';
        answerReviewDiv.style.display = 'none';
        passingStatus.textContent = '';
        passingStatus.classList.remove('lulus', 'gagal');

        prevBtn.disabled = false;
        nextBtn.disabled = false;
        submitBtn.disabled = false;

        stopTimer(); // Clear any existing timer
        startTimer(); // Start a new timer

        loadQuestion();
        updateProgressBar();
    }

    function resetToStartScreen() {
        startSection.style.display = 'block';
        quizArea.style.display = 'none';
        resultSection.style.display = 'none';
        answerReviewDiv.style.display = 'none';
        passingStatus.textContent = '';
        passingStatus.classList.remove('lulus', 'gagal');
        stopTimer(); // Ensure timer is stopped if returning from quiz/results
        timerDisplay.textContent = `${String(EXAM_DURATION_MINUTES).padStart(2, '0')}:00`; // Reset timer display

        // Uncheck all radios and disable start button
        jobCategoryRadios.forEach(radio => radio.checked = false);
        startQuizBtn.disabled = true;
    }


    // --- Event Listeners ---

    jobCategoryRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            startQuizBtn.disabled = false; // Enable start button when a choice is made
        });
    });

    startQuizBtn.addEventListener('click', () => {
        const selectedCategory = document.querySelector('input[name="job-category"]:checked');
        if (selectedCategory) {
            prepareQuiz(selectedCategory.value);
        } else {
            alert('Mohon pilih kategori ujian terlebih dahulu.');
        }
    });

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
    retakeBtn.addEventListener('click', resetToStartScreen); // Change to go back to start screen

    // Initial load
    resetToStartScreen(); // Start by showing the selection screen
});
