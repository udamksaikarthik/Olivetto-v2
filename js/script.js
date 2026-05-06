/* =========================================================
   OLIVETTO — Interactions
   ========================================================= */

(function () {
    'use strict';

    const sidebar     = document.getElementById('sidebar');
    const menuToggle  = document.getElementById('menuToggle');
    const backdrop    = document.getElementById('backdrop');
    const navLinks    = document.querySelectorAll('.nav-link');
    const panels      = document.querySelectorAll('.panel');
    const cards       = document.querySelectorAll('.card');
    const yearEl      = document.getElementById('year');

    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ---------------------------------------------------------
    // Mobile drawer
    // ---------------------------------------------------------
    function openSidebar() {
        sidebar.classList.add('is-open');
        backdrop.classList.add('is-visible');
        menuToggle.classList.add('is-open');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    function closeSidebar() {
        sidebar.classList.remove('is-open');
        backdrop.classList.remove('is-visible');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (sidebar.classList.contains('is-open')) closeSidebar();
            else openSidebar();
        });
    }
    if (backdrop) backdrop.addEventListener('click', closeSidebar);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('is-open')) closeSidebar();
    });

    // ---------------------------------------------------------
    // Panel switching — show one panel at a time
    // ---------------------------------------------------------
    function showPanel(id) {
        panels.forEach(p => {
            p.classList.remove('is-active');
            const inner = p.querySelector('.panel-inner');
            if (inner) inner.classList.remove('is-revealed');
        });
        navLinks.forEach(l => l.classList.remove('is-active'));

        const target = document.getElementById(id);
        const targetLink = document.querySelector(`.nav-link[data-target="${id}"]`);

        if (target) {
            target.classList.add('is-active');
            window.scrollTo(0, 0);

            // Trigger the fade-in reveal on the next paint after display:block takes effect
            const inner = target.querySelector('.panel-inner');
            if (inner) {
                setTimeout(() => inner.classList.add('is-revealed'), 16);
            }
        }
        if (targetLink) targetLink.classList.add('is-active');
    }

    // Nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showPanel(link.dataset.target);
            if (window.innerWidth <= 768) closeSidebar();
        });
    });

    // In-page anchor links that target panel sections (e.g. "Book a Table" / "View the Menu")
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        if (a.classList.contains('nav-link')) return;
        a.addEventListener('click', (e) => {
            const id = a.getAttribute('href').slice(1);
            if (!id) return;
            const panelEl = document.getElementById(id);
            if (panelEl && panelEl.classList.contains('panel')) {
                e.preventDefault();
                showPanel(id);
                history.replaceState(null, '', '#' + id);
            }
        });
    });

    // ---------------------------------------------------------
    // Cards: click / Enter / Space toggles accent colour
    // ---------------------------------------------------------
    cards.forEach((card) => {
        const toggle = () => card.classList.toggle('is-active');
        card.addEventListener('click', toggle);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
            }
        });
    });

    // ---------------------------------------------------------
    // Initial panel — show Our Story (with welcome) on load
    // ---------------------------------------------------------
    showPanel('story');

})();
