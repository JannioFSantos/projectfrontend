// Digital Store - Main JavaScript

// Hero carousel functionality
const heroImages = [
    '/home-slide-1.jpeg',
    '/home-slide-2.jpeg',
    '/home-slide-3.jpeg',
    '/home-slide-4.jpeg'
];

let currentSlide = 0;

function initializeCarousel() {
    const heroImage = document.getElementById('hero-image');
    const indicators = document.querySelectorAll('.indicator');

    if (!heroImage || !indicators.length) return;

    function updateHeroSlide() {
        heroImage.src = heroImages[currentSlide];
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroImages.length;
        updateHeroSlide();
    }

    function previousSlide() {
        currentSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
        updateHeroSlide();
    }

    // Indicator click handlers
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateHeroSlide();
        });
    });

    // Auto-advance carousel
    setInterval(nextSlide, 4000);

    // Initialize first slide
    updateHeroSlide();
}

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    if (!searchInput || !searchBtn) return;

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Redirect to products page with search parameter
            window.location.href = `produtos.html?busca=${encodeURIComponent(searchTerm)}`;
        }
    }

    // Product search in current page (for home page)
    function searchProducts(searchTerm) {
        const products = document.querySelectorAll('.product-card');
        const searchLower = searchTerm.toLowerCase();
        let visibleCount = 0;

        products.forEach(product => {
            const productName = product.querySelector('.product-name')?.textContent.toLowerCase() || '';
            const productBrand = product.querySelector('.product-brand')?.textContent.toLowerCase() || '';
            
            if (productName.includes(searchLower) || productBrand.includes(searchLower)) {
                product.style.display = 'block';
                visibleCount++;
            } else {
                product.style.display = 'none';
            }
        });

        // Update products header if exists
        const productsHeader = document.querySelector('.products-header h2');
        if (productsHeader) {
            if (searchTerm) {
                productsHeader.textContent = `Resultados para "${searchTerm}" (${visibleCount} produtos)`;
            } else {
                productsHeader.textContent = 'Produtos em alta';
            }
        }

        return visibleCount;
    }

    // Event listeners
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    searchBtn.addEventListener('click', () => {
        performSearch();
    });

    // Real-time search as user types (only on home page)
    if (document.querySelector('.hero')) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.trim();
            if (searchTerm.length >= 2) {
                searchProducts(searchTerm);
            } else if (searchTerm.length === 0) {
                // Show all products when search is cleared
                searchProducts('');
            }
        });
    }
}

// Product card hover effects
function initializeProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px)';
            card.style.boxShadow = '0 20px 50px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
        });
    });
}

// Collection card hover effects
function initializeCollectionCards() {
    const collectionCards = document.querySelectorAll('.collection-card');
    
    collectionCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px)';
            card.style.boxShadow = '0 20px 50px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
        });
    });
}

// Cart functionality
function initializeCart() {
    let cartCount = 2;
    const cartBadge = document.querySelector('.cart-badge');
    
    if (!cartBadge) return;

    function updateCartCount() {
        cartBadge.textContent = cartCount;
    }

    // Add to cart simulation
    const buyButtons = document.querySelectorAll('.btn-primary');
    buyButtons.forEach(btn => {
        if (btn.textContent.includes('Comprar')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                cartCount++;
                updateCartCount();
                
                // Visual feedback
                const originalBg = btn.style.background;
                const originalText = btn.textContent;
                
                btn.style.background = '#10b981';
                btn.textContent = 'Adicionado!';
                
                setTimeout(() => {
                    btn.style.background = originalBg;
                    btn.textContent = originalText;
                }, 1500);
            });
        }
    });
}

// Smooth scrolling for navigation
function initializeSmoothScrolling() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Loading animation for images
function initializeImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        img.style.opacity = '0';
        img.style.transform = 'scale(0.9)';
        img.style.transition = 'all 0.3s ease';
    });
}

// Intersection Observer for animations
function initializeScrollAnimations() {
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
    const animatedElements = document.querySelectorAll('.product-card, .collection-card, .category-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Category navigation
function goToCategory(category) {
    window.location.href = `produtos.html?categoria=${category}`;
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    initializeSearch();
    initializeProductCards();
    initializeCollectionCards();
    initializeCart();
    initializeSmoothScrolling();
    initializeImageLoading();
    initializeScrollAnimations();
});

// Export functions for global access
window.goToCategory = goToCategory;
