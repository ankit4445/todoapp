import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'   /*1.first u have to install bootstrap by using command on terminal ,then u will see bootstrap will install in package.json in dependencies ,we have to import the bootstrap in main.jsx */
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)