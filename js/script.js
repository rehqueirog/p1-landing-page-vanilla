document.addEventListener("DOMContentLoaded", () => {

    /* ============================================
       1. NAVIGATION
       ============================================ */
    
    function initNavigation() {
        const hamburger = document.querySelector("#mobile-nav .hamburger");
        const navBar = document.querySelector("#mobile-nav .nav-bar");
        const navLinks = document.querySelectorAll("#mobile-nav a");
    
        if (!hamburger || !navBar) return;
    
        hamburger.addEventListener("click", () => {
            navBar.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
    
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navBar.classList.remove("active");
                hamburger.classList.remove("active");
            });
        });
    }
    
    
    /* ============================================
       2. ACCORDION
       ============================================ */
    
    function initAccordion() {
        const faqItems = document.querySelectorAll(".faq-item");
    
        if (!faqItems.length) return;
    
        faqItems.forEach((item) => {
            item.addEventListener("click", () => {
                faqItems.forEach((other) => {
                    if (other !== item) {
                        other.classList.remove("active");
                    }
                });
                item.classList.toggle("active");
            });
        });
    }
    
    
    /* ============================================
       3. BACK TO TOP
       ============================================ */
    
    function initBackToTop() {
        const backToTop = document.querySelector(".toTop");
    
        if (!backToTop) return;
    
        window.addEventListener("scroll", () => {
            backToTop.classList.toggle("active", window.scrollY > 300);
        });
    
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
    
    
    /* ============================================
       4. INIT (INICIALIZAÇÃO)
       ============================================ */
    
    initNavigation();
    initAccordion();
    initBackToTop();
    
});