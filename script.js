// Global variables
let currentMemoryIndex = 0;
let memories = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the landing page or wish page
    const nameForm = document.getElementById('nameForm');
    const memoryCarousel = document.querySelector('.memory-carousel');
    
    if (nameForm) {
        // Landing page - handle name form
        initializeLandingPage();
    } else if (memoryCarousel) {
        // Wish page - handle memories and greeting card
        initializeWishPage();
    }
});

// Landing page functionality
function initializeLandingPage() {
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    
    // Add form submission handler
    nameForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = nameInput.value.trim();
        if (name) {
            // Store name in session storage
            sessionStorage.setItem('userName', name);
            
            // Add loading animation
            const submitBtn = document.querySelector('.submit-btn');
            submitBtn.innerHTML = '<span>Loading...</span><div class="btn-flower"></div>';
            submitBtn.disabled = true;
            
            // Redirect to wish page after a short delay
            setTimeout(() => {
                window.location.href = 'wish.html';
            }, 1000);
        }
    });
    
    // Add input focus effects
    nameInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    nameInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
    
    // Add typing animation
    nameInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            this.style.borderColor = '#ff69b4';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
}

// Wish page functionality
function initializeWishPage() {
    const userName = sessionStorage.getItem('userName') || 'Friend';
    const isChandu = userName.toLowerCase() === 'chandu';
    
    // Update greeting based on name
    updateGreeting(userName, isChandu);
    
    if (isChandu) {
        // Initialize memories carousel
        initializeMemoriesCarousel();
        
        // Initialize greeting card
        initializeGreetingCard();
    }
    
    // Add flower background animation
    addFlowerBackground();
}

// Update greeting section
function updateGreeting(userName, isChandu) {
    const greetingTitle = document.querySelector('.greeting-title');
    const quote = document.querySelector('.quote');
    const memoriesSection = document.querySelector('.memories-section');
    const greetingCardSection = document.querySelector('.greeting-card-section');
    
    if (greetingTitle) {
        greetingTitle.textContent = `Happy Friendship Day, ${userName}!`;
    }
    
    if (isChandu && quote) {
        quote.textContent = "You're the one who smiles when I smile, cries when I cry, and listens even when I ramble. I hope this bond lives until our last breath.";
    } else if (!isChandu) {
        // Hide special sections for non-Chandu users
        if (quote) quote.style.display = 'none';
        if (memoriesSection) memoriesSection.style.display = 'none';
        if (greetingCardSection) greetingCardSection.style.display = 'none';
    }
}

// Initialize memories carousel
function initializeMemoriesCarousel() {
    const memoryCarousel = document.querySelector('.memory-carousel');
    if (!memoryCarousel) return;
    
    // Create memory items (14 images + 1 video)
    memories = [
        { type: 'image', src: 'memory1.jpg' },
        { type: 'image', src: 'memory2.jpg' },
        { type: 'image', src: 'memory3.jpg' },
        { type: 'image', src: 'memory4.jpg' },
        { type: 'image', src: 'memory5.jpg' },
        { type: 'image', src: 'memory6.jpg' },
        { type: 'image', src: 'memory7.jpg' },
        { type: 'image', src: 'memory8.jpg' },
        { type: 'image', src: 'memory9.jpg' },
        { type: 'image', src: 'memory10.jpg' },
        { type: 'image', src: 'memory11.jpg' },
        { type: 'image', src: 'memory12.jpg' },
        { type: 'image', src: 'memory13.jpg' },
        { type: 'image', src: 'memory14.jpg' },
        { type: 'video', src: 'memory15.mp4' }
    ];
    
    // Create memory items in DOM
    memories.forEach((memory, index) => {
        const memoryItem = document.createElement('div');
        memoryItem.className = `memory-item ${index === 0 ? 'active' : ''}`;
        memoryItem.dataset.index = index;
        
        if (memory.type === 'image') {
            const img = document.createElement('img');
            img.src = memory.src;
            img.alt = `Memory ${index + 1}`;
            img.onerror = function() {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjBGMEYwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5NZW1vcnkgJCh7aW5kZXggKyAxfSk8L3RleHQ+Cjwvc3ZnPgo=';
            };
            memoryItem.appendChild(img);
        } else {
            const video = document.createElement('video');
            video.src = memory.src;
            video.controls = true;
            video.autoplay = false;
            video.muted = true;
            video.onerror = function() {
                this.style.display = 'none';
                const errorMsg = document.createElement('div');
                errorMsg.style.cssText = 'display: flex; align-items: center; justify-content: center; height: 500px; background: #f0f0f0; color: #999; font-size: 20px;';
                errorMsg.textContent = `Memory ${index + 1} (Video)`;
                memoryItem.appendChild(errorMsg);
            };
            memoryItem.appendChild(video);
        }
        
        memoryCarousel.appendChild(memoryItem);
    });
    
    // Create navigation buttons
    createNavigationButtons();
    
    // Show first memory
    showMemory(0);
}

// Create navigation buttons
function createNavigationButtons() {
    const memoryCarousel = document.querySelector('.memory-carousel');
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-btn prev-btn';
    prevBtn.innerHTML = '&lt;';
    prevBtn.onclick = () => navigateMemory(-1);
    memoryCarousel.appendChild(prevBtn);
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-btn next-btn';
    nextBtn.innerHTML = '&gt;';
    nextBtn.onclick = () => navigateMemory(1);
    memoryCarousel.appendChild(nextBtn);
    
    // Update button states
    updateNavigationButtons();
}

// Navigate through memories
function navigateMemory(direction) {
    const newIndex = currentMemoryIndex + direction;
    
    if (newIndex >= 0 && newIndex < memories.length) {
        showMemory(newIndex);
    }
}

// Show specific memory
function showMemory(index) {
    // Hide current memory
    const currentMemory = document.querySelector('.memory-item.active');
    if (currentMemory) {
        currentMemory.classList.remove('active');
    }
    
    // Show new memory
    const newMemory = document.querySelector(`[data-index="${index}"]`);
    if (newMemory) {
        newMemory.classList.add('active');
        currentMemoryIndex = index;
    }
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Update navigation button states
function updateNavigationButtons() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) {
        prevBtn.disabled = currentMemoryIndex === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentMemoryIndex === memories.length - 1;
    }
}

// Initialize greeting card
function initializeGreetingCard() {
    const greetingCardBtn = document.querySelector('.greeting-card-btn');
    const greetingCard = document.querySelector('.greeting-card');
    
    if (greetingCardBtn && greetingCard) {
        greetingCardBtn.addEventListener('click', function() {
            greetingCard.classList.add('show');
            
            // Add flower border animation
            const flowerBorder = document.createElement('div');
            flowerBorder.className = 'card-flower-border';
            greetingCard.appendChild(flowerBorder);
            
            // Scroll to card
            greetingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
}

// Add flower and heart background to wish page
function addFlowerBackground() {
    const body = document.body;
    
    // Create flower container if it doesn't exist
    let flowerContainer = document.querySelector('.flower-container');
    if (!flowerContainer) {
        flowerContainer = document.createElement('div');
        flowerContainer.className = 'flower-container';
        body.appendChild(flowerContainer);
    }
    
    // Add flowers
    for (let i = 1; i <= 10; i++) {
        const flower = document.createElement('div');
        flower.className = `flower flower${i}`;
        flowerContainer.appendChild(flower);
    }
    
    // Add hearts
    const heartTypes = ['heart-red', 'heart-pink'];
    const heartSizes = ['', 'heart-small', 'heart-large'];
    const heartEmojis = ['❤️', '💖'];
    
    for (let i = 1; i <= 12; i++) {
        const heart = document.createElement('div');
        const heartType = heartTypes[i % 2];
        const heartSize = heartSizes[i % 3];
        const heartEmoji = heartEmojis[i % 2];
        
        heart.className = `heart heart${i} ${heartType} ${heartSize}`;
        heart.textContent = heartEmoji;
        flowerContainer.appendChild(heart);
    }
}

// Add keyboard navigation for memories
document.addEventListener('keydown', function(e) {
    if (document.querySelector('.memory-carousel')) {
        if (e.key === 'ArrowLeft') {
            navigateMemory(-1);
        } else if (e.key === 'ArrowRight') {
            navigateMemory(1);
        }
    }
});

// Add touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next memory
            navigateMemory(1);
        } else {
            // Swipe right - previous memory
            navigateMemory(-1);
        }
    }
}

// Add smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Add loading animation
function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.innerHTML = `
        <div class="loading-spinner"></div>
        <p>Loading beautiful memories...</p>
    `;
    document.body.appendChild(loadingDiv);
    
    setTimeout(() => {
        loadingDiv.remove();
    }, 2000);
}

// Add CSS for loading animation
const loadingStyles = `
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #ff69b4;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;

// Inject loading styles
const styleSheet = document.createElement('style');
styleSheet.textContent = loadingStyles;
document.head.appendChild(styleSheet);

