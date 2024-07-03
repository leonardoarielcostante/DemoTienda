import React from "react"
import chicken from "../../assets/chicken.svg"
import cow from "../../assets/cow.svg"
import pig from "../../assets/pig.svg"
import goat from "../../assets/goat.svg"

export type CategoriesProps = {
  // types...
}

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <>
      <section className="w-full">
        <ul className="flex justify-evenly items-center h-48 font-semibold">
          <li className="flex flex-col justify-center items-center rounded-full bg-orange-100 h-36 w-36 hover:bg-red-500 transition-all duration-300 ease-in-out">
            <img width="85" src={chicken} alt="Chicken Logo" />
            <p>CHICKEN</p>
          </li>
          <li className="flex flex-col justify-center items-center rounded-full bg-orange-100 h-36 w-36 hover:bg-red-500 transition-all duration-300 ease-in-out">
            <img width="85" src={cow} alt="Cow Logo" />
            <p>BEAF MEAT</p>
          </li>
          <li className="flex flex-col justify-center items-center rounded-full bg-orange-100 h-36 w-36 hover:bg-red-500 transition-all duration-300 ease-in-out">
            <img width="85" src={pig} alt="Pig Logo" />
            <p>PORK</p>
          </li>
          <li className="flex flex-col justify-center items-center rounded-full bg-orange-100 h-36 w-36 hover:bg-red-500 transition-all duration-300 ease-in-out">
            <img
              className="transform scale-x-[-1]"
              width="85"
              src={goat}
              alt="Goat Logo"
            />
            <p>GOAT</p>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Categories
