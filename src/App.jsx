import './App.css'
import Hero from './component/Hero/Hero'
import NavBar from './component/NavBar/NavBar'

function App() {

  return (
    <>
        <main className='overflow-x-hidden'>
          <NavBar/>
          <Hero/>
        </main>   
    </>
  )
}

export default App
