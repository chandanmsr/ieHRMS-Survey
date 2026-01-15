// Supabase configuration (same as main page)
const SUPABASE_URL = erixafnalqakldvkscue.supabase.co;
const SUPABASE_ANON_KEY = 'your-anon-key';

// Initialize Supabase client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// DOM Elements
const questionForm = document.getElementById('questionForm');
const moduleSelect = document.getElementById('module');
const questionText = document.getElementById('questionText');
const questionOrder = document.getElementById('questionOrder');
const questionId = document.getElementById('questionId');
const submitBtn = document.getElementById('submitBtn');
const questionsContainer = document.getElementById('questionsContainer');
const statusMessage = document.getElementById('statusMessage');

// Initialize admin page
async function initAdmin() {
    await loadQuestions();
    setupEventListeners();
}

// Load all questions from Supabase
async function loadQuestions() {
    try {
        const { data, error } = await supabase
            .from('survey_questions')
            .select('*')
            .order('question_order', { ascending: true });

        if (error) throw error;

        displayQuestions(data);
    } catch (error) {
        console.error('Error loading questions:', error);
        questionsContainer.innerHTML = '<p class="error-message">Error loading questions. Please check console.</p>';
    }
}

// Display questions in the list
function displayQuestions(questions) {
    if (questions.length === 0) {
        questionsContainer.innerHTML = '<p>No questions found. Add your first question above.</p>';
        return;
    }

    let html = '';
    
    questions.forEach(question => {
        html += `
            <div class="question-item" data-id="${question.id}">
                <div class="question-content">
                    <h3>${question.question_text}</h3>
                    <div class="question-meta">
                        <span><i class="fas fa-layer-group"></i> ${question.module_name}</span>
                        <span><i class="fas fa-sort-numeric-up"></i> Order: ${question.question_order}</span>
                        <span><i class="far fa-calendar"></i> ${new Date(question.created_at).toLocaleDateString()}</span>
                    </div>
                </div>
                <div class="question-actions">
                    <button class="btn-action btn-edit" onclick="editQuestion(${question.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn-action btn-remove" onclick="deleteQuestion(${question.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `;
    });
    
    questionsContainer.innerHTML = html;
}

// Edit a question
async function editQuestion(id) {
    try {
        const { data, error } = await supabase
            .from('survey_questions')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;

        // Populate form with question data
        moduleSelect.value = data.module_name;
        questionText.value = data.question_text;
        questionOrder.value = data.question_order;
        questionId.value = data.id;
        
        // Change button text
        submitBtn.innerHTML = '<i class="fas fa-edit"></i> Update Question';
        
        // Scroll to form
        document.querySelector('.form-container').scrollIntoView({
            behavior: 'smooth'
        });
        
        showStatus('Question loaded for editing.', 'success');
        
    } catch (error) {
        console.error('Error loading question:', error);
        showStatus('Error loading question for editing.', 'error');
    }
}

// Delete a question
async function deleteQuestion(id) {
    if (!confirm('Are you sure you want to delete this question? This action cannot be undone.')) {
        return;
    }
    
    try {
        // First, check if there are any responses for this question
        const { count, error: countError } = await supabase
            .from('survey_responses')
            .select('*', { count: 'exact', head: true })
            .eq('question_id', id);

        if (countError) throw countError;

        if (count && count > 0) {
            if (!confirm(`This question has ${count} response(s). Deleting it will also remove all associated responses. Continue?`)) {
                return;
            }
        }
        
        // Delete the question
        const { error } = await supabase
            .from('survey_questions')
            .delete()
            .eq('id', id);

        if (error) throw error;
        
        // Remove from display
        document.querySelector(`.question-item[data-id="${id}"]`)?.remove();
        
        showStatus('Question deleted successfully.', 'success');
        
        // Reset form if we were editing this question
        if (parseInt(questionId.value) === id) {
            resetForm();
        }
        
    } catch (error) {
        console.error('Error deleting question:', error);
        showStatus('Error deleting question.', 'error');
    }
}

// Handle form submission
async function handleSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const module = moduleSelect.value;
    const text = questionText.value;
    const order = parseInt(questionOrder.value);
    const id = questionId.value ? parseInt(questionId.value) : null;
    
    // Validate
    if (!module || !text || !order) {
        showStatus('Please fill in all required fields.', 'error');
        return;
    }
    
    try {
        if (id) {
            // Update existing question
            const { error } = await supabase
                .from('survey_questions')
                .update({
                    module_name: module,
                    question_text: text,
                    question_order: order
                })
                .eq('id', id);

            if (error) throw error;
            
            showStatus('Question updated successfully!', 'success');
        } else {
            // Insert new question
            const { error } = await supabase
                .from('survey_questions')
                .insert([{
                    module_name: module,
                    question_text: text,
                    question_order: order
                }]);

            if (error) throw error;
            
            showStatus('Question added successfully!', 'success');
        }
        
        // Reset form and reload questions
        resetForm();
        await loadQuestions();
        
    } catch (error) {
        console.error('Error saving question:', error);
        showStatus('Error saving question. Please try again.', 'error');
    }
}

// Reset the form
function resetForm() {
    questionForm.reset();
    questionId.value = '';
    submitBtn.innerHTML = '<i class="fas fa-save"></i> Save Question';
}

// Show status message
function showStatus(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = `status-message ${type}`;
    statusMessage.style.display = 'block';
    
    // Hide after 5 seconds
    setTimeout(() => {
        statusMessage.style.display = 'none';
    }, 5000);
}

// Set up event listeners
function setupEventListeners() {
    questionForm.addEventListener('submit', handleSubmit);
}

// Initialize admin page when loaded
document.addEventListener('DOMContentLoaded', initAdmin);