export default function neonTexts() {
  const neonTextsFrame = document.createElement('div')
  neonTextsFrame.classList.add('neon-texts-frame')

  const lang = navigator.language
  console.log(lang)

  const neonTexts = document.createElement('h1')
  neonTexts.className = 'neon-texts'
  neonTexts.innerText = '土拨鼠之日'

  neonTextsFrame.appendChild(neonTexts)
  
  return neonTextsFrame
}

