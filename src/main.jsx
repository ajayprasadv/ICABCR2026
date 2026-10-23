import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home2027 from './pages/icabcr2027/Home2027.jsx'
import Community2027 from './pages/icabcr2027/Community2027.jsx'
import Cfp2027 from './pages/icabcr2027/Cfp2027.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/community" element={<Navigate to="/" replace />} />
        <Route path="/advisory" element={<Navigate to="/" replace />} />
        <Route path="/submission" element={<Navigate to="/" replace />} />
        <Route path="/registration" element={<Navigate to="/" replace />} />
        <Route path="/editors" element={<Navigate to="/" replace />} />
        <Route path="/icabcr2027" element={<Home2027 />} />
        <Route path="/icabcr2027/community" element={<Community2027 />} />
        <Route path="/icabcr2027/cfp" element={<Cfp2027 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
