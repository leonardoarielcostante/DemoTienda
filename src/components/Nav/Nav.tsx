import React from "react"
import logo from "../../images/Proffessional.png"
import location from "../../assets/location.svg"
import plane from "../../assets/plane.svg"
import loupe from "../../assets/loupe.svg"
import cart from "../../assets/cart.svg"
import meat from "../../assets/meat.svg"

export type NavProps = {
  // types...
}

const Nav: React.FC<NavProps> = () => {
  return (
    <>
      <nav className="flex bg-red-800 w-full">
        <div>
          <img className="w-60 h-32 object-cover" src={logo} alt="Store Logo" />
        </div>
        <div className="flex w-full">
          <div className="w-full">
            <div className="flex h-1/3 text-white pl-4 items-center">
              <div className="flex pr-4">
                <img width="20" src={plane} alt="Plane Logo" />
                <p className="ml-2">TestEmail@gmail.com</p>
              </div>
              <div className="flex">
                <img width="20" src={location} alt="Location Logo" />
                <p className="ml-2">1234 Elm Street, Springfield, IL 62701</p>
              </div>
            </div>
            <div className="flex w-full h-2/3 font-bold">
              <ul className="flex bg-white items-center pl-6 w-3/4 text-gray-400">
                <li className="mr-10 hover:text-black">HOME</li>
                <li className="mr-10 hover:text-black">ABOUT US</li>
                <li className="mr-10 hover:text-black">SHOP</li>
                <li className="mr-10 hover:text-black">CONTACT US</li>
              </ul>
              <div className="bg-white flex">
                <button className="mr-4">
                  <img width="20" src={loupe} alt="Loupe Logo" />
                </button>
                <button className="mr-4">
                  <img width="20" src={cart} alt="Cart Logo" />
                </button>
              </div>
              <div className="w-1/6 flex justify-center">
                <button className="flex justify-center items-center">
                  <p className="border-r border-black px-2">ORDER NOW</p>
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
