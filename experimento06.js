const botaoabrir = document.getElementById("btnAbrirModal");
const modalcontainer = document.getElementById("modalcontainer");

botaoabrir.addEventListener("click", function() {
    modalcontainer.innerHTML = `
        <div class="modal-fundo">
            <div class="modal-caixa">
                <h2>aviso!</h2>
                <p>este modal inteiro foi criado pelo javaScript.</p>
                <button id="btnFechaModal">fecha</button>
            </div>
        </div>`;

    const botaofechar = document.getElementById("btnFechaModal");
    botaofechar.addEventListener("click", function() {
        modalcontainer.innerHTML = "";
    });
});