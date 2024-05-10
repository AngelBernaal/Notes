import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { notes } from './Notes'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className="main">
    <App notes={notes} />
    </section>
  </React.StrictMode>,
)
