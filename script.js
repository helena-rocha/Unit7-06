const myAge = 16
let answer = 0

document.getElementById('button').addEventListener('click', newfunction)
function newfunction () {
  while (myAge !== answer) {
    answer = prompt('guess my age')
    if (answer === myAge) {
      alert('You got it right!')
    } else if (answer < myAge) {
      alert('You guessed to small, please try again')
    } else if (answer > myAge) {
      alert('you guessed to big, pease try again')
    } else {
      alert('invalid answer, please try again')
    }
  }
}
