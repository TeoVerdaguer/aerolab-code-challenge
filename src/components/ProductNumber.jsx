import React from 'react'

const ProductNumber = ({ totalProducts, productsPerPage }) => {
  return (
    <p className='mobileTextL1Default text-neutral600 mt-6 text-center'>
      <span className='gradientText'>{productsPerPage} of {totalProducts}</span> products
    </p>
  )
}

export default ProductNumber;