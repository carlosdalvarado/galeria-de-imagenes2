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
