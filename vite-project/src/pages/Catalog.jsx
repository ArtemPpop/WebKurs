import React, { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard.jsx';

export default function Catalog() {
  const [knives, setKnives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchKnives();
  }, []);

  const fetchKnives = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/knives');
      
      if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
      }
      
      const data = await response.json();
      setKnives(data);
    } catch (err) {
      setError(err.message);
      console.error('Ошибка:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">Загрузка каталога...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center text-red-500">Ошибка загрузки: {error}</div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Каталог ножей</h1>
      
      {knives.length === 0 ? (
        <div className="text-center text-gray-500">Ножи не найдены</div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {knives.map(knife => (
            <ProductCard key={knife.id} product={knife} />
          ))}
        </div>
      )}
    </main>
  );
}