import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Удаляем загрузочный экран
const bootElement = document.getElementById('boot')
if (bootElement) {
  bootElement.remove()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
