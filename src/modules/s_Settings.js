/* --------------------------------- IMPORT --------------------------------- */
import { eventEmitter, themeControl, languages } from './_index'



/* -------------------------------- COMPONENT ------------------------------- */
export default function Settings() {
  const name = 'settings'

  const screen = document.createElement('div')
  screen.className = 'screen'
  screen.innerText = 'SETTINGS'
  

  return {name, screen}
}

const userSettings = {
  language: '', // english/chinese
  theme: '', // dark/light/auto
  lastScreen: '', // screen name
  AMandPM: undefined, // true/false
  brokenLight: undefined // true/false
}

// settings screen layout
// basic functions on settings screen
// navbar language
// auto hide navbar (except on settings' screen)
// donate

// 24-hour format is off if the default language is English? 