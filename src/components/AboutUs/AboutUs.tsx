import about from "../../images/About.jpg"
import check from "../../assets/check.svg"
import certificate from "../../assets/certificate.svg"
import React from "react"

export type AboutUsProps = {
  // types...
}

const AboutUs: React.FC<AboutUsProps> = () => {
  return (
    <section className="w-full flex justify-center items-center mt-20 border-dashed py-20 border-t border-orange-200">
      <div className="w-10/12 flex justify-center bg-orange-100 py-6 shadow rounded relative">
        <img
          className="shadow shadow-black"
          width="250"
          src={about}
          alt="About Us Image"
        />
        <div className="ml-4 w-2/3">
          <h3 className="text-5xl font-bold">LOREM IPSUM</h3>
          <p className="text-zinc-600 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            sit ab ad eum velit atque dolores magnam, accusantium incidunt ipsa
            fugiat aut, deleniti fuga sequi repellendus, distinctio laudantium
            deserunt. Nulla! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Expedita sit ab ad eum velit atque dolores magnam, accusantium
            incidunt ipsa fugiat aut, deleniti fuga sequi repellendus,
            distinctio laudantium deserunt. Nulla!
          </p>
          <div className="flex flex-col justify-center items-center h-1/2">
            <h4 className="text-3xl my-2 font-bold">LOREM IPSUM DOLOR SIT</h4>
            <div className="grid grid-cols-2 gap-8 text-zinc-600">
              <div className="flex">
                <img width="18" src={check} alt="Check Logo" />
                <p className="pl-2">Lorem ipsum</p>
              </div>
              <div className="flex">
                <img width="18" src={check} alt="Check Logo" />
                <p className="pl-2">Lorem ipsum</p>
              </div>
              <div className="flex">
                <img width="18" src={check} alt="Check Logo" />
                <p className="pl-2">Lorem ipsum</p>
              </div>
              <div className="flex">
                <img width="18" src={check} alt="Check Logo" />
                <p className="pl-2">Lorem ipsum</p>
              </div>
            </div>
            <img
              className="absolute bottom-0 right-2"
              width="80"
              src={certificate}
              alt="Certificate Logo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
