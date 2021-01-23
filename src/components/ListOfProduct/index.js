import React, {useState,useEffect} from 'react';
import Product from '../Product/'
import getProducts from '../../services/getProducts'
import './styles.css'
export default function ListOfProduct({ product }){
    const { keyword } = product
    const [loading, setLoading ]= useState(false)
    const [products, setProducto] = useState ([])

    useEffect (function () {
    setLoading(true)
    getProducts({keyword}).then(products => 
    {
        setProducto(products)
        setLoading(false)
    
    })
    },[keyword])
    if (loading) {
        return  <i> cargando </i>
    }
    
    return (
      <div className="ListOfProducts">
        {products.map(
          ({ id, title, thumbnail, price, permalink, state_name }) => (
            <Product
              id={id}
              key={id}
              title={title}
              thumbnail={thumbnail}
              price={price}
              permalink={permalink}
              state_name={state_name}
            />
          )
        )}
      </div>
    );


}