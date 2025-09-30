let currentStep = 1;
const totalSteps = 6;

// Actualizar la barra de progreso
function updateProgress() {
    const progress = document.getElementById('progress');
    const percentage = (currentStep / totalSteps) * 100;
    progress.style.width = `${percentage}%`;
}

// Navegar al siguiente paso
function nextStep() {
    if (currentStep < totalSteps) {
        // Marcar el paso actual como completado
        document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('completed');
        
        // Ocultar el contenido actual
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        
        // Avanzar al siguiente paso
        currentStep++;
        
        // Mostrar el nuevo paso
        document.getElementById(`step-${currentStep}`).classList.add('active');
        document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
        
        // Actualizar la barra de progreso
        updateProgress();
    }
}

// Navegar al paso anterior
function prevStep() {
    if (currentStep > 1) {
        // Ocultar el contenido actual
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('active');
        
        // Retroceder al paso anterior
        currentStep--;
        
        // Mostrar el nuevo paso
        document.getElementById(`step-${currentStep}`).classList.add('active');
        document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
        
        // Actualizar la barra de progreso
        updateProgress();
    }
}

// Navegar a un paso específico al hacer clic en la barra lateral
document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('click', function() {
        const stepNumber = parseInt(this.getAttribute('data-step'));
        
        // Ocultar todos los contenidos
        document.querySelectorAll('.step-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Quitar la clase active de todos los pasos
        document.querySelectorAll('.step').forEach(s => {
            s.classList.remove('active');
        });
        
        // Mostrar el contenido del paso seleccionado
        document.getElementById(`step-${stepNumber}`).classList.add('active');
        this.classList.add('active');
        
        // Actualizar el paso actual
        currentStep = stepNumber;
        
        // Actualizar la barra de progreso
        updateProgress();
    });
});

// Simular registro en GitHub
function simulateSignup() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (username && email && password) {
        document.getElementById('signup-success').style.display = 'block';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

// Simular configuración de Git
function configureGit() {
    const name = document.getElementById('git-name').value;
    const email = document.getElementById('git-email').value;
    
    if (name && email) {
        document.getElementById('git-config-success').style.display = 'block';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

// Simular creación de repositorio
function createRepository() {
    const repoName = document.getElementById('repo-name').value;
    
    if (repoName) {
        document.getElementById('repo-success').style.display = 'block';
    } else {
        alert('Por favor, ingresa un nombre para el repositorio.');
    }
}

// Simular realización de commit
function makeCommit() {
    const commitMessage = document.getElementById('commit-message').value;
    
    if (commitMessage) {
        document.getElementById('commit-success').style.display = 'block';
    } else {
        alert('Por favor, ingresa un mensaje para el commit.');
    }
}

// Reiniciar el tutorial
function restartTutorial() {
    // Reiniciar al primer paso
    document.querySelectorAll('.step-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active', 'completed');
    });
    
    currentStep = 1;
    document.getElementById('step-1').classList.add('active');
    document.querySelector('.step[data-step="1"]').classList.add('active');
    
    // Ocultar todos los mensajes de éxito
    document.querySelectorAll('.success-message').forEach(msg => {
        msg.style.display = 'none';
    });
    
    // Limpiar campos de formulario
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    });
    
    // Reiniciar la barra de progreso
    updateProgress();
}

// Inicializar la barra de progreso
updateProgress();
