/* --------------------------------- IMPORT --------------------------------- */
import eventEmitter from './c_eventEmitter'

export default function navbar() {
  const navbar = document.createElement('div')
  navbar.className = 'navbar'

  const screenList = ['clock', 'timer', 'alarm', 'settings']

  function navigate(e) {
    // add or remove class of button
    navbar.childNodes.forEach((child) => {
      child.classList.remove('activated')
    })

    e.classList.add('activated')

    // emit event to switch current screen
    const screenName = e.childNodes[1].innerText
    eventEmitter.emit('navigate', screenName)
  }

  for (let i = 0; i < 4; i++) {
    const button = document.createElement('button')
    const buttonIcon = document.createElement('img')
    const buttonName = document.createElement('p')

    button.className = `button`
    buttonIcon.className = `button-icon-${screenList[i]}`
    buttonName.className = `button-${screenList[i]}`

    button.type = 'button'
    buttonName.innerText = screenList[i].toUpperCase()

    button.append(buttonIcon, buttonName)
    navbar.appendChild(button)

    button.addEventListener('click', (e) => navigate(e.target))
  }

  return navbar
}
