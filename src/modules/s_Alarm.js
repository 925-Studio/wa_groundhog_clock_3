export default function Alarm() {
  const name = 'alarm'

  const screen = document.createElement('div')
  screen.className = 'screen'
  screen.innerText = 'ALARM'
  

  return {name, screen}
}