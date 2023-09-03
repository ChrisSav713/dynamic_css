import React, { useContext } from 'react'
import useFlex from '../flex/FlexReducerContext'
import { MyContext } from '../App'

const Contact = () => {
  const handleAdd = () => {
    const product = {
      name: 'Product',
      imageUrl: 'http://web.com',
      price: '2.00'
    }
    addToCart(product)
  }

  const handleRemove = () => {
    const product = {
      name: 'Product',
      imageUrl: 'http://web.com',
      price: '2.00'
    }
    removeFromCart(product)
  }

  const { products, total, addToCart, removeFromCart } = useFlex()

  const { name, handleTextChange } = useContext(MyContext)
  return (
    <div>
      Contact
      <select name='prod'>
        {products.map((product, index) => (
          <option key={index} value={product.name}>
            {' '}
            {product.name + ' - ' + product.price}
          </option>
        ))}
      </select>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      <input readonly type='text' value={total} />
      <input value={name} onChange={(e) => handleTextChange(e)} />
    </div>
  )
}

export default Contact
