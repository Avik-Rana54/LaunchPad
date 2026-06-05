document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    const otpBody = document.getElementById('otp-overlay');
    const otpInput = document.getElementById('otp-input');
    const otpEmailDisplay = document.getElementById('otp-email-display');
    const OtpCodeElement = document.getElementById('simulated-otp-code');
    const otpVerifyBtn = document.getElementById('otp-verify-btn');
    const otpCancelBtn = document.getElementById('otp-cancel-btn');

    let tempUserData = null;
    let generatedOtp = '';
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;

            try {
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

                if (user && user.password === password) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    window.location.href = 'HTML/profile.html';
                } else {
                    alert('Invalid email or password.');
                }
            } catch (err) {
                console.error(err);
                alert('Authentication failed.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('reg-name').value.trim();
            const college = document.getElementById('reg-college').value.trim();
            const dept = document.getElementById('reg-dept').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const mobile = document.getElementById('reg-mobile').value.trim();
            const password = document.getElementById('reg-password').value;
            
            try {
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const emailExists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
                if (emailExists) {
                    alert('This email is already registered. Please login.');
                    return;
                }
            } catch (err) { }
            tempUserData = { name, college, dept, email, mobile, password, registrations: [] };


            generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
            OtpCodeElement.textContent = generatedOtp;
            otpEmailDisplay.textContent = email;

            otpInput.value = '';
            otpBody.style.display = 'flex';
        });
    }
    if (otpVerifyBtn) {
        otpVerifyBtn.addEventListener('click', () => {
            const enteredOtp = otpInput.value.trim();
            if (enteredOtp === generatedOtp) {
                if (tempUserData) {
                    try {
                        const users = JSON.parse(localStorage.getItem('users')) || [];
                        users.push(tempUserData);
                        localStorage.setItem('users', JSON.stringify(users));
                        localStorage.setItem('currentUser', JSON.stringify(tempUserData));

                        alert('Registration successful!');
                        otpBody.style.display = 'none';
                        window.location.href = '/HTML/profile.html';
                    } catch (err) {
                        alert('Could not save user data.');
                    }
                }
            } else {
                alert('Invalid OTP. ');
            }
        });
    }
    if (otpCancelBtn) {
        otpCancelBtn.addEventListener('click', () => {
            otpBody.style.display = 'none';
            tempUserData = null;
            generatedOtp = '';
        });
    }
});
