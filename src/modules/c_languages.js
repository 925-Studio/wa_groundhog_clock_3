/* ----------------------------- INITIALIZATION ----------------------------- */
const localLanguage = navigator.language.includes('zh') ? 'chinese' : 'english'

/* ------------------------------- VARIABLE(S) ------------------------------ */
const languages = {
  chinese: {
    settings: {
      menu: ['计时器', '闹钟', '系统'],
      list: ['计时器列表', '闹钟列表'],
      button: ['新增', '删除', '默认'],
      system: ['系统语言', '主题模式', '24小时制', '闪烁特效'],
    },
    form: {},

    modal: {},
    buttons: ['时钟', '计时器', '闹钟', '设置']
  },
  english: {
    settings: {
      menu: ['Timer', 'Alarm', 'System'],
      list: ['Timer List', 'Alarm List'],
      button: ['ADD', 'DELETE', 'DEFAULT'],
      system: ['System Language', 'THEME Mode', '12-Hour Format', 'Broken Light'],
    },
    form: {},

    modal: {},
    buttons: ['CLOCK', 'TIMER', 'ALARM', 'SETTINGS']
  },
}

export default languages[localLanguage]