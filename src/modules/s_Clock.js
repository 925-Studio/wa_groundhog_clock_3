export default function Clock() {
  const name = 'clock'

  const screen = document.createElement('div')
  screen.className = 'screen'
  screen.innerText = 'CLOCK'
  

  return {name, screen}
}
