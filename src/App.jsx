import './App.css'
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import Team from './components/Team';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Connect from './components/Connect';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Mission />
    <Team />
    <Services />
    <Timeline />
    <Connect />
    <Footer />
    </>
  )
}

export default App