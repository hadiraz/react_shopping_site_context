import React, { useEffect, useState } from 'react'
import { getProducts } from "../services/api";

export const productContext = React.createContext() ;
function ProductContext({children}) {

    const [allProducts , setAllProducts] = useState([]);

    useEffect(()=>{
        const getData = async () => {
            const data = await getProducts();
            setAllProducts(data)
        }
        getData()
    },[])

  return (
    <productContext.Provider value={allProducts}>
        {children}
    </productContext.Provider>
  )
}

export default ProductContext