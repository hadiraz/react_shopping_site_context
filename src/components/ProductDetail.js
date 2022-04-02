import React, { useContext, useEffect , useState } from 'react'
import { Link } from 'react-router-dom';
import { productContext } from '../context/ProductContext'

function ProductDetail ({match}) {
  const [productInfo , setInfo] = useState({}) ;
  const productId = match.params.id ;
  const data = useContext(productContext);

  const product = data[productId-1];
  const {image , title , category , description} = product ;
  

  return (
    <section className="product-detail-container">

      <div className="product-detail-image">
        <img className="product-detail-image" alt={title} src={image} />
      </div>

      <div className="product-detail-info">
        <Link to="/products">Back</Link>
      </div>

    </section>
  )
}

export default ProductDetail