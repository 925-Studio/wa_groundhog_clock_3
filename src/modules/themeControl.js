export default function themeControl() {
  const themeSwitch = document.createElement('input')

  themeSwitch.type = 'checkbox'
  themeSwitch.className = 'theme_switch'

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('theme', 'dark')
    themeSwitch.checked = true
  } else {
    document.documentElement.setAttribute('theme', 'light')
    themeSwitch.checked = false
  }

  themeSwitch.addEventListener('change', (e) => {
    document.documentElement.setAttribute('theme', e.target.checked ? 'dark' : 'light')
  })

  return themeSwitch
}
