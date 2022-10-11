export default function neonTexts(title) {
  const neonTexts = document.createElement('h1')
  neonTexts.className = 'neon-texts'
  neonTexts.innerText = title
  
  return neonTexts
}

