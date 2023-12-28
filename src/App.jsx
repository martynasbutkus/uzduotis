import './App.css'
import Hero from './components/Stripes'

function App() {
  return (
    <>
    <header>
      <Hero color={'blue'} title={'Hero'} subtitle={'Info hero'}/>
      <Hero color={'red'} title={'About'} subtitle={'Info about'}/>
      <Hero color={'blue'} title={'Contacts'} subtitle={'Info contacts'}/>
      <Hero color={'red'} title={'Faq'} subtitle={'Info faq'}/>
    </header>
    </>
  )
}

export default App
