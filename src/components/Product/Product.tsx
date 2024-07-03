import product from "../../images/Product.jpg"
import React from "react"

export type ProductProps = {
  // types...
}

const Product: React.FC<ProductProps> = () => {
  return (
    <div className="flex items-center w-full border-b">
      <img
        className="object-contain mr-10"
        width="120"
        src={product}
        alt="Product Logo"
      />
      <div className="text-nowrap">
        <h3 className="text-2xl font-bold">Product Title</h3>
        <p>Subtitle</p>
      </div>
      <div className="flex justify-evenly w-full">
        <p className="text-xl font-bold text-slate-600">500g</p>
        <p className="text-lg font-bold text-red-800">$25</p>
      </div>
    </div>
  )
}

export default Product
