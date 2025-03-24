import './App.css'
import Banner from './component/Banners/Banner';
import Banner2 from './component/Banners/Banner2';
import Banner3 from './component/Banners/Banner3';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero'
import Menus from './component/Menus/Menus'
import NavBar from './component/NavBar/NavBar'

function App() {

  return (
    <>
        <main className='overflow-x-hidden'>
          <NavBar/>
          <Hero/>
          <Menus/>
          <Banner/>
          <Banner2/>
          <Banner3/>
          <Footer/>
        </main>   
    </>
  );
};

export default App
