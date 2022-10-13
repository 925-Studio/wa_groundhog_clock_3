/* --------------------------------- IMPORT --------------------------------- */
import { eventEmitter, themeControl, setLanguage, screen } from './_index'

/* ----------------------------- INITIALIZATION ----------------------------- */
const localLanguage = navigator.language.includes('zh') ? 'chinese' : 'english'

/* -------------------------------- COMPONENT ------------------------------- */
export default function Settings() {
  

  const text = setLanguage(localLanguage).settings

  const settingsBlock = document.createElement('div')
  settingsBlock.className = 'settings-block'

  const blockTitle = document.createElement('h3')
  blockTitle.className = 'block-title'
  blockTitle.innerText = localLanguage

  settingsBlock.append(blockTitle)

  return screen([settingsBlock])
}

// pages ?
// initialize local language
// settings screen layout
// basic functions on settings screen
// navbar language
// auto hide navbar (except on settings' screen)
// donate

// 24-hour format is off if the default language is English? 