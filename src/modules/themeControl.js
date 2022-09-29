// import sunIcon from 'assets/images/sun.svg'

export default function themeControl() {
  const wrapper = document.createElement('div')
  const checkbox = document.createElement('input')
  const icon = document.createElement('img')
  const currentIcon = 'assets/images/sun.svg'

  wrapper.className = 'theme_control_wrapper'

  checkbox.type = 'checkbox'
  checkbox.className = 'theme_switch'
  checkbox.checked = false

  icon.className = 'theme_icon'
  icon.src = 'assets/images/sun.svg'

  function changeIcon(p) {
    if (p) {
      icon.src = 'assets/images/moon.svg'
    } else {
      icon.src = 'assets/images/sun.svg'
    }
  }

  wrapper.appendChild(checkbox)
  wrapper.appendChild(icon)

  checkbox.addEventListener('click', () => {
    changeIcon(checkbox.checked)
  })

  return wrapper
}
