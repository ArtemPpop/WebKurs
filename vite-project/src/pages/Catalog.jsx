import { useNavigate } from 'react-router-dom'
const products = Array.from({ length: 9 }).map((_, i) => ({ id: i + 1, title: `Товар ${i + 1}`, price: 1990 + i * 300, img: `https://picsum.photos/seed/p${i}/400/400` }))
export default function  Catalog() {
const navigate = useNavigate()
return (
<main className="max-w-7xl mx-auto px-4 py-8">
<h1 className="text-2xl font-semibold mb-6">Каталог товаров</h1>
<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{products.map(p => (
<div key={p.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md">
<img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
<div className="p-4">
<h3 className="font-medium mb-1">{p.title}</h3>
<div className="text-gray-600 mb-3">{p.price.toLocaleString('ru-RU')} ₽</div>
<button onClick={() => navigate(`/product/${p.id}`)} className="px-4 py-2 border rounded text-sm">Подробнее</button>
</div>
</div>
))}
</div>
</main>
)
}