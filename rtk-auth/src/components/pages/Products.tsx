import React, { useEffect } from "react"
import ProductCard from "./ProductCard"
import { useGetProductsQuery } from "../services/productsApi"

const Products = () => {
  const {
    data: allProductsData,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useGetProductsQuery()

  useEffect(() => {
    // You can perform additional actions here if needed
  }, [])

  if (isLoading) return <h1>Loading</h1>

  return (
    <div>
      {isSuccess
        ? allProductsData.map((product) => (
            <h1>{product}</h1>
            // <ProductCard
            //   // key={product.id} // Assuming each product has a unique "id" property
            //   // name={product.name}
            //   description={product.description}
            //   price={product.price}
            // />
          ))
        : "Loading products..."}
    </div>
  )
}

export default Products
