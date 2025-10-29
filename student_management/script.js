// Wait for the entire HTML document to be loaded before running the script
// DOM Elements
const welcomeSection = document.getElementById('welcome-section');
const profileSection = document.getElementById('profile-section');
const viewProfileBtn = document.getElementById('view-profile-btn');
const homeLink = document.getElementById('home-link');
const profileLink = document.getElementById('profile-link');

// Show profile section
function showProfile() {
    welcomeSection.style.display = 'none';
    profileSection.style.display = 'block';
    homeLink.classList.remove('active');
    profileLink.classList.add('active');
}

// Show welcome section
function showWelcome() {
    welcomeSection.style.display = 'block';
    profileSection.style.display = 'none';
    homeLink.classList.add('active');
    profileLink.classList.remove('active');
}

// Event Listeners
viewProfileBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showProfile();
});

profileLink.addEventListener('click', function(e) {
    e.preventDefault();
    showProfile();
});

homeLink.addEventListener('click', function(e) {
    e.preventDefault();
    showWelcome();
});