import React from 'react'

const ProductNumber = ({ totalProducts }) => {
  return (
    <p className='mobileTextL1Default text-neutral600 mt-6 text-center'>
      <span className='gradientText'>8 of {totalProducts}</span> products
    </p>
  )
}

export default ProductNumber;