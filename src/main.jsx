import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Community from './pages/Community.jsx'
import AdvisoryBoards from './pages/AdvisoryBoards.jsx'
import Submission from './pages/Submission.jsx'
import Editors from './pages/Editors.jsx'
import Registration from './pages/Registration.jsx'
import Home2027 from './pages/icabcr2027/Home2027.jsx'
import Community2027 from './pages/icabcr2027/Community2027.jsx'
import Cfp2027 from './pages/icabcr2027/Cfp2027.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/community" element={<Community />} />
        <Route path="/advisory" element={<AdvisoryBoards />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/editors" element={<Editors />} />
        <Route path="/icabcr2027" element={<Home2027 />} />
        <Route path="/icabcr2027/community" element={<Community2027 />} />
        <Route path="/icabcr2027/cfp" element={<Cfp2027 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
