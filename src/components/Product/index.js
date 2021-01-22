import React from 'react'
import { Link } from 'wouter'
import './styles.css'
export default function Product({title,thumbnail,price,id}) {
    return(
    <div className='card'>
    <Link to ={`/product/${id}`}>
    <img src ={thumbnail} alt={id}/><br/>
    <small>{price}</small> {id}
    </Link>
    </div>
    )
    
}