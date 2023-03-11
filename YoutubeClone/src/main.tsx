import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HeaderComponent from './header/header'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeaderComponent />
  </React.StrictMode>,
)
