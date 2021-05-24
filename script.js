(() => {
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

  input.onkeyup = function (e) {
    if (e.currentTarget.value.trim() === currentWord) {
      wordsElements[wordsCounter].style.color = 'royalblue'
      wordsCounter += 1
      currentWord = words[wordsCounter]
      e.currentTarget.value = ''
    } else {
      wordsElements[wordsCounter].style.color = '#e2413e'
    }
  }

})()