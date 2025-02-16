import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './page/landingPage'
import IndustriesPage from './page/IndustriesPage'
import NavbarComponent from './components/navbar'
import FooterComponent from './components/footer'
import ContactUs from './page/ContactPage'
function App() {

  return (
    <>
      <NavbarComponent />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Industries" element={<IndustriesPage />} />
          <Route path="/Contact" element={<ContactUs/>} />
        </Routes>
      </Router>
      <FooterComponent />
    </>
  )
}

export default App
