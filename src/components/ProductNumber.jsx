import React from 'react'

const ProductNumber = ({ totalProducts, productsPerPage }) => {
  return (
    <p className='mobileTextL1Default text-neutral600 mt-6 text-center flex mb-24 2xl:mt-0 2xl:relative 2xl:mx-auto 2xl:mb-0 '>
      <span className='gradientText'>{productsPerPage} of {totalProducts}</span>&nbsp;products
    </p>
  )
}

export default ProductNumber;