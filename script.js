// const getLastItem = array => array.slice(-1)[0]
// const isLastItem = (array, item) => array[array.length - 1] === item ? item : null
// const isFirstItem = (array, item) => array[0] === item ? item : null
// const getNextItem = (array, index) => !isLastItem(array, array[index]) ? array[index + 1] : null

;(() => {
  const words = [
    'hello', 'world', 'say', 'hi', 'bye', 'love', 'me', 'please', 'heh', 'huh', 'people', 'freeze', 'sleep',
  ]
  
  const wordsElement = document.getElementById('words')
  
  words.map(item => {
    const element = document.createElement('span')
    element.innerText = item
    wordsElement.appendChild(element)
  })
  
  const input = document.getElementById('input')
  let wordsCounter = 0
  let currentWord = words[wordsCounter]
  const wordsElements = wordsElement.querySelectorAll('span')

  wordsElements[wordsCounter].style.color = '#686868'

  input.onkeyup = function (e) {
    if (e.currentTarget.value.trim() === currentWord) {
      wordsElements[wordsCounter].style.color = 'royalblue'
      wordsCounter += 1
      currentWord = words[wordsCounter]
      e.currentTarget.value = ''
    } else {
      if (e.currentTarget.value.trim().length <= currentWord.length) {
        wordsElements[wordsCounter].style.color = '#686868'
      } else {
        wordsElements[wordsCounter].style.color = '#e2413e'
      }
    }
  }

})()