export default function themeControl() {
  const wrapper = document.createElement('div')
  const checkbox = document.createElement('input')

  wrapper.className = 'theme_control_wrapper'
  checkbox.className = 'theme_switch'

  checkbox.type = 'checkbox'

  wrapper.appendChild(checkbox)

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute('theme', 'dark')
    checkbox.checked = true
  } else {
    document.documentElement.setAttribute('theme', 'light')
    checkbox.checked = false
  }
  
  checkbox.addEventListener('change', (e) => {
    document.documentElement.setAttribute('theme', e.target.checked ? 'dark' : 'light')
  })

  return wrapper
}
