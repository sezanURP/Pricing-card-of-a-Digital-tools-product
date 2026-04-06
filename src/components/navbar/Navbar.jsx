import React from "react";
import { TiShoppingCart } from "react-icons/ti";


const navItems = [
  {
    id: "nav-products",
    label: "Products",
    href: "/products",
  },
  {
    id: "nav-features",
    label: "Features",
    href: "/features",
  },
  {
    id: "nav-pricing",
    label: "Pricing",
    href: "/pricing",
  },
  {
    id: "nav-testimonial",
    label: "Testimonial",
    href: "/testimonials",
  },
  {
    id: "nav-faq",
    label: "FAQ",
    href: "/faq",
  },
];
const ShoppingCartWithBadge = ({  itemCount }) => (
  <div className="relative inline-block">
    <TiShoppingCart size={40} />
    <span className="badge badge-error  absolute -top-2 -right-2  text-white text-xs px-2 py-0 rounded-full">
      {itemCount}
    </span>
  </div>
);
const Navbar = ({cartItems}) => {

const cartItemCount = cartItems.length || 0;



  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              <li>
                {navItems.map((item) => (
                  <a key={item.id} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </li>
            </ul>
          </div>
          <a className=" font-bold text-blue-500 sm:text-3xl sm:pl-10 lg:pl-40">
            DigiTools
          </a>
        </div>
        <div className="navbar-start  hidden lg:flex">
          <ul className="flex flex-nowrap menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li className="font-medium text-gray-600 gap-2">
                <a key={item.id} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-5">
          <ShoppingCartWithBadge itemCount={cartItemCount} />
          </div>
          <div className="sm: md:">
            <a className="btn">Login</a>
          </div>
          <div className="sm:mr-11 md:px-5">
            <a
              className="btn rounded-full text-white  lg:font-medium"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(79, 57, 246, 1) 0%,rgba(149, 20, 250, 1) 100%)",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
