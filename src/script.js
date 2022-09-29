import 'style.scss'
import { themeControl, neonTexts } from '@/modules/_index'


const app = document.querySelector('#root')
app.append(themeControl(), neonTexts())



// Test import of a JavaScript module

// Test import of an asset
import webpackLogo from '../assets/images/webpack-logo.svg'

// Test import of styles

// Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo



// Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')

// Test a assets folder file
// const imageAssets = document.createElement('img')
// imageAssets.src = 'assets/images/example.png'