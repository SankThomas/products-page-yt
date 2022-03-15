import { BrowserRouter, Routes, Route } from "react-router-dom"
import FetchProducts from "./components/FetchProducts"
import Error from "./components/Error"
import SingleProduct from "./components/SingleProduct"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<FetchProducts />}></Route>
        <Route path="/:name" element={<SingleProduct />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
