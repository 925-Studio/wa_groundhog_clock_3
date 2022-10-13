export default function screen(components) {
  const screen = document.createElement('div')
  screen.className = 'screen-template'

  for (const c of components) {
    screen.appendChild(c)
  }

  return screen
}