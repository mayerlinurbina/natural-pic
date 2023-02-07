import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import FavoritosProvider from './context/favoritosContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritosProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </FavoritosProvider>
  </React.StrictMode>,
)
