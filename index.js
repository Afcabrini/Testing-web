var cacto = window.document.getElementById("cacto")
var orquidea = window.document.getElementById("orquidea")
var rosa = window.document.getElementById("rosa")
var sansvieria = window.document.getElementById("sansvieria")
var samambaia = window.document.getElementById("samambaia")
var palmeira = window.document.getElementById("palmeira")
var bamboo = window.document.getElementById("bamboo")
var costela = window.document.getElementById("costela")
var suculenta = window.document.getElementById("suculenta")
var setaesquerda = window.document.getElementById("setaes")
var seta = window.document.getElementById("seta")

function RolarParaDireita() {
  
    sansvieria.style = "display: none"
    rosa.style = "display: none"
   cacto.style = "display: none"
    orquidea.style = "display: none"
    bamboo.style = "display: block"
    costela.style = "display: block"
    suculenta.style = "display: block"
    samambaia.style = "display: block"
    palmeira.style = "display: block"
seta.style = "display: none"
setaes.style = "display: block; margin-top: 25vh; width: 30px; height: 30px"
}

    function RolarParaEsquerda() {
  
    sansvieria.style = "display: block"
    rosa.style = "display: block"
   cacto.style = "display: block"
    orquidea.style = "display: block"
    bamboo.style = "display: none"
    costela.style = "display: none"
    suculenta.style = "display: none"
    samambaia.style = "display: none"
    palmeira.style = "display: none"
setaes.style = "display: none"
seta.style = "display: block"
   
}