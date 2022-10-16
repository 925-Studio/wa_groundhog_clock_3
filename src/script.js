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
// Get root element
const app = document.querySelector('#root')

// Viewport size
const viewport = window.visualViewport

// Screen variables
let screen
let screenName

// Build scene
buildScene()
/* -------------------------------- FUNCTION -------------------------------- */
function fitViewport() {
  document.body.style.width = viewport.width + 'px'
  document.body.style.height = viewport.height + 'px'
}

function chooseScreen(sn) {
  switch (sn) {
    case 'clock':
      screen = Clock().screen
      screenName = Clock().name
      break
    case 'timer':
      screen = Timer().screen
      screenName = Timer().name
      break
    case 'alarm':
      screen = Alarm().screen
      screenName = Alarm().name
      break
    case 'settings':
      screen = Settings().screen
      screenName = Settings().name
      break
    default:
      break
  }

  // prevent first element child doesn't exit
  if (app.firstElementChild && app.firstElementChild.className === 'screen') {
    app.firstChild.remove()
  }

  app.prepend(screen)

  localStorage.setItem('screen name', JSON.stringify(screenName))
}

function buildScene() {
  // set app with user settings
  if (localStorage.length) {
    document.documentElement.setAttribute('theme', 'dark')
    // restore last screen
    screenName = JSON.parse(localStorage.getItem('screen name'))

    chooseScreen(screenName)
  }
  // initialize app with default settings
  else {
    // default theme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('theme', 'dark')
    } else {
      document.documentElement.setAttribute('theme', 'light')
    }

    // set default screen with clock
    screenName = Clock().name
  }

  fitViewport()
  chooseScreen(screenName)

  app.append(navbar())
  // default activated nav button
  document.querySelector(`.button-${screenName}`).classList.add('activated')
  // move last line to 'c_navbar.js' ?
}

/* ----------------------------------- DOM ---------------------------------- */

/* --------------------------------- EVENTS --------------------------------- */
eventEmitter.on('navigate', (s) => chooseScreen(s))

viewport.addEventListener('resize', fitViewport)
viewport.addEventListener('orientationchange', fitViewport)

// build scene according local storage
// hide navbar by default
