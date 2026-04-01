import React, { useState } from 'react';


const ModelsCard = ( { data } ) => {
   // console.log(data.data);
   const [isBuyNow, setIsBuyNow] = useState(false);

   const handleBuyNow = () => {
      setIsBuyNow(true);
   }
   

   return (

      

  
      <div>
          <div>
            <div className="card w-96  shadow-sm">
              <div className="card-body">
                <div className="flex justify-around items-center  ">
                  <span>
                    <img
                      className="w-10 h-10 object-cover rounded-2xl "
                      src={data.image}
                      alt={data.title}
                    />
                  </span>



                  <span
                    className={`flex justify-center items-center rounded-2xl ml-50 px-3 font-medium ${data.status === "Popular" ? "bg-purple-200" : data.status === "New" ? "bg-green-200" : "bg-yellow-200"}`}
                  >
                    {data.status}
                  </span>

                  
                </div>




                <div className="flex justify-between">
                  <h2 className="text-2xl  font-bold">{data.title}</h2>
                </div>
                <div>
                  <p className="mb-5">{data.description}</p>

                  <span className="text-xl font-bold">
                    ${data.price}/{data.period}
                  </span>
                </div>


                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  {data.features.map((feature) => (
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                
                <div className="mt-6">
                  <button onClick={handleBuyNow} className="btn btn-primary btn-block rounded-3xl">
                    {isBuyNow ? "Added to Cart" : "Buy Now"}
                  </button>
                </div>


              </div>
            </div>
          </div>
      </div>
   );
};

export default ModelsCard;