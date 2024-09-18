document.querySelector('button').addEventListener('click', () => {
  const text = document.querySelector('p')
  text.textContent = 'Le texte a changé !'
  text.style.color = 'red'
})
