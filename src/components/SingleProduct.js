import React, { useState, useEffect, useContext } from "react"
import data from "../db.json"
import { Link, useParams } from "react-router-dom"
import Cart from "./Cart"
import CartContext from "../context/context"

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([])
  const { name } = useParams()
  const { isOpen, handleOpenCart } = useContext(CartContext)

  useEffect(() => {
    const findProduct = () => {
      const newProduct = data.products.find((product) => product.name === name)
      setSingleProduct(newProduct)
      console.log(newProduct)
    }

    findProduct()
  }, [name])

  return (
    <>
      <section className="xl:max-w-6xl xl:mx-auto py-10 lg:py-20 p-5">
        <img src={singleProduct.large} alt="" />
        <h1 className="text-4xl my-5 lg:mb-10 text-white font-bold md:text-5xl lg:text-6xl">
          {name}
        </h1>
        <p className="text-slate-300">{singleProduct.desc}</p>

        <ul className="flex items-center mt-10">
          <li className="mr-5">
            <button
              onClick={handleOpenCart}
              className="bg-white text-slate-800 py-2 px-4"
            >
              Add to cart
            </button>
          </li>
          <li>
            <Link to="/" className="text-slate-200 hover:text-white">
              &larr; Back
            </Link>
          </li>
        </ul>
      </section>

      {isOpen && <Cart />}
    </>
  )
}
