export default function screenTemplate(components) {
  const screenTemplate = document.createElement('div')
  screenTemplate.className = 'screen-template'

  for (const c of components) {
    screenTemplate.appendChild(c)
  }

  return screenTemplate
}