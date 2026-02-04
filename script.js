// Efecto de aparición suave de las secciones
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
});

// Mensaje secreto para reclutadores en consola
console.log("%c¡Hola! Si estás viendo esto, es porque te importa el detalle técnico. ¡Hablemos!", "color: #58a6ff; font-size: 20px; font-weight: bold;");