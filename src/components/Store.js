import React, { useContext } from 'react'
import { productContext } from '../context/ProductContext'
import StoreProductItem from '../shared/StoreProductItem';

function Store() {
    const getContext = useContext(productContext) ;
  return (
    <section className="product-items-container">
        {
            getContext.map(value => {
                return <StoreProductItem key={value.id} data={value} />
            })
        }
    </section>
  )
}

export default Store