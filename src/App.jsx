
import './App.css'
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Footer_2 from './components/footer_2/Footer_2';
import Models from './components/Models/Models';
import Navbar from './components/navbar/Navbar';
import Pricing from './components/PricingCard/Pricing';
import Start from './components/Start_section/Start';
import Stat from './components/Stat/Stat';

const modelsPromise = async () => {
  const response = await fetch('/public/Models.json');
  return response.json();
};

const promiseData = modelsPromise();
function App() {
  

  return (
    <>
      <Navbar/>

      <Banner/>

      <Stat/>

      <Models fallback={<span className="loading loading-bars loading-xl"></span>} promiseData={promiseData}/>

      <Start/>

      <Pricing/>

      <Footer/>

      <Footer_2/>

    </>
  )
}

export default App
