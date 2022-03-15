import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import data from "../db.json"
import Cart from "./Cart"
import CartContext from "../context/context"

export default function FetchProducts() {
  const [items] = useState(data)
  const { isOpen, handleOpenCart } = useContext(CartContext)

  return (
    <>
      <section className="px-5 py-10 lg:py-20 xl:max-w-6xl xl:mx-auto grid grid-cols-1 gap-5 lg:gap-10 xl:gap-20">
        {items.products.map(({ id, name, desc, small, large }) => (
          <article
            key={id}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 md:place-items-center lg:gap-10 xl:gap-20"
          >
            <div>
              <picture>
                <source media="(min-width: 768px)" srcSet={large} />
                <img src={small} alt={name} />
              </picture>
            </div>

            <div>
              <h2 className="font-bold text-4xl mb-5 text-white">{name}</h2>
              <p className="text-slate-300 mb-10">{`${desc.substring(
                0,
                200
              )}...`}</p>
              <ul className="flex items-center justify-between">
                <li>
                  <Link
                    to={`/${name}`}
                    className="border-2 border-white py-2 px-4 text-white"
                  >
                    More Details
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleOpenCart}
                    className="bg-white text-slate-800 py-2 px-4"
                  >
                    Add to Cart
                  </button>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </section>

      {isOpen && <Cart />}
    </>
  )
}
