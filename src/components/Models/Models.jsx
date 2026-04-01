import React, { use } from "react";

const Models = ({ promiseData }) => {
  const models = use(promiseData);
  console.log(models);
  return (
    <div className="models-container  grid md:grid-cols-3  my-10  mx-auto items-center gap-10 justify-center">
      {models.map((data) => (
        <div>
          <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
              <span
                className={`flex justify-center items-center rounded-2xl ml-60 font-medium ${data.status === "Popular" ? "bg-purple-200" : data.status === "New" ? "bg-green-200" : "bg-yellow-200"}`}
              >
                {data.status}
              </span>
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold">{data.title}</h2>
              </div>
              <div>
                <p>{data.description}</p>

                <span className="text-xl mt-10 font-bold">
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
                <button className="btn btn-primary btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Models;
