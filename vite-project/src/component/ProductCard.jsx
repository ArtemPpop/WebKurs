import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <img 
        src={product.image_url } 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-medium mb-2 text-gray-900">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-bold text-gray-900">{product.price} ₽</span>
          <span className="text-amber-500 flex items-center">
            ★ {product.rating}
          </span>
        </div>
        <Link 
           to={`/product/${product.category}/${product.id}`}  
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded text-center transition-colors"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}