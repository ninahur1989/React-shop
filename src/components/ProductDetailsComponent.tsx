import React, {useState} from 'react'
import {IProduct} from '../models'
import MyBasket from '../Basket'
import {Details} from './Details'

import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useProducts } from '../hooks/products'

interface ProductProps {
    product: IProduct
  }
 const DeteilComponent = () => {

const { id } = useParams();
const {loading, error, products, addProduct} = useProducts()
      
return (
    <div>
    <h2>About with Id: {id} </h2>
        { products.map(product => <Details product={product} key={ product.id} />) }
    </div>
    )
}
export default DeteilComponent
      