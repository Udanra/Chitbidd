





// Need to check this ....
const sidebarLinks = document.querySelectorAll('.nav-link');

sidebarLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Remove the 'active' class from all links
        sidebarLinks.forEach((item) => {
            item.classList.remove('active');
        });

        // Add the 'active' class to the clicked link
        link.classList.add('active');
    });
});
// Need to check this ....