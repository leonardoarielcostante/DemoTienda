import React from "react"
import logo from "../../images/Proffessional.png"
import location from "../../assets/location.svg"
import plane from "../../assets/plane.svg"
import loupe from "../../assets/loupe.svg"
import cart from "../../assets/cart.svg"
import meat from "../../assets/meat.svg"
import twitter from "../../assets/twitter.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"

export type NavProps = {
  // types...
}

const Nav: React.FC<NavProps> = () => {
  return (
    <>
      <nav className="flex bg-red-800 w-full sticky top-0 z-10 border-b">
        <div>
          <img className="w-60 h-32 object-cover" src={logo} alt="Store Logo" />
        </div>
        <div className="flex w-full ">
          <div className="w-full">
            <div className="flex w-full h-1/3 text-white pl-4 items-center justify-between">
              <div className="flex">
                <div className="flex pr-4">
                  <img width="20" src={plane} alt="Plane Logo" />
                  <p className="ml-2">TestEmail@gmail.com</p>
                </div>
                <div className="flex">
                  <img width="20" src={location} alt="Location Logo" />
                  <p className="ml-2">1234 Elm Street, Springfield, IL 62701</p>
                </div>
              </div>
              <div className="flex items-center justify-between px-6 w-1/6">
                <a href="#">
                  <img width="15" src={twitter} alt="Twitter Logo" />
                </a>
                <a href="#">
                  <img width="15" src={facebook} alt="Facebook Logo" />
                </a>
                <a href="#">
                  <img width="15" src={instagram} alt="Instagram Logo" />
                </a>
              </div>
            </div>
            <div className="flex w-full h-2/3 font-bold">
              <ul className="flex bg-white items-center pl-6 w-4/5 text-gray-400">
                <li className="mr-10 hover:text-black transition-all ease-in-out cursor-pointer">
                  HOME
                </li>
                <li className="mr-10 hover:text-black transition-all ease-in-out cursor-pointer">
                  ABOUT US
                </li>
                <li className="mr-10 hover:text-black transition-all ease-in-out cursor-pointer">
                  SHOP
                </li>
                <li className="mr-10 hover:text-black transition-all ease-in-out cursor-pointer">
                  CONTACT US
                </li>
              </ul>
              <div className="bg-white flex">
                <button className="mr-4">
                  <img width="20" src={loupe} alt="Loupe Logo" />
                </button>
                <button className="mr-4">
                  <img width="20" src={cart} alt="Cart Logo" />
                </button>
              </div>
              <div className="w-2/12 flex justify-center">
                <button className="flex justify-center items-center">
                  <p className="border-r border-white px-2 text-white">
                    ORDER NOW
                  </p>
                  <img className="ml-2" width="20" src={meat} alt="Meat Logo" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
