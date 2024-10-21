// create an array for all the questions
const questions = [
    "I enjoy being in social situations where I can interact with many people.", // Extraversion
    "I feel energized after social gatherings and meeting new people.", // Extraversion
    "I often start conversations with people I don’t know.", // Extraversion
    "I prefer concrete facts and practical information over abstract ideas.", // Sensing
    "I focus on details and tend to notice things that others might overlook.", // Sensing
    "I rely on past experiences to solve problems.", // Sensing
    "I prefer making decisions based on logic and objective analysis.", // Thinking
    "I value consistency and fairness when making decisions.", // Thinking
    "I find it more important to be truthful than to be tactful.", // Thinking
    "I like to plan things in advance and follow a structured schedule.", // Judging
    "I prefer having tasks settled and decided early rather than waiting until the last minute.", // Judging
    "I feel uncomfortable when things are disorganized or unpredictable.", // Judging
    "I often need time alone to recharge after social interactions.", // Introversion
    "I enjoy solitary activities more than group activities.", // Introversion
    "I prefer deep conversations with close friends over small talk.", // Introversion
    "I enjoy imagining future possibilities and exploring new ideas.", // Intuition
    "I like to think about abstract concepts and potential outcomes.", // Intuition
    "I am more interested in what could be rather than what is currently happening.", // Intuition
    "I consider how my decisions will affect others emotionally before acting.", // Feeling
    "I value empathy and compassion when making decisions.", // Feeling
    "I prioritize maintaining harmony and positive relationships.", // Feeling
    "I prefer to keep my options open and enjoy flexibility in my plans.", // Perceiving
    "I adapt easily to changing circumstances without much stress.", // Perceiving
    "I tend to procrastinate when I don’t have strict deadlines." // Perceiving
];

//declare variable to keep track of question progress
let currentQuestionIndex = 0;
let answers = [];
let selectedRating = 0;

//create function that waits for the page to load then call function
window.onload = function() {
    showQuestion();
    starClickEvent();
}

//create a function that displays a question depending on the current questionIndex
function showQuestion() {
    document.querySelector('.questions').textContent = questions[currentQuestionIndex];
    //clear selected answer
    selectedRating = 0;
    //call on update stars function
    updateStars();
}

//create a function to add click event for each star 
//change text content of button when for rating is selected for the last question
function starClickEvent() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            if (currentQuestionIndex === (questions.length -1)) {
                document.getElementById('next-button').textContent = 'Get Result';
            }
            selectedRating = parseInt(this.getAttribute('data-value'));
            updateStars();
        });
    });
}

// create a function to update the star icons based on the selected rating
function updateStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        value = parseInt(star.getAttribute('data-value'));
        if (value <= selectedRating) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}

//function to go to the next question and alert if rating has not been selected
function nextQuestion() {
    if (selectedRating === 0) {
        alert('Please select a rating!');
        return; //stop the function until a rating is selected
    }
    //add the selectedRating to answers variable
    answers.push(selectedRating);
    //move to the next question or calculate results
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } 
    else {
        calculatePersonality ();
    }
}

//function to calculate Personality based on the answers
function calculatePersonality() {
    let results = {
        E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    };

    const traitMapping = [
        'E', 'E', 'E', // Questions 1-3 (Extraversion)
        'S', 'S', 'S', // Questions 4-6 (Sensing)
        'T', 'T', 'T', // Questions 7-9 (Thinking)
        'J', 'J', 'J', // Questions 10-12 (Judging)
        'I', 'I', 'I', // Questions 13-15 (Introversion)
        'N', 'N', 'N', // Questions 16-18 (Intuition)
        'F', 'F', 'F', // Questions 19-21 (Feeling)
        'P', 'P', 'P'  // Questions 22-24 (Perceiving)
    ];

    answers.forEach((rating, index) => {
        const trait = traitMapping[index]; // Get the corresponding trait from the traitMapping array
        results[trait] += rating; //updates the score for the corresponding trait in the results object
    });

    const personalityType = `${results.E >= results.I ? 'E' : 'I'}${results.S >= results.N ? 'S' : 'N'}${results.T >= results.F ? 'T' : 'F'}${results.J >= results.P ? 'J' : 'P'}`;

    window.location.href = `result.html?personality=${personalityType}`;
}
