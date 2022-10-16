export default function Timer() {
  const name = 'timer'

  const screen = document.createElement('div')
  screen.className = 'screen'
  screen.innerText = 'TIMER'
  

  return {name, screen}
}