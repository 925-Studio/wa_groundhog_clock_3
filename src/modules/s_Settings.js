/* --------------------------------- IMPORT --------------------------------- */
import { doc } from 'prettier'
import { eventEmitter, themeControl, screenTemplate } from './_index'

/* -------------------------------- FUNCTION -------------------------------- */
let languageCode

eventEmitter.on('check system language code', (code) => (languageCode = code))

function setSystemLanguage(lc) {
  let language, title, system, theme, timeFormat, brokenLight, timer, alarm

  if (lc === 'zh-cn') {
    language = '中文'
    title = '设置'
    system = '系统'
    theme = '暗夜模式'
    timeFormat = '24小时制'
    brokenLight = true
    timer = '计时器'
    alarm = '闹钟'
  } else {
    language = 'English'
    title = 'Settings'
    system = 'SYSTEM'
    theme = 'Dark Mode'
    timeFormat = '24-Hour Time'
    brokenLight = true
    timer = 'TIMER'
    alarm = 'ALARM'
  }

  return { language, title, system, theme, timeFormat, brokenLight, timer, alarm }
}

/* -------------------------------- COMPONENT ------------------------------- */
export default function Settings() {
  const { language, title, system, theme, timeFormat, brokenLight, timer, alarm } =
    setSystemLanguage(languageCode)

  const settingsBlock = document.createElement('div')
  settingsBlock.className = 'settings-block'

  const blockTitle = document.createElement('h3')
  blockTitle.className = 'block-title'
  blockTitle.innerText = system

  settingsBlock.append(blockTitle)

  return screenTemplate([settingsBlock])
}

// manual check cycle dependencies