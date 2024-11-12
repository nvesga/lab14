<button class="boton-tema" onclick="alternarTema()">Alternar Tema</button>

function alternarTema() {
    document.body.classList.toggle('oscuro');
    document.querySelector('.principal').classList.toggle('oscuro');
  }