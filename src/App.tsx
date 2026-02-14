import { useState } from 'react'
import './App.css'
import Specialization from './components/about/areasSpecialization'
import Footer from './components/contact/Footer'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import Qualifications from './components/qualifications/qualification'
import ContactModal from './modal/ContactModal'

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="antialiased selection:bg-red-100 selection:text-red-900">
      <Navbar onContactClick={()=> setModalOpen(true)} />
      <main>
        {/* We add IDs to these sections so the Navbar links actually work */}
        <div id="home">
          <Hero  onContactClick={()=> setModalOpen(true)}/>
        </div>
        
        <div id="expertise">
          <Qualifications />
        </div>
        
        <div id="services">
          <Specialization />
        </div>
      </main>
      <Footer />

      <ContactModal
      isOpen={isModalOpen}
      onClose={()=> setModalOpen(false)}
      
      />

    </div>
  )
}

export default App