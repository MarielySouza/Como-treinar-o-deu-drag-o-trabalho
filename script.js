 function mostrarTextoSoluço() {
    const texto = document.getElementById("textosoluco")
    texto.style.opacity = "1"
  }
    function mostrarTextoAstrid() {
    const texto = document.getElementById("textoastrid")
    texto.style.opacity = "1"
  }
   function mostrarTextoCabeça() {
    const texto = document.getElementById("textocabeca")
    texto.style.opacity = "1"
  }
   function mostrarTextoMelequento() {
    const texto = document.getElementById("textomelequento")
    texto.style.opacity = "1"
  }
   function mostrarTextoPerna() {
    const texto = document.getElementById("textopernadp")
    texto.style.opacity = "1"
  }
   function mostrarTextoValka() {
    const texto = document.getElementById("textovalka")
    texto.style.opacity = "1"
  }
   function mostrarTextoStoico() {
    const texto = document.getElementById("textostoico")
    texto.style.opacity = "1"
  }
   function mostrarTextoBocao() {
    const texto = document.getElementById("textobocao")
    texto.style.opacity = "1"
  }
   function mostrarTextoEret() {
    const texto = document.getElementById("textoeret")
    texto.style.opacity = "1"
  }


  function esconderTextoSoluço() {
    const texto = document.getElementById("textosoluco")
    texto.style.opacity = "0"
  }
   function esconderTextoAstrid() {
    const texto = document.getElementById("textoastrid")
    texto.style.opacity = "0"
  }
   function esconderTextoCabeça() {
    const texto = document.getElementById("textocabeca")
    texto.style.opacity = "0"
  }
   function esconderTextoMelequento() {
    const texto = document.getElementById("textomelequento")
    texto.style.opacity = "0"
  }
   function esconderTextoPerna() {
    const texto = document.getElementById("textopernadp")
    texto.style.opacity = "0"
  }
   function esconderTextoValka() {
    const texto = document.getElementById("textovalka")
    texto.style.opacity = "0"
  }
   function esconderTextoStoico() {
    const texto = document.getElementById("textostoico")
    texto.style.opacity = "0"
  }
   function esconderTextoBocao() {
    const texto = document.getElementById("textobocao")
    texto.style.opacity = "0"
  }
   function esconderTextoEret() {
    const texto = document.getElementById("textoeret")
    texto.style.opacity = "0"
  }


  function ativarEventosImagemSoluço() {
    const imagem = document.getElementById("soluco")
    imagem.addEventListener("mouseenter", mostrarTextoSoluço)
    imagem.addEventListener("mouseleave", esconderTextoSoluço)
  }
  function ativarEventosImagemAstrid() {
    const imagem = document.getElementById("astrid")
    imagem.addEventListener("mouseenter", mostrarTextoAstrid)
    imagem.addEventListener("mouseleave", esconderTextoAstrid)
  }
  function ativarEventosImagemCabeça() {
    const imagem = document.getElementById("cabecaq")
    imagem.addEventListener("mouseenter", mostrarTextoCabeça)
    imagem.addEventListener("mouseleave", esconderTextoCabeça)
  }
  function ativarEventosImagemMelequento() {
    const imagem = document.getElementById("melequento")
    imagem.addEventListener("mouseenter", mostrarTextoMelequento)
    imagem.addEventListener("mouseleave", esconderTextoMelequento)
  }
  function ativarEventosImagemPerna() {
    const imagem = document.getElementById("pernadp")
    imagem.addEventListener("mouseenter", mostrarTextoPerna)
    imagem.addEventListener("mouseleave", esconderTextoPerna)
  }
  function ativarEventosImagemValka() {
    const imagem = document.getElementById("valka")
    imagem.addEventListener("mouseenter", mostrarTextoValka)
    imagem.addEventListener("mouseleave", esconderTextoValka)
  }
  function ativarEventosImagemStoico() {
    const imagem = document.getElementById("stoico")
    imagem.addEventListener("mouseenter", mostrarTextoStoico)
    imagem.addEventListener("mouseleave", esconderTextoStoico)
  }
  function ativarEventosImagemBocao() {
    const imagem = document.getElementById("bocao")
    imagem.addEventListener("mouseenter", mostrarTextoBocao)
    imagem.addEventListener("mouseleave", esconderTextoBocao)
  }
  function ativarEventosImagemEret() {
    const imagem = document.getElementById("eret")
    imagem.addEventListener("mouseenter", mostrarTextoEret)
    imagem.addEventListener("mouseleave", esconderTextoEret)
  }

 
  ativarEventosImagemSoluço()
  ativarEventosImagemAstrid()
  ativarEventosImagemCabeça()
  ativarEventosImagemMelequento()
  ativarEventosImagemPerna()
  ativarEventosImagemValka()
  ativarEventosImagemStoico()
  ativarEventosImagemBocao()
  ativarEventosImagemEret()

  