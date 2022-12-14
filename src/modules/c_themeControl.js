export default function themeControl() {
  const themeControl = document.createElement('input')

  themeControl.type = 'checkbox'
  themeControl.className = 'theme_switch'

  const themeMatch = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (themeMatch) {
    document.documentElement.setAttribute('theme', 'dark')
    themeSwitch.checked = true
  } else {
    document.documentElement.setAttribute('theme', 'light')
    themeControl.checked = false
  }

  themeControl.addEventListener('change', (e) => {
    document.documentElement.setAttribute('theme', e.target.checked ? 'dark' : 'light')
  })

  return themeControl
}
