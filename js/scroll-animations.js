/**
 * SastaElectronics - Scroll Reveal Animation System
 * 
 * Features:
 * - Uses IntersectionObserver for performance
 * - MutationObserver for dynamic content
 * - Works with .scroll-animate and .stagger-children classes
 * - Single animation system across entire project
 */

(function () {
    'use strict';

    // Mark JS as loaded (enables CSS animations)
    if (!document.documentElement.classList.contains('js-loaded')) {
        document.documentElement.classList.add('js-loaded');
    }

    // Configuration
    var config = {
        threshold: 0.15,        // 15% of element must be visible
        rootMargin: '0px 0px -60px 0px',  // Trigger 60px before element enters
        staggerDelay: 80        // ms between stagger children
    };

    // Store observed elements to avoid duplicates
    var observedElements = new WeakSet();

    /**
     * Create and configure IntersectionObserver
     */
    function createObserver() {
        if (!('IntersectionObserver' in window)) {
            // Fallback for old browsers: just reveal everything
            document.querySelectorAll('.scroll-animate, .stagger-children').forEach(function (el) {
                el.classList.add('animate-visible');
            });
            return null;
        }

        return new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    el.classList.add('animate-visible');

                    // Handle stagger children
                    if (el.classList.contains('stagger-children')) {
                        var children = el.children;
                        for (var i = 0; i < children.length; i++) {
                            (function (child, index) {
                                setTimeout(function () {
                                    child.classList.add('animate-visible');
                                }, index * config.staggerDelay);
                            })(children[i], i);
                        }
                    }

                    // Stop observing once revealed
                    observer.unobserve(el);
                }
            });
        }, {
            threshold: config.threshold,
            rootMargin: config.rootMargin
        });
    }

    var observer = createObserver();

    /**
     * Observe a single element
     */
    function observeElement(el) {
        if (!observer || observedElements.has(el)) return;
        observedElements.add(el);
        observer.observe(el);
    }

    /**
     * Find and observe all animation elements
     */
    function observeAll() {
        var elements = document.querySelectorAll('.scroll-animate, .stagger-children');
        for (var i = 0; i < elements.length; i++) {
            observeElement(elements[i]);
        }
    }

    /**
     * Setup MutationObserver for dynamic content
     */
    function setupMutationObserver() {
        if (!('MutationObserver' in window)) return;

        var mutationObserver = new MutationObserver(function (mutations) {
            var shouldObserve = false;

            mutations.forEach(function (mutation) {
                // Check added nodes
                if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                        var node = mutation.addedNodes[i];
                        if (node.nodeType === 1) { // Element node
                            // Check if the node itself has animation classes
                            if (node.classList && (node.classList.contains('scroll-animate') || node.classList.contains('stagger-children'))) {
                                shouldObserve = true;
                            }
                            // Check children
                            if (node.querySelectorAll) {
                                var animated = node.querySelectorAll('.scroll-animate, .stagger-children');
                                if (animated.length > 0) {
                                    shouldObserve = true;
                                }
                            }
                        }
                    }
                }
            });

            if (shouldObserve) {
                // Small delay to let DOM settle
                setTimeout(observeAll, 50);
            }
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Initialize when DOM is ready
    function init() {
        observeAll();
        setupMutationObserver();
        console.log('Scroll animations: initialized with', observedElements.size, 'elements');
    }

    // Run init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Also run after full load for late-rendering content
    window.addEventListener('load', function () {
        setTimeout(observeAll, 100);
    });

})();
