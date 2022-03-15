import { createContext, useState } from "react"

const CartContext = createContext({
  isOpen: false,
  handleOpenCart: () => {},
  handleCloseCart: () => {},
})

export const CartContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenCart = () => {
    setIsOpen(true)
  }

  const handleCloseCart = () => {
    setIsOpen(false)
  }

  const context = { isOpen, setIsOpen, handleOpenCart, handleCloseCart }

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}

export default CartContext
