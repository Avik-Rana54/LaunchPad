// User Check
function getCurrentUser() {
    try {
        const userJson = localStorage.getItem('currentUser');
        return userJson ? JSON.parse(userJson) : null;
    } catch (e) {
        return null;
    }
}
//Logout navbar
function updateNavbar() {
    const currentUser = getCurrentUser();
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        if (currentUser) {
            const parent = loginBtn.parentElement;
            const profileLink = document.createElement('a');
            profileLink.href = '/HTML/profile.html';
            profileLink.id = 'profile-btn';
            profileLink.textContent = 'Profile';

            const logoutLink = document.createElement('a');
            logoutLink.href = '#';
            logoutLink.id = 'logout-btn';
            logoutLink.textContent = 'Logout';
            logoutLink.style.cursor = 'pointer';
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();
                logoutUser();
            });

            parent.replaceChild(profileLink, loginBtn);
            parent.appendChild(logoutLink);
        }
    }

    const joinCommunityBtn = document.getElementById('join-community-btn');
    if (joinCommunityBtn) {
        if (currentUser) {
            joinCommunityBtn.href = 'HTML/profile.html';
        } else {
            joinCommunityBtn.href = 'HTML/login.html';
        }
    }
}

function logoutUser() {
    try {
        localStorage.removeItem('currentUser');
    } catch (e) { }
    window.location.href = 'HTML/index.html';
}

function checkPageRestrictions() {
    const currentUser = getCurrentUser();
    const path = window.location.pathname.toLowerCase();

    if (path.includes('profile.html') || path.includes('register_comp.html')) {
        if (!currentUser) {
            window.location.href = 'HTML/login.html';
        }
    }

    if (path.includes('login.html')) {
        if (currentUser) {
            window.location.href = 'HTML/profile.html';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateNavbar();
    checkPageRestrictions();
    setupCompetitionRegistration();
});
