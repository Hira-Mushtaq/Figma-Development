import './App.css'
import Coronavirus from './Component/Coronavirus/Coronavirus'
import Footer from './Component/Footer/Footer'
import { Header } from './Component/Header/Header'
import Hero from './Component/Hero/Hero'
import News from './Component/News/News'
import Preventions from './Component/Preventions/Preventions'
import Protections from './Component/Protection/Protections'
import Statistics from './Component/Statistics/Statistics'
import Syptoms from './Component/Syptoms/Syptoms'


function App() {
 

  return (
   <div>
    <Header/>
   <Hero/>
   <Statistics/>
   <Coronavirus/>
   <Preventions/>
   <Protections/>
   <Syptoms/>
   <News/>
   <Footer/>
   </div>
  )
}

export default App
