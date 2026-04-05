import React from "react";
import { toast } from "react-toastify";

const Carts = ({ cartItems, setCartItems }) => {
  console.log(cartItems);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const handleRemoveFromCart = () => {
    setCartItems([]);
    (toast.success("Checkout successful! "),
      {
        position: "top-right",
        autoClose: 2000,
      });
  };
  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    // console.log(updatedCartItems);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 w-[80%] mx-auto">
        <div className="border-sky-300 border rounded container  mx-auto p-5">
          <h1 className=" ">Your Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-center text-2xl font-bold my-3">
              Your cart is empty.
            </p>
          ) : (
            <ul className="">
              {cartItems.map((item) => (
                <li className="my-4 rounded-2xl bg-gray-100" key={item.id}>
                  <div className="flex items-center gap-6 my-2">
                    <img
                      className="h-10 w-10 rounded"
                      src={item.image}
                      alt={item.name}
                    />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">
                        ${item.price}/{item.period}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        handleRemoveItem(item.id);
                        (toast.error(`${item.title} removed from cart!`),
                          {
                            position: "top-right",
                            autoClose: 2000,
                          });
                      }}
                      className="btn text-red-500 hover:bg-red-200  font-medium py-1 px-3 rounded-lg ml-auto"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex justify-between text-2xl font-medium bg-green-100 items-center my-5 p-2 rounded-lg">
          <div>Total</div>
          <div>${totalPrice.toFixed(2)}</div>
        </div>

        <div
          onClick={handleRemoveFromCart}
          className="btn bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg flex justify-center items-center mx-auto "
        >
          Proceed to Checkout
        </div>
      </div>
    </>
  );
};

export default Carts;
