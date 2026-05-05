const imagenes = document.querySelectorAll(".img-galeria");
const modal = document.getElementById("modal");
const imagenModal = document.getElementById("imagenModal");
const cerrar = document.querySelector(".cerrar");

let escala = 1;

// Abrir imagen
imagenes.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        imagenModal.src = img.src;
        escala = 1;
        imagenModal.style.transform = `scale(${escala})`;
    });
});

// Zoom con rueda del mouse
imagenModal.addEventListener("wheel", (e) => {
    e.preventDefault();

    if (e.deltaY < 0) {
        escala += 0.1; // zoom in
    } else {
        escala -= 0.1; // zoom out
    }

    // límites de zoom
    if (escala < 1) escala = 1;
    if (escala > 3) escala = 3;

    imagenModal.style.transform = `scale(${escala})`;
});

// Cerrar con botón
cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar haciendo clic fuera
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
