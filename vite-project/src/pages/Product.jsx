import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (id) {
      fetchProduct()
    }
  }, [id])

  const fetchProduct = async () => {
    try {
      setLoading(true)
      const response = await fetch(`http://localhost:5000/knives/${id}`)
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Товар не найден')
        }
        throw new Error('Ошибка при загрузке товара')
      }
      
      const data = await response.json()
      setProduct(data)
    } catch (err) {
      setError(err.message)
      console.error('Ошибка:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center">Загрузка товара...</div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center text-red-500">Ошибка: {error}</div>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center text-gray-500">Товар не найден</div>
      </main>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img 
          src={product.image_url} 
          alt={product.name} 
          className="w-full md:w-1/2 h-96 object-cover rounded" 
        />
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-3">{product.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold mr-4">{product.price} ₽</span>
            <span className="text-amber-500 flex items-center">
              ★ {product.rating}
            </span>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded transition-colors">
            Добавить в корзину
          </button>
        </div>
      </div>
    </main>
  )
}