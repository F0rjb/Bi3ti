import React, { useEffect } from "react"
import ProductCard from "./ProductCard"
import { useGetProductQuery } from "../services/productsApi"

const Products = () => {
  const {
    data: allProdcutsData,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useGetProductQuery()

  if (isLoading) return <h1>Loeading</h1>
  console.log(data)
  return (
    <div>
      {isSuccess
        ? allProdcutsData.map((el: object, id: number) => <h1>{el}</h1>)
        : "wait"}
    </div>
  )
}

export default Products
