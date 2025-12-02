/**
 * Mobile Menu Toggle Functionality
 * PickWebsiteHosting.com
 */

(function() {
    'use strict';

    // DOM Elements
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const menuClose = document.querySelector('.mobile-menu-close');
    const body = document.body;

    // Exit if elements don't exist
    if (!menuToggle || !mobileMenu) return;

    /**
     * Open mobile menu
     */
    function openMenu() {
        mobileMenu.classList.add('active');
        if (menuOverlay) menuOverlay.classList.add('active');
        body.classList.add('mobile-menu-open');
        menuToggle.setAttribute('aria-expanded', 'true');
        
        // Focus trap - focus first menu item
        const firstLink = mobileMenu.querySelector('a');
        if (firstLink) firstLink.focus();
    }

    /**
     * Close mobile menu
     */
    function closeMenu() {
        mobileMenu.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
        body.classList.remove('mobile-menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
    }

    /**
     * Toggle mobile menu
     */
    function toggleMenu() {
        const isOpen = mobileMenu.classList.contains('active');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Event Listeners
    menuToggle.addEventListener('click', toggleMenu);
    
    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu on window resize if screen becomes large
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        }, 100);
    });

    // Close menu when clicking on a link (for same-page navigation)
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Small delay to allow navigation to start
            setTimeout(closeMenu, 100);
        });
    });

})();

