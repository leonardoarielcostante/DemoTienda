import React from "react"
import Product from "../Product/Product"

export type ProductsProps = {
  // types...
}

const Products: React.FC<ProductsProps> = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-10/12">
        <h2 className="text-5xl font-bold text-center py-4">PRODUCTS PRICE</h2>
        <div className="grid grid-cols-2 gap-4 h-80">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  )
}

export default Products
