
import './App.css'
import Banner from './components/Banner/Banner';
import Models from './components/Models/Models';
import Navbar from './components/navbar/Navbar';
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

    </>
  )
}

export default App
