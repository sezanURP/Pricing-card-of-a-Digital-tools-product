import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Carts from "./components/Cart/Carts";
import Footer from "./components/Footer/Footer";
import Footer_2 from "./components/footer_2/Footer_2";
import Models from "./components/Models/Models";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/PricingCard/Pricing";
import Start from "./components/Start_section/Start";
import Stat from "./components/Stat/Stat";

const modelsPromise = async () => {
  const response = await fetch("/Models.json");
  return response.json();
};

const promiseData = modelsPromise();
function App() {
  const [activeTab, setActiveTab] = useState("Products");
  const[cartItems, setCartItems] = useState([]);

  // console.log(cartItems);
  return (
    <>
      <Navbar cartItems={cartItems} />

      <Banner />

      <Stat />
      <div className="tabs tabs-box sm:w-[25%] mx-auto gap-6 rounded-full flex   justify-center mb-2 mt-30 bg-gray-300">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab px-10 rounded-full ${activeTab === "Products" ? "text-lg font-bold bg-blue-500 text-white" : ""}`}
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab("Products")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab px-10 rounded-full ${activeTab === "Cart" ? "text-lg font-bold bg-blue-500 text-white" : ""}`}
          aria-label={`Cart (${cartItems.length})`}
          onClick={() => setActiveTab("Cart")}
        />
      </div>


      {activeTab === "Products" && (
        <Models
          fallback={<span className="loading loading-bars loading-xl"></span>}
          promiseData={promiseData} cartItems={cartItems} setCartItems={setCartItems}
        />
      )}

      {activeTab === "Cart" && <Carts cartItems={cartItems} setCartItems={setCartItems} />}

      <Start />

      <Pricing />
      

      <Footer />

      <Footer_2 />
    </>
  );
}

export default App;
