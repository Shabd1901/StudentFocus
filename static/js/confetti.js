/**
 * Confetti celebration functionality for Student Productivity Hub
 * Uses canvas-confetti library for motivational celebrations
 */

// Default confetti configuration
const defaultConfettiConfig = {
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#6f42c1', '#20c997']
};

/**
 * Trigger a basic confetti celebration
 */
function celebrateProgress() {
    if (typeof confetti === 'undefined') {
        console.warn('Confetti library not loaded. Falling back to alert.');
        showFallbackCelebration();
        return;
    }
    
    confetti(defaultConfettiConfig);
}

/**
 * Trigger a more intense celebration for major achievements
 */
function celebrateMajorWin() {
    if (typeof confetti === 'undefined') {
        showFallbackCelebration();
        return;
    }
    
    const count = 200;
    const defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
            colors: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#6f42c1', '#20c997']
        });
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

/**
 * Trigger a side-to-side confetti burst
 */
function celebrateFromSides() {
    if (typeof confetti === 'undefined') {
        showFallbackCelebration();
        return;
    }
    
    const end = Date.now() + (3 * 1000);
    const colors = ['#007bff', '#28a745', '#ffc107'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

/**
 * Trigger a star-shaped confetti burst
 */
function celebrateWithStars() {
    if (typeof confetti === 'undefined') {
        showFallbackCelebration();
        return;
    }
    
    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['star'],
        colors: ['#FFE400', '#FFBD00', '#E89611', '#E89611', '#FFCA08']
    };

    function shoot() {
        confetti({
            ...defaults,
            particleCount: 40,
            scalar: 1.2,
            shapes: ['star']
        });

        confetti({
            ...defaults,
            particleCount: 10,
            scalar: 0.75,
            shapes: ['circle']
        });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
}

/**
 * Random celebration - picks one of the available celebration types
 */
function randomCelebration() {
    const celebrations = [
        celebrateProgress,
        celebrateMajorWin,
        celebrateFromSides,
        celebrateWithStars
    ];
    
    const randomIndex = Math.floor(Math.random() * celebrations.length);
    celebrations[randomIndex]();
}

/**
 * Fallback celebration when confetti library is not available
 */
function showFallbackCelebration() {
    // Create a temporary celebration message
    const celebration = document.createElement('div');
    celebration.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show position-fixed" 
             style="top: 20px; right: 20px; z-index: 9999; min-width: 300px;">
            <i class="fas fa-star text-warning me-2"></i>
            <strong>🎉 Congratulations!</strong> Keep up the great work!
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    
    document.body.appendChild(celebration);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (celebration.parentNode) {
            celebration.remove();
        }
    }, 3000);
}

/**
 * Celebration for completing tasks or reaching milestones
 */
function celebrateTaskCompletion() {
    celebrateProgress();
    
    // Add some encouraging messages
    const messages = [
        "Awesome work! 🌟",
        "You're on fire! 🔥",
        "Great job! Keep it up! 💪",
        "Task completed! You're amazing! ✨",
        "Fantastic progress! 🎯",
        "You're crushing it! 🚀"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Show encouraging message
    const toast = document.createElement('div');
    toast.className = 'position-fixed top-0 end-0 p-3';
    toast.style.zIndex = '9999';
    toast.innerHTML = `
        <div class="toast show" role="alert">
            <div class="toast-header bg-success text-white">
                <i class="fas fa-trophy me-2"></i>
                <strong class="me-auto">Achievement Unlocked!</strong>
                <button type="button" class="btn-close btn-close-white" onclick="this.closest('.toast').remove()"></button>
            </div>
            <div class="toast-body">
                ${randomMessage}
            </div>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 4000);
}

/**
 * Celebration for mood tracking milestones
 */
function celebrateMoodMilestone() {
    celebrateFromSides();
    
    // Show mood-specific encouragement
    const moodMessages = [
        "Your self-awareness is growing! 🧠",
        "Tracking your mood helps build emotional intelligence! 🎭",
        "You're developing healthy habits! 🌱",
        "Keep reflecting on your feelings! 💭"
    ];
    
    const randomMessage = moodMessages[Math.floor(Math.random() * moodMessages.length)];
    console.log(`🎉 ${randomMessage}`);
}

/**
 * Initialize confetti functionality when document is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    // Check if confetti library is loaded
    if (typeof confetti === 'undefined') {
        console.warn('Canvas-confetti library not loaded. Celebrations will use fallback methods.');
    } else {
        console.log('🎉 Confetti celebrations ready!');
    }
    
    // Add keyboard shortcut for quick celebration (Ctrl/Cmd + Space)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.code === 'Space') {
            e.preventDefault();
            celebrateProgress();
        }
    });
});

// Export functions for global use
window.celebrateProgress = celebrateProgress;
window.celebrateMajorWin = celebrateMajorWin;
window.celebrateFromSides = celebrateFromSides;
window.celebrateWithStars = celebrateWithStars;
window.randomCelebration = randomCelebration;
window.celebrateTaskCompletion = celebrateTaskCompletion;
window.celebrateMoodMilestone = celebrateMoodMilestone;
