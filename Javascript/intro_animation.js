const intro_animation = document.getElementById('intro');
if (intro_animation) {
    let played = false;
    try {
        played = sessionStorage.getItem('introPlayed');
    } catch (e) { }

    let isReload = false;
    try {
        const perf = window.performance;
        if (perf) {
            const navEntries = perf.getEntriesByType('navigation');
            if (navEntries.length > 0) {
                isReload = navEntries[0].type === 'reload';
            } else {
                isReload = perf.navigation.type === 1;
            }
        }
    } catch (e) { }

    if (played && !isReload) {
        intro_animation.style.display = 'none';
    } else {
        try {
            sessionStorage.setItem('introPlayed', 'true');
        } catch (e) { }

        setTimeout(() => {
            intro_animation.style.opacity = '0';
            setTimeout(() => {
                intro_animation.style.display = 'none';
            }, 4000);
        }, 4500);
    }
}