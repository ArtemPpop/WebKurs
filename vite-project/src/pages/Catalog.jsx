import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ProductCard from '../component/ProductCard.jsx';

export default function Catalog() {
  const { category } = useParams(); // <-- получаем категорию
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Человеческое название (для заголовка)
  const titles = {
    knives: "Клинковое оружие",
    souvenirs: "Сувенирные изделия",
    flashlights: "Фонари ARMYTEK",
    accessories: "Сопутствующие товары"
  };

  useEffect(() => {
    fetchItems();
  }, [category]);

  const fetchItems = async () => {
    try {
      setLoading(true);

      const response = await fetch(`http://localhost:5000/${category}`);

      if (!response.ok) {
        throw new Error("Ошибка загрузки данных");
      }

      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-10 text-center">Загрузка...</div>;
  if (error) return <div className="p-10 text-red-500 text-center">{error}</div>;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">
        {titles[category] || "Каталог"}
      </h1>

      {items.length === 0 ? (
        <div className="text-center text-gray-500">Товары не найдены</div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <ProductCard 
              key={item.id} 
              product={{ ...item, category }} // ВАЖНО!
            />
          ))}
        </div>
      )}
    </main>
  );
}
