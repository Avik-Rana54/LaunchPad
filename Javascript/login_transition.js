const login_container = document.querySelector('.login-container');
const register_button = document.querySelector('.register-btn'); 
const login_button = document.querySelector('.login-button');


if (register_button && login_container) {
    register_button.addEventListener('click', () => {
        login_container.classList.add('active');
    });
}

if (login_button && login_container) {
    login_button.addEventListener('click', () => {
        login_container.classList.remove('active');
    });
}