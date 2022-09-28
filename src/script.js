// Test import of a JavaScript module
import { example } from '@/modules/example'

// Test import of an asset
import webpackLogo from '../assets/images/webpack-logo.svg'

// Test import of styles
import '@/styles/style.sass'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a assets folder file
const imageAssets = document.createElement('img')
imageAssets.src = 'assets/images/example.png'

const app = document.querySelector('#root')
app.append(logo, heading, imageBackground, imageAssets)
