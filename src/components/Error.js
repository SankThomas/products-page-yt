import React from "react"
import { Link } from "react-router-dom"

export default function Error() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text- center h-screen">
        <h1 className="mb-10 text-xl text-white font-bold">
          Error 404
          <span className="text-base text-slate-200 font-light">
            {" "}
            | The page you are looking for does not exist
          </span>
        </h1>
        <Link
          to="/"
          className="bg-white text-slate-800 py-2 px-10 hover:bg-gray-100 transition-all duration-150"
        >
          &larr; Back to homepage
        </Link>
      </section>
    </>
  )
}
