import { createContext, useReducer, useContext } from 'react'
import flexReducer, { initialState } from './FlexReducer'

const FlexReducerContext = createContext(initialState)

export const FlexReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(flexReducer, initialState)

  const addToCart = (product) => {
    const updatedCart = state.products.concat(product)
    updatePrice(updatedCart)
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        products: updatedCart
      }
    })
  }

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    )
    updatePrice(updatedCart)

    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        products: updatedCart
      }
    })
  }

  const updatePrice = (products) => {
    let total = 0
    products.forEach((product) => (total += product.price))

    dispatch({
      type: 'UPDATE_PRICE',
      payload: {
        total
      }
    })
  }

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart
  }
  return (
    <FlexReducerContext.Provider value={value}>
      {children}
    </FlexReducerContext.Provider>
  )
}

const useFlex = () => {
  const context = useContext(FlexReducerContext)

  if (context === undefined) {
    throw new Error('useFlex must be used within FlexReducerContext')
  }

  return context
}

export default useFlex
