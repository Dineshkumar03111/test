import './App.css';
import Footer from'./components/Footer';
import Header from './components/Header';
import Maincontent from './components/Maincontent';
import Prices from './components/Prices';
import Testimonials from './components/Testimonials';
import Services from './components/Services'
import WhyUs from './components/WhyUs';


function App() {
  return (
    <div>
      <Header/>
    <Maincontent/>
    <WhyUs/>
    <Services/>
  <Prices/><br/>
  <Testimonials/>
      <Footer />

    </div>
  );
}



export default App;
