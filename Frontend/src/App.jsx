
import './App.css'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/services/Services'

function App() {

  return (
    <div className='container'>
      <section className='hero'>
      <Hero/>
      </section>
      <section className='services'>
      <Services/>
      </section>
      <section className='portfolio'>
      <Portfolio/>
      </section>
      <section className='contact'>
      <Contact/>
      </section>
 
   
    
 
    </div>
  )
}

export default App
