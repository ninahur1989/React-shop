import React, {useState} from 'react'
import {IProduct} from '../models'
import MyBasket from '../Basket'
import {Details} from './Details'

import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useProducts } from '../hooks/products'
import { Button } from 'react-bootstrap';
import {ProductBasket} from './ProductBasket'

interface ProductProps {
    product: IProduct
  }
 const DeteilComponent = () => {

const { id  } = useParams();
const {loading, error, products, addProduct, removeProduct} = useProducts()
const d = products[Number(id)].description
console.log(products[Number(id)].description)
console.log(id)


      
return (
    <div>
        <h2>About with Id: {id} </h2>        
        {<div>
            <img src={products[Number(id)].image} className="w-1/6" alt={products[Number(id)].title} />
            {d}
        </div>}
        <Link to={'/'} onClick = {(ev)=>{
            MyBasket.RemoveGood(Number(id))
            products.splice(1,Number(id))
            removeProduct(products[Number(id)])
        }}></Link>
    </div>
    )
}
export default DeteilComponent
      