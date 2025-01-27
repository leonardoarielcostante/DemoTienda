import React from "react"
import flesh from "../../images/Flesh.png"

export type PresentationProps = {
  // types...
}

const Presentation: React.FC<PresentationProps> = () => {
  return (
    <section>
      <div className="relative w-full h-full flex justify-center items-center bg-black">
        <img
          className="relative w-full h-screen object-cover opacity-80"
          src={flesh}
          alt=""
        />
        <p className="absolute left-20 text-white text-9xl font-bold w-1/2">
          THE FINEST MEAT MARKET
        </p>
      </div>
    </section>
  )
}

export default Presentation
