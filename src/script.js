/* --------------------------------- IMPORT --------------------------------- */
import 'style.scss'
// Pages
import { Clock, Timer, Alarm, Settings } from '@/modules/_index'
// Components
import { eventEmitter, navbar } from '@/modules/_index'

/* ------------------------------- INITIALIZE ------------------------------- */
// Theme
const themeMatch = window.matchMedia('(prefer-color-scheme: dark)').matches

if (themeMatch) {
  document.documentElement.setAttribute('theme', 'dark')
} else {
  document.documentElement.setAttribute('theme', 'light')
}

// Language
const localLanguageCode = navigator.language

// Viewport Size
const viewport = window.visualViewport

fitViewport()

// Get root element
const app = document.querySelector('#root')

/* -------------------------------- FUNCTION -------------------------------- */
function fitViewport() {
  document.body.style.width = viewport.width + 'px'
  document.body.style.height = viewport.height + 'px'
}

function buildScene(s) {
  switch (s) {
    case 'CLOCK':
      currentScreen = Clock()
      break
    case 'TIMER':
      currentScreen = Timer()
      break
    case 'ALARM':
      currentScreen = Alarm()
      break
    case 'SETTINGS':
      currentScreen = Settings()
      break
    default:
      break
  }

  app.firstElementChild.remove()
  app.prepend(currentScreen)
}

/* ----------------------------------- DOM ---------------------------------- */
let currentScreen = Settings()

app.append(currentScreen, navbar())

/* --------------------------------- EVENTS --------------------------------- */
eventEmitter.emit('check system language code', localLanguageCode)
eventEmitter.on('navigate', (s) => buildScene(s))

viewport.addEventListener('resize', fitViewport)
viewport.addEventListener('orientationchange', fitViewport)
