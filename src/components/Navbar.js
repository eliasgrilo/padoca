import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex justify-between items-center px-12 p-4 text-sm ">
        <div>
          <a href="https://tesla.com" className="logo">Padoca</a>
        </div>
        <div className="hidden lg:inline">
          <ul className="flex justify-center hover:cursor-pointer">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/models">Model S</a>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/model3">Model 3</a>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/modelx">Model X</a>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/modely">Model Y</a>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/solarroof">Solar Roof</a>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/solarpanels">Solar Panels</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:inline">
          <ul className="flex justify-center hover:cursor-pointer">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://shop.tesla.com">Shop</a>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/teslaaccount">Account</a>
            </li>
            <li
              onClick={handleNav}
              className="py-1 px-3 hover:rounded hover:bg-black/5"
            >
              Menu
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button onClick={handleNav} className="inline-flex items-center rounded-md py-2 px-4 p-2 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10">
            Menu
          </button>
        </div>

        <div
          className={
            nav
              ? "bg-white absolute right-0 top-0 w-80 h-full z-10"
              : "fixed right-[-100%]"
          }
        >
          <div className="flex justify-end pr-8 pt-8">
            <TfiClose onClick={handleNav} className="rounded p-1 hover:bg-black/5" size={28} />
          </div>
          <ul className="pt-8 px-6">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/models">Model S</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/model3">Model 3</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/modelx">Model X</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/modely">Model Y</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/solarroof">Solar Roof</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/solarpanels">Solar Panels</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/inventory/new/m3">
                Existing Inventory
              </a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/inventory/used/m3">
                Used Inventory
              </a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/tradein">Trade-In</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/drive">Test Drive</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/insurance">Insurance</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/powerwall">Powerwall</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
