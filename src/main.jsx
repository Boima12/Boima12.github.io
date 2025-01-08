import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './assets/fontAwesome/fontAwesome.js';
import Page_WebDevelopment from './pages/WebDevelopment/WebDevelopment.jsx';
import Page_Kotlin from './pages/Kotlin/Kotlin.jsx';
import Page_Java from './pages/Java/Java.jsx';
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/pages/WebDevelopment" element={<Page_WebDevelopment />} />
        <Route path="/pages/Kotlin" element={<Page_Kotlin />} />
        <Route path="/pages/Java" element={<Page_Java />} />

      </Routes>
    </HashRouter>
  </StrictMode>
);
