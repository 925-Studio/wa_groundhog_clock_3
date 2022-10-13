/* --------------------------------- IMPORT --------------------------------- */
import eventEmitter from './c_eventEmitter'

/* ------------------------------- VARIABLE(S) ------------------------------ */
let defaultLanguage

const languages = {
  chinese: {
    settings: {
      menu: ['系统', '计时器', '大西瓜'],
      system: ['系统语言', '暗夜模式', '24小时制', '闪烁特效'],
      list: ['计时器列表', '闹钟列表'],
      button: ['新增', '删除', '默认'],
    },
    form: {},

    modal: {},
  },
  english: {
    settings: {
      menu: ['System', 'Timer', 'daxigua'],
      system: ['System Language', 'Dark Mode', '24-Hour Format', 'Broken Light'],
      list: ['Timer List', 'Alarm List'],
      button: ['ADD', 'DELETE', 'DEFAULT'],
    },
    form: {},

    modal: {},
  },
}

/* ------------------------------- FUNCTION(S) ------------------------------ */
// Check default language

/* ------------------------------ COMPONENT(S) ------------------------------ */
export default function setLanguage() {
  // language initialization
  // let defaultLanguage

  
}

/* -------------------------------- EVENT(S) -------------------------------- */
// const abc = 
eventEmitter.on('local language', (localLanguage) => defaultLanguage = localLanguage)

// console.log(defaultLanguage)




// eventEmitter.on("local language", function(e) {
//   e.message += " World";              // Modifying the state
// });

async function myDisplay() {
  let myPromise = await defaultLanguage
  console.log(myPromise)
}

myDisplay().then(alert);