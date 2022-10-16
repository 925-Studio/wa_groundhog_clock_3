/* --------------------------------- IMPORT --------------------------------- */
import {languages, eventEmitter} from './_index'

/* -------------------------------- COMPONENT ------------------------------- */
export default function navbar() {
  const navbar = document.createElement('div')
  navbar.className = 'navbar'

  const screenList = ['clock', 'timer', 'alarm', 'settings']

  function navigate(e) {
    // remove classes and add a class
    navbar.childNodes.forEach((child) => {
      child.classList.remove('activated')
    })

    e.classList.add('activated')

    // emit event to switch current screen
    const screenName = e.childNodes[1].id
    eventEmitter.emit('navigate', screenName)
  }

  for (let i = 0; i < 4; i++) {
    const button = document.createElement('button')
    const buttonIcon = document.createElement('img')
    const buttonName = document.createElement('p')

    button.type = 'button'
    button.className = `button-${screenList[i]}`

    buttonIcon.className = `button-icon-${screenList[i]}`
    
    buttonName.id = screenList[i] // for navigation
    buttonName.className = `button-text-${screenList[i]}`
    buttonName.innerText = languages.buttons[i] // text under the icon

    button.append(buttonIcon, buttonName)
    navbar.appendChild(button)

    button.addEventListener('click', (e) => navigate(e.target))
  }

  return navbar
}
