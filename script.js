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

