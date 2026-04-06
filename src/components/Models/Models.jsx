import React, { use,  } from "react";
import ModelsCard from "./ModelsCard";

const Models = ({ promiseData, cartItems, setCartItems }) => {
  const models= use(promiseData);
  // console.log(models);
 

 

  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-10 mt-5 mx-auto">
        Premium Digital Tools
      </h2>
      <p className="text-center text-lg mb-10">
        Choose from our curated collection of premium digital products designed{" "}
        <br /> to boost your productivity and creativity.{" "}
      </p>

      {/* name of each tab group should be unique */}
      

      <div className="models-container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10  mx-auto items-center gap-7 justify-center p-10 ">
        {models.map((data) => (
        
          <ModelsCard key={data.id} data={data} cartItems={cartItems} setCartItems={setCartItems}/>
        ))}
      </div>
    </div>
  );
};

export default Models;
