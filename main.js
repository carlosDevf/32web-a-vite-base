import JSConfetti from 'js-confetti'
import "./style.css"


export function setupCounter(element) {
  const jsConfetti = new JSConfetti()

  const cf = () => {
    jsConfetti.addConfetti()
  }
  
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `soy el boton ${counter}`
  }
  element.addEventListener('click', () => {
    cf()
    setCounter(counter + 1)
  })  
  setCounter(0)
}


const button = document.querySelector("#counter")
setupCounter(button)