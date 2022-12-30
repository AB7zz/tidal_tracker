import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import AppContext from './components/AppContext/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <App />
  </AppContext>
)
