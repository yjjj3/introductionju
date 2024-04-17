document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        const percent = skill.getAttribute('data-percent');
        const progressBar = document.createElement('div');
        
        progressBar.className = 'progress-bar';
        skill.appendChild(progressBar);

        skill.addEventListener('mouseover', function() {
            animateProgressBar(progressBar, percent);
        });

        skill.addEventListener('mouseout', function() {
            resetProgressBar(progressBar);
        });
    });
});

function animateProgressBar(progressBar, percent) {
    progressBar.style.width = 0;
    setTimeout(() => {
        progressBar.style.width = percent + '%';
    }, 100);
}

function resetProgressBar(progressBar) {
    progressBar.style.width = 0;
}
