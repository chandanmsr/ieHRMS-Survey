// Supabase configuration
const SUPABASE_URL = erixafnalqakldvkscue.supabase.co;
const SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyaXhhZm5hbHFha2xkdmtzY3VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0NzE3MDAsImV4cCI6MjA4NDA0NzcwMH0.S42M4MvFYiI8ns_p60GIpbPD7N5yi7mdOGsmx78QqCc;

// Initialize Supabase client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// DOM Elements
const questionText = document.getElementById('questionText');
const questionNum = document.getElementById('questionNum');
const totalQuestions = document.getElementById('totalQuestions');
const moduleName = document.getElementById('moduleName');
const moduleIcon = document.getElementById('moduleIcon');
const moduleTag = document.getElementById('moduleTag');
const ratingSlider = document.getElementById('ratingSlider');
const ratingValue = document.getElementById('ratingValue');
const ratingEmoji = document.getElementById('ratingEmoji');
const emojiLabel = document.getElementById('emojiLabel');
const remarks = document.getElementById('remarks');
const charCount = document.getElementById('charCount');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const progressBar = document.querySelector('.progress-bar');
const progressText = document.getElementById('progressText');
const xpFill = document.getElementById('xpFill');
const scoreElement = document.getElementById('score');
const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const confettiCanvas = document.getElementById('confettiCanvas');

// Game State
let currentQuestionIndex = 0;
let questions = [];
let responses = [];
let xp = 0;

// Emoji mapping based on rating
const emojiMap = [
    { emoji: '😢', label: 'Very Poor' },
    { emoji: '😞', label: 'Poor' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '🙂', label: 'Good' },
    { emoji: '😊', label: 'Very Good' },
    { emoji: '😍', label: 'Excellent' }
];

// Module icons mapping
const moduleIcons = {
    'Recruitment': 'fas fa-user-tie',
    'ESSP': 'fas fa-id-card',
    'MJL': 'fas fa-briefcase',
    'Employee Profile': 'fas fa-address-card',
    'Leave': 'fas fa-calendar-alt',
    'Psychometric': 'fas fa-brain'
};

// Module colors mapping
const moduleColors = {
    'Recruitment': '#FF6B6B',
    'ESSP': '#4ECDC4',
    'MJL': '#FFD166',
    'Employee Profile': '#06D6A0',
    'Leave': '#118AB2',
    'Psychometric': '#9D4EDD'
};

// Initialize the survey
async function initSurvey() {
    try {
        // Fetch questions from Supabase
        const { data, error } = await supabase
            .from('survey_questions')
            .select('*')
            .order('question_order', { ascending: true });

        if (error) throw error;

        questions = data;
        totalQuestions.textContent = questions.length;
        
        // Initialize responses array
        responses = questions.map(q => ({
            question_id: q.id,
            rating: 3, // Default rating
            remarks: ''
        }));

        // Load the first question
        loadQuestion(currentQuestionIndex);
        updateProgress();
        setupEventListeners();
    } catch (error) {
        console.error('Error loading questions:', error);
        questionText.textContent = 'Error loading questions. Please refresh the page.';
    }
}

// Load question at given index
function loadQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    
    const question = questions[index];
    const response = responses[index];
    
    // Update question text and number
    questionText.textContent = question.question_text;
    questionNum.textContent = index + 1;
    
    // Update module info
    moduleName.textContent = question.module_name;
    moduleIcon.className = moduleIcons[question.module_name] || 'fas fa-question-circle';
    moduleTag.style.background = `linear-gradient(to right, ${moduleColors[question.module_name] || '#8e2de2'}, ${adjustColor(moduleColors[question.module_name] || '#8e2de2', 30)})`;
    
    // Update rating slider and emoji
    ratingSlider.value = response.rating;
    updateEmoji(response.rating);
    
    // Update remarks
    remarks.value = response.remarks;
    charCount.textContent = response.remarks.length;
    
    // Update button states
    prevBtn.disabled = index === 0;
    nextBtn.style.display = index === questions.length - 1 ? 'none' : 'block';
    submitBtn.style.display = index === questions.length - 1 ? 'block' : 'none';
}

// Update emoji based on rating
function updateEmoji(rating) {
    ratingValue.textContent = rating;
    ratingEmoji.textContent = emojiMap[rating].emoji;
    emojiLabel.textContent = emojiMap[rating].label;
    
    // Add animation
    ratingEmoji.style.transform = 'scale(1.2)';
    setTimeout(() => {
        ratingEmoji.style.transform = 'scale(1)';
    }, 200);
}

// Update progress bar and XP
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
    
    // Update XP (10 XP per question + bonus for completing)
    xp = (currentQuestionIndex + 1) * 10;
    scoreElement.textContent = xp;
    
    // Update XP bar
    const xpProgress = ((currentQuestionIndex + 1) / questions.length) * 100;
    xpFill.style.width = `${xpProgress}%`;
}

// Save response for current question
function saveResponse() {
    responses[currentQuestionIndex].rating = parseInt(ratingSlider.value);
    responses[currentQuestionIndex].remarks = remarks.value;
}

// Submit all responses to Supabase
async function submitResponses() {
    try {
        // Save the last response
        saveResponse();
        
        // Submit each response to Supabase
        for (const response of responses) {
            const { error } = await supabase
                .from('survey_responses')
                .insert([response]);
            
            if (error) throw error;
        }
        
        // Show success modal
        showSuccessModal();
        
    } catch (error) {
        console.error('Error submitting responses:', error);
        alert('There was an error submitting your responses. Please try again.');
    }
}

// Show success modal with confetti
function showSuccessModal() {
    successModal.style.display = 'flex';
    createConfetti();
    
    // Update XP earned
    document.querySelector('.xp-earned').textContent = xp + 40; // Bonus XP
    
    // Play celebration sound if available
    try {
        const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3');
        audio.volume = 0.3;
        audio.play();
    } catch (e) {
        // Audio not essential, continue without it
    }
}

// Create confetti animation
function createConfetti() {
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const colors = ['#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#118AB2', '#9D4EDD', '#FF9F1C'];
    
    // Create confetti pieces
    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            r: Math.random() * 10 + 5,
            d: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngle: 0,
            tiltAngleIncrement: Math.random() * 0.1 + 0.05
        });
    }
    
    // Animation function
    function animateConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        
        for (let i = 0; i < confettiPieces.length; i++) {
            const p = confettiPieces[i];
            
            // Update position
            p.y += p.d;
            p.x += Math.sin(p.tiltAngle) * 2;
            p.tiltAngle += p.tiltAngleIncrement;
            
            // Draw confetti piece
            ctx.beginPath();
            ctx.lineWidth = p.r / 2;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt, p.y);
            ctx.lineTo(p.x + p.tilt + p.r / 2, p.y + p.r);
            ctx.stroke();
            
            // Reset confetti piece if it falls off screen
            if (p.y > confettiCanvas.height) {
                confettiPieces[i] = {
                    x: Math.random() * confettiCanvas.width,
                    y: -20,
                    r: p.r,
                    d: p.d,
                    color: p.color,
                    tilt: p.tilt,
                    tiltAngle: p.tiltAngle,
                    tiltAngleIncrement: p.tiltAngleIncrement
                };
            }
        }
        
        // Continue animation if modal is still open
        if (successModal.style.display === 'flex') {
            requestAnimationFrame(animateConfetti);
        }
    }
    
    animateConfetti();
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
    let usePound = false;
    
    if (color[0] === "#") {
        color = color.slice(1);
        usePound = true;
    }
    
    const num = parseInt(color, 16);
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;
    
    r = Math.min(Math.max(0, r), 255);
    g = Math.min(Math.max(0, g), 255);
    b = Math.min(Math.max(0, b), 255);
    
    return (usePound ? "#" : "") + (b | (g << 8) | (r << 16)).toString(16).padStart(6, '0');
}

// Set up event listeners
function setupEventListeners() {
    // Rating slider change
    ratingSlider.addEventListener('input', function() {
        const rating = parseInt(this.value);
        updateEmoji(rating);
        saveResponse();
    });
    
    // Remarks textarea input
    remarks.addEventListener('input', function() {
        // Limit to 300 characters
        if (this.value.length > 300) {
            this.value = this.value.substring(0, 300);
        }
        charCount.textContent = this.value.length;
        saveResponse();
    });
    
    // Previous button
    prevBtn.addEventListener('click', function() {
        if (currentQuestionIndex > 0) {
            saveResponse();
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
            updateProgress();
        }
    });
    
    // Next button
    nextBtn.addEventListener('click', function() {
        if (currentQuestionIndex < questions.length - 1) {
            saveResponse();
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
            updateProgress();
        }
    });
    
    // Submit button
    submitBtn.addEventListener('click', submitResponses);
    
    // Close modal button
    closeModalBtn.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });
    
    // Module cards click
    document.querySelectorAll('.module-card').forEach(card => {
        card.addEventListener('click', function() {
            const module = this.getAttribute('data-module');
            // Find the first question for this module
            const questionIndex = questions.findIndex(q => q.module_name === module);
            if (questionIndex !== -1) {
                saveResponse();
                currentQuestionIndex = questionIndex;
                loadQuestion(currentQuestionIndex);
                updateProgress();
                
                // Scroll to question
                document.querySelector('.survey-container').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add some interactive hover effects to module cards
    document.querySelectorAll('.module-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.03)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Window resize for confetti canvas
    window.addEventListener('resize', function() {
        if (successModal.style.display === 'flex') {
            confettiCanvas.width = window.innerWidth;
            confettiCanvas.height = window.innerHeight;
        }
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initSurvey);