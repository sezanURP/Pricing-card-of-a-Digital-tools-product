import React, { use } from "react";

const Models = ({ promiseData }) => {
  const models = use(promiseData);
  console.log(models);
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
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Products" />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Cart()" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

</div>



      <div className="models-container  grid md:grid-cols-3  my-10  mx-auto items-center gap-10 justify-center">
        {models.map((data) => (
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
                  <button className="btn btn-primary btn-block rounded-3xl">
                    Buy Now
                  </button>
                </div>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
