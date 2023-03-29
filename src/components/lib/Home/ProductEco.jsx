import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ContextData } from '../../../App'

export default function ProductEco() {
    const [globalData, setGlobalData] = useState(ContextData)
    const [products, setProducts] = useState([])
    // get fetch product
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                console.log("Get product", res.data)
                setProducts(res.data)
            })
            .catch(err => {
                console.log("Error in fetch product", err)
            })
    }, [])

    const handleAddProduct = (product) => {
        console.log("Add Product", product)
        const prevProduct = globalData.addedProducts
        if (prevProduct) {
            setGlobalData({
                addedProducts: [...globalData.addedProducts, product]
            })
            console.log("Add many product")
        } else {
            console.log("Add only one product")
            setGlobalData({
                addedProducts: [product]
            })
        }
        console.log("prevProduct", prevProduct)
    }

    return (
        <div className='grid grid-cols-3 gap-4 border  '>
            {
                products.length &&
                products.map(product => (
                    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                        <img src={product?.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{product?.title}</span>
                            <h2 className="text-xl font-semibold tracking-wide">{product?.price} $ <button className='bg-blue-700 px-3  rounded'
                                onClick={() => handleAddProduct(product)}
                            >+Cart</button>
                            </h2>
                        </div>
                        <p className="dark:text-gray-100">
                            {product?.description}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
