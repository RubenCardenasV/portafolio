// Animaciones al hacer clic en proyectos
const projects = document.querySelectorAll('.card');
projects.forEach(project => {
    project.addEventListener('click', () => {
        project.classList.add('animate__animated', 'animate__shakeX');

        // Elimina la clase de animación después de 1 segundo
        setTimeout(() => {
            project.classList.remove('animate__animated', 'animate__shakeX');
        }, 1000);
    });
});

// Animaciones al hacer clic en habilidades
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('click', () => {
        skill.classList.add('animate__animated', 'animate__bounce');

        // Elimina la clase de animación después de 1 segundo
        setTimeout(() => {
            skill.classList.remove('animate__animated', 'animate__bounce');
        }, 1000);
    });
});