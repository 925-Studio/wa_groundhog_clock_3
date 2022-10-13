/* --------------------------------- IMPORT --------------------------------- */
// Dependency
import 'regenerator-runtime/runtime'
// Style
import 'style.scss'
// Screens
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

// Viewport Size
const viewport = window.visualViewport

fitViewport()

// Local Language
const localLanguage = navigator.language === 'zh-cn' ? 'chinese' : 'english'

// Get root element
const app = document.querySelector('#root')

/* -------------------------------- FUNCTION -------------------------------- */
function fitViewport() {
  document.body.style.width = viewport.width + 'px'
  document.body.style.height = viewport.height + 'px'
}

function chooseScreen(s) {
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
eventEmitter.emit('local language', localLanguage)
eventEmitter.on('navigate', (s) => chooseScreen(s))

viewport.addEventListener('resize', fitViewport)
viewport.addEventListener('orientationchange', fitViewport)
