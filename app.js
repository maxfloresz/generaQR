const contenedorQR = document.getElementById("contenedorQR");
const formulario = document.getElementById("formulario");

const QR = new QRCode(contenedorQR);

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //la pagina no se va regrescar
    QR.makeCode(formulario.inputURL.value);
})