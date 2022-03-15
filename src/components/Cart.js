import React, { useState, useContext } from "react"
import data from "../db.json"
import CartContext from "../context/context"

export default function Cart() {
  const [items] = useState(data)
  const { handleCloseCart } = useContext(CartContext)

  return (
    <>
      <aside className="p-5 bg-white fixed right-0 top-0 h-full z-50 w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-slate-800 font-bold text-2xl uppercase">
            Your cart
          </h2>
          <button
            onClick={handleCloseCart}
            className="border-b-2 border-transparent hover:border-slate-800 transition-all duration-150"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {items.products.map(({ id, name, small }) => (
            <article key={id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={small}
                  alt={name}
                  className="w-12 h-12 rounded-full mr-2"
                />
                <h3>{name}</h3>
              </div>

              <button className="bg-red-500 hover:bg-red-600 transtion-all duration-150 py-1 px-2 text-sm text-white">
                Delete
              </button>
            </article>
          ))}
        </div>

        <button className="bg-slate-800 py-2 px-10 mt-10 text-white hover:bg-slate-900 transition-all duration-150">
          Clear Cart
        </button>
      </aside>
    </>
  )
}
