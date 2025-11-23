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
  <main className="max-w-6xl mx-auto px-4 py-8">

    {/* ВЕРХНИЙ БЛОК — ФОТО + ИНФОРМАЦИЯ */}
    <div className="flex flex-col lg:flex-row gap-8">
      
      {/* ЛЕВАЯ ГАЛЕРЕЯ */}
      <div className="lg:w-1/2">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-96 object-cover rounded shadow"
        />

        {/* Маленькие превью (если добавишь массив images) */}
        <div className="flex gap-3 mt-4">
          {[product.image_url, product.image_url, product.image_url].map(
            (img, i) => (
              <img
                key={i}
                src={img}
                className="w-24 h-20 object-cover rounded border cursor-pointer hover:opacity-80"
              />
            )
          )}
        </div>
      </div>

      {/* ПРАВАЯ ЧАСТЬ */}
      <div className="flex-1">

        <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>

        {/* Рейтинг + наличие */}
        <div className="flex items-center gap-4 mb-4">
          <div className="text-amber-500 text-lg">★★★★★</div>
          <div className="text-green-600 text-sm">В наличии</div>
        </div>

        {/* Характеристики */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between border-b pb-1">
            <span className="text-gray-500">Артикул:</span>
            <span>{product.id}</span>
          </div>
          <div className="flex justify-between border-b pb-1">
            <span className="text-gray-500">Производитель:</span>
            <span>{product.brand || "Не указано"}</span>
          </div>
          <div className="flex justify-between border-b pb-1">
            <span className="text-gray-500">Сталь:</span>
            <span>{product.steel || "Не указано"}</span>
          </div>
        </div>

        {/* Цена */}
        <div className="text-3xl font-bold mb-6">{product.price} ₽</div>

        {/* Количество + кнопки */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 text-xl bg-gray-200 rounded">-</button>
          <div className="w-10 h-10 flex items-center justify-center border rounded">
            1
          </div>
          <button className="w-10 h-10 text-xl bg-gray-200 rounded">+</button>

          <button className="ml-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded">
            В корзину
          </button>
        </div>
      </div>
    </div>

    {/* ТАБЫ */}
    <div className="mt-10">
      <div className="flex gap-6 border-b pb-2">
        <button className="pb-2 border-b-2 border-amber-500 font-medium">
          Описание
        </button>
        <button className="pb-2 text-gray-500 hover:text-black">
          Характеристики
        </button>
        <button className="pb-2 text-gray-500 hover:text-black">
          Отзывы
        </button>
      </div>

      <p className="mt-6 text-gray-700 leading-7">
        {product.description}
      </p>
    </div>

    {/* ПОХОЖИЕ ТОВАРЫ */}
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Похожие товары</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {[1,2,3,4].map((i) => (
          <div
            key={i}
            className="border rounded p-3 hover:shadow-lg cursor-pointer transition"
          >
            <img
              src={product.image_url}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <div className="font-medium">{product.name}</div>
            <div className="text-amber-500 text-sm mt-1">★★★★★</div>
            <div className="mt-2 font-semibold">{product.price} ₽</div>
          </div>
        ))}

      </div>
    </div>

  </main>
);
  
}