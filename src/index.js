import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { StyleProvider } from './context/StyleContext'
import { ThemeProvider } from './context/ThemeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <StyleProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StyleProvider>
  </React.StrictMode>
)
