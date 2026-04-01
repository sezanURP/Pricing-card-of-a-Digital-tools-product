import React, { use, useState } from "react";
import ModelsCard from "./ModelsCard";

const Models = ({ promiseData }) => {
  const models = use(promiseData);

  const [activeTab, setActiveTab] =useState( "Products" );
  console.log(activeTab);
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-10 mt-20 mx-auto">
        Premium Digital Tools
      </h2>
      <p className="text-center text-lg mb-10">
        Choose from our curated collection of premium digital products designed{" "}
        <br /> to boost your productivity and creativity.{" "}
      </p>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box rounded-full flex justify-center mb-10 bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full"
          aria-label="Products"
           defaultChecked
          onClick={()=>setActiveTab("Products")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full"
          aria-label="Cart"
          onClick={()=>setActiveTab("Cart")}
         
        />
      </div>

      <div className="models-container  grid md:grid-cols-3  my-10  mx-auto items-center gap-7 justify-center p-10 ">
        {models.map((data) => (
          <ModelsCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Models;
