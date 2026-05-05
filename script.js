function abrirModal(elemento) {
    const img = elemento.querySelector("img").src;
    const modal = document.getElementById("modal");
    const imagenGrande = document.getElementById("imagenGrande");

    imagenGrande.src = img;
    modal.style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
const imagenes = document.querySelectorAll(".img-galeria");
const modal = document.getElementById("modal");
const imagenModal = document.getElementById("imagenModal");
const cerrar = document.querySelector(".cerrar");

// Abrir imagen
imagenes.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        imagenModal.src = img.src;
    });
});

// Cerrar con botón
cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar haciendo clic fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
