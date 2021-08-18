var quantidadeNumero = document.getElementById("lines");
var numeroInicial = document.getElementById("initialNumber")
var numeroFinal = document.getElementById("finalNumber")
var array = [];

const makeList = () => {

  function geraNumeroRandon(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
  }

  for (let i = 1; i - 1 < quantidadeNumero.value; i++) {

    array[i] = ` Número: ${geraNumeroRandon(parseInt(numeroInicial.value), parseInt(numeroFinal.value))}<br>`
  }


  list.innerHTML = `Os números sorteados são:<br><br>${array}`

  if (quantidadeNumero.value <= 0) {

    alert('Digite uma quantidade de números válida')

  } else if (parseInt(numeroInicial.value) > parseInt(numeroFinal.value)) {
    alert('O número inicial não pode ser menor que o número final')
  } else {
    list.style.visibility = "visible"
  }

}

const menuItens = document.querySelectorAll('.menu a[href^="#"]')

menuItens.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
  event.preventDefault()
  const element = event.target;
  const id = element.getAttribute('href')
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to,
    behavior: "smooth"

  });

}