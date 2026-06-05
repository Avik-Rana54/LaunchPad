document.addEventListener('DOMContentLoaded', () => {
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const profileMobile = document.getElementById('profile-mobile');
    const profileCollege = document.getElementById('profile-college');
    const profileDept = document.getElementById('profile-dept');
    
    const noRegistrations = document.getElementById('no-registrations');
    const registrationsList = document.getElementById('registrations-list');
    const logoutBtn = document.getElementById('profile-logout-btn');


    const currentUser = getCurrentUser(); 

    if (currentUser) {
        profileName.textContent = currentUser.name;
        profileEmail.textContent = currentUser.email;
        profileMobile.textContent = currentUser.mobile;
        profileCollege.textContent = currentUser.college;
        profileDept.textContent = currentUser.dept;


        const registrations = currentUser.registrations || [];
        if (registrations.length > 0) {
            noRegistrations.style.display = 'none';
            registrationsList.style.display = 'flex';
            registrationsList.innerHTML = '';

            registrations.forEach(registration => {
                const profileItem = document.createElement('div');
                profileItem.className = 'registration-item';

                let teamHtml = '';
                if (registration.teamName) {
                    teamHtml = `
                        <div class="team-details-box">
                            <h4>
                                <span><i class="fa-solid fa-users"></i> Team: ${registration.teamName}</span>
                                <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary);">Size: ${registration.teamSize}</span>
                            </h4>
                            <div class="team-grid">
                                ${ (registration.members || []).map((member, index) => `
                                    <div class="member-card">
                                        <h5>
                                            <span>${member.name}</span>
                                            <span class="member-badge ${index === 0 ? 'leader' : 'member'}">
                                                ${index === 0 ? 'Leader' : 'Member'}
                                            </span>
                                        </h5>
                                        <p><i class="fa-solid fa-envelope"></i> ${member.email}</p>
                                        <p><i class="fa-solid fa-phone"></i> ${member.mobile}</p>
                                        <p><i class="fa-solid fa-school"></i> ${member.college}</p>
                                        <p><i class="fa-solid fa-graduation-cap"></i> Year ${member.year}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }

                profileItem.innerHTML = `
                    <div class="reg-item-header">
                        <h3>${registration.compName || ''}</h3>
                        <span class="reg-fee-badge">${registration.fee === '0' || registration.fee === 0 ? 'Free Entry' : `Paid: ₹${registration.fee}`}</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-secondary);"><i class="fa-regular fa-calendar-check"></i> Registered on ${registration.date ? new Date(registration.date).toLocaleDateString() : ''}</p>
                    ${teamHtml}
                `;

                registrationsList.appendChild(profileItem);
            });
        } else {
            noRegistrations.style.display = 'flex';
            registrationsList.style.display = 'none';
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            logoutUser(); 
        });
    }
});
