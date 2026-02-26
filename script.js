// Sidebar Navigation using Event Delegation
document.addEventListener('click', function (e) {
    // Check if clicked element is a nav-link or inside a nav-link
    const link = e.target.closest('.nav-link');

    if (!link) return;

    const href = link.getAttribute('href');

    // If href is "#" or null, handle as single-page navigation
    if (!href || href === '#') {
        e.preventDefault();

        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

        // Add active class to clicked link
        link.classList.add('active');

        // Get the page name from data attribute
        const pageName = link.getAttribute('data-page');

        if (pageName) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));

            // Show the selected page
            const targetPage = document.getElementById(pageName);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        }
    }
    // If href is a real link (like index.html or projects.html), allow default navigation

    // Close mobile menu when a link is clicked
    closeMobileMenu();
});

// Tab Navigation
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Get the parent tabs container
        const tabsContainer = button.closest('.tabs-container');

        // Remove active class from all buttons in this container
        tabsContainer.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Get the tab name from data attribute
        const tabName = button.getAttribute('data-tab');

        // Hide all tab contents in this container
        tabsContainer.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Show the selected tab content
        document.getElementById(tabName).classList.add('active');
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');

function openMobileMenu() {
    if (menuToggle && sidebar) {
        menuToggle.classList.add('active');
        sidebar.classList.add('active');
        if (sidebarOverlay) {
            sidebarOverlay.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileMenu() {
    if (menuToggle && sidebar) {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove('active');
        }
        document.body.style.overflow = '';
    }
}

if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (sidebar.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
}

// Close mobile menu when clicking on overlay
if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeMobileMenu);
}

// Close mobile menu when window is resized to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 769) {
        closeMobileMenu();
    }
});

// Dropdown click functionality for mobile
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        // Only activate on mobile
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            const container = toggle.closest('.dropdown-container');

            // Close other dropdowns
            document.querySelectorAll('.dropdown-container.active').forEach(dc => {
                if (dc !== container) {
                    dc.classList.remove('active');
                }
            });

            // Toggle current dropdown
            container.classList.toggle('active');
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-container')) {
        document.querySelectorAll('.dropdown-container.active').forEach(dc => {
            dc.classList.remove('active');
        });
    }
});

