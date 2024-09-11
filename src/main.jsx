import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import Page_WebDevelopment from './pages/WebDevelopment/WebDevelopment.jsx';
import Page_Kotlin from './pages/Kotlin/Kotlin.jsx';
import Page_Java from './pages/Java/Java.jsx';
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/Pages/WebDevelopment" element={<Page_WebDevelopment />} />

        <Route path="/Pages/Kotlin" element={<Page_Kotlin />} />

        <Route path="/Pages/Java" element={<Page_Java />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>
);
