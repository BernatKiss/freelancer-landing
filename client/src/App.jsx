import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import CompanyLogo from './components/CompanyLogo'
import BestServices from './components/BestServices'
import OurFeatures from './components/OurFeatures'
import Clients from './components/Clients'
import OurPrincing from './components/OurPrincing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const App = () => {

   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`overflow-visible ${menuOpen ? 'opacity-70' : 'opacity-100'}`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <CompanyLogo />
      <BestServices />
      <OurFeatures />
      <Clients />
      <OurPrincing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App