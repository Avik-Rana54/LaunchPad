// Global helper to get relative path based on current location
window.getRelativePath = function(targetPage) {
    const isInHtmlFolder = window.location.pathname.toLowerCase().includes('/html/');
    if (isInHtmlFolder) {
        if (targetPage === 'index.html') {
            return '../index.html';
        }
        return targetPage;
    } else {
        if (targetPage === 'index.html') {
            return 'index.html';
        }
        return 'HTML/' + targetPage;
    }
};

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
            profileLink.href = window.getRelativePath('profile.html');
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
            joinCommunityBtn.href = window.getRelativePath('profile.html');
        } else {
            joinCommunityBtn.href = window.getRelativePath('login.html');
        }
    }
}

function logoutUser() {
    try {
        localStorage.removeItem('currentUser');
    } catch (e) { }
    window.location.href = window.getRelativePath('index.html');
}

function checkPageRestrictions() {
    const currentUser = getCurrentUser();
    const path = window.location.pathname.toLowerCase();

    if (path.includes('profile.html') || path.includes('register_comp.html')) {
        if (!currentUser) {
            window.location.href = window.getRelativePath('login.html');
        }
    }

    if (path.includes('login.html')) {
        if (currentUser) {
            window.location.href = window.getRelativePath('profile.html');
        }
    }
}

function setupCompetitionRegistration() {
    const registerButtons = document.querySelectorAll('.register-btn');
    registerButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentUser = getCurrentUser();
            if (!currentUser) {
                alert('Please login/register to participate in competitions!');
                window.location.href = window.getRelativePath('login.html');
                return;
            }
            
            const compName = btn.getAttribute('data-comp');
            alert(`Successfully registered for ${compName}!`);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateNavbar();
    checkPageRestrictions();
    setupCompetitionRegistration();
});
