// BrightMinds Hub - Relay Projects Platform
// Enhanced JavaScript interactions for collaborative features

console.log("🚀 BrightMinds Hub loaded successfully! Ready for relay collaboration!");

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Join message function for CTA buttons
function showJoinMessage() {
    // Create a modern, animated modal-like alert
    const modal = document.createElement('div');
    modal.className = 'join-modal';
    modal.innerHTML = `
        <div class="join-modal-content">
            <div class="join-modal-header">
                <i class="fas fa-rocket text-primary"></i>
                <h3>Welcome to the Relay!</h3>
                <button class="close-modal" onclick="closeJoinModal()">&times;</button>
            </div>
            <div class="join-modal-body">
                <p>🎉 Thanks for joining BrightMinds Hub!</p>
                <p>You're about to become part of an amazing community of collaborative learners. Get ready to:</p>
                <ul>
                    <li><i class="fas fa-exchange-alt text-primary"></i> Pass ideas like a relay baton</li>
                    <li><i class="fas fa-lightbulb text-warning"></i> Ignite innovation through teamwork</li>
                    <li><i class="fas fa-trophy text-success"></i> Achieve collective success</li>
                </ul>
                <div class="modal-buttons">
                    <button class="btn btn-primary" onclick="closeJoinModal()">
                        <i class="fas fa-check me-2"></i>Let's Start!
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        .join-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .join-modal-content {
            background: white;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease;
        }
        
        .join-modal-header {
            padding: 30px 30px 20px;
            text-align: center;
            position: relative;
            border-bottom: 1px solid #eee;
        }
        
        .join-modal-header i {
            font-size: 3rem;
            margin-bottom: 15px;
        }
        
        .join-modal-header h3 {
            margin: 0;
            color: #333;
            font-weight: 700;
        }
        
        .close-modal {
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            font-size: 2rem;
            color: #999;
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .close-modal:hover {
            background: #f5f5f5;
            color: #333;
        }
        
        .join-modal-body {
            padding: 30px;
        }
        
        .join-modal-body p {
            margin-bottom: 15px;
            color: #666;
            line-height: 1.6;
        }
        
        .join-modal-body ul {
            margin: 20px 0;
            padding-left: 0;
            list-style: none;
        }
        
        .join-modal-body li {
            padding: 8px 0;
            color: #555;
        }
        
        .join-modal-body li i {
            margin-right: 10px;
            width: 20px;
        }
        
        .modal-buttons {
            text-align: center;
            margin-top: 30px;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { 
                opacity: 0;
                transform: translateY(-50px) scale(0.9);
            }
            to { 
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
    `;
    
    // Add styles to head if not already added
    if (!document.querySelector('#modal-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'modal-styles';
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeJoinModal() {
    const modal = document.querySelector('.join-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }, 300);
    }
}

// Add fade out animation
const fadeOutStyles = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;

// Enhanced scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Add initial styles for animation
    const animateElements = document.querySelectorAll('.quote-card, .project-card, .stat-item');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Floating animations for stats numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = finalValue / 50;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                stat.textContent = finalValue + (stat.textContent.includes('%') ? '%' : '');
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(currentValue) + (stat.textContent.includes('%') ? '%' : '');
            }
        }, 30);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-section');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        header.style.backdropFilter = 'none';
    }
});

// Interactive hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
    });
});

// Progress bar animations
document.querySelectorAll('.progress-bar').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    
    setTimeout(() => {
        bar.style.transition = 'width 2s ease-in-out';
        bar.style.width = width;
    }, 500);
});

// Relay-themed particle effect (optional enhancement)
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'relay-particle';
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: relayFlow 4s linear infinite;
    `;
    
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = '-10px';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 4000);
}

// Add particle animation styles
const particleStyles = `
    @keyframes relayFlow {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;

// Add particle styles to document
const particleStyleSheet = document.createElement('style');
particleStyleSheet.textContent = particleStyles;
document.head.appendChild(particleStyleSheet);

// Create particles periodically (subtle effect)
setInterval(createParticle, 2000);

console.log("✨ Relay collaboration features activated! Let the knowledge flow begin!");
