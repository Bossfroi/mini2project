import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
const APICLIENTID ="395663339309-7ti4lpgi189j9ki7l0ohnpuevj9q6lsa.apps.googleusercontent.com"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={APICLIENTID}>
    <App />
    </GoogleOAuthProvider>

  </React.StrictMode>,
)
