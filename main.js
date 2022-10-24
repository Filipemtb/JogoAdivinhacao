// Variables

const btnTry = document.querySelector('#btnTry')
const btnAgain = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Events

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

// Function callBack

function handleTryClick(event) {
  event.preventDefault() // Don´t make pattern

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    document.querySelector(
      '.screen2 h2'
    ).innerText = `Acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
