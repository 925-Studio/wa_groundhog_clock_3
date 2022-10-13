/* ------------------------------- VARIABLE(S) ------------------------------ */
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

/* ------------------------------ COMPONENT(S) ------------------------------ */
export default function setLanguage(l) {
  const language = languages[l]
  
  return language
}

/* -------------------------------- EVENT(S) -------------------------------- */
