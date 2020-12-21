// Navigation menu
function toggleMenu() {
    let navMenu = document.getElementById('navMenu');
    let icon = document.querySelector('.menu-icon');
    
    if (navMenu.style.display === 'none') {
        navMenu.style.display = 'block';
        icon.classList.add('fa-times');
    } else {
        navMenu.style.display = 'none';
        icon.classList.remove('fa-times');
    }
}

// Load youtube video hero section
document.querySelector('.play-btn').addEventListener('click', toggleVideoDisplay);

function toggleVideoDisplay() {
    let videoDisplay = document.getElementById('videoDisplay');
    console.log(videoDisplay);
    if (videoDisplay.style.display === 'none') {
        videoDisplay.style.display = 'block';
    } else {
        videoDisplay.style.display = 'none';
    }
};