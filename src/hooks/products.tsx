import {useEffect, useState} from 'react'
import {IProduct} from '../models'
import axios, {AxiosError} from 'axios'

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product])
  }
  function removeProduct(product: IProduct) {
    setProducts(products.slice(products.indexOf(product, 1)))
  }
  

  async function fetchProducts() {
    try {
      console.log("i am in try")
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      console.log("after initizilation response")
      setProducts(response.data)
      console.log("response data")
      setLoading(false)
    } catch (e: unknown) {
      console.log("something cathed")
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, error, loading, addProduct,removeProduct }
}