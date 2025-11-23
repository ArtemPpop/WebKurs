import React, { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard.jsx';

export default function Flashlights() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFlashlights();
  }, []);

  const fetchFlashlights = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/flashlights');

      if (!response.ok) throw new Error('Ошибка при загрузке данных');

      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-10">Загрузка...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Фонари ARMYTEK</h1>

      {items.length === 0 ? (
        <div className="text-center text-gray-500">Фонари отсутствуют</div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </main>
  );
}
