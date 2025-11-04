import { useParams } from 'react-router-dom'
const items = Array.from({ length: 9 }).map((_, i) => ({ id: i + 1, title: `Товар ${i + 1}`, price: 1990 + i * 300, img: `https://picsum.photos/seed/p${i}/400/400` }))
export default function Product() {
const { id } = useParams()
const product = items.find(p => p.id === Number(id))
if (!product) return <div className="p-12 text-center text-gray-500">Товар не найден</div>
return (
<main className="max-w-5xl mx-auto px-4 py-8">
<div className="flex flex-col md:flex-row gap-8">
<img src={product.img} alt={product.title} className="w-full md:w-1/2 h-96 object-cover rounded" />
<div className="flex-1">
<h1 className="text-3xl font-semibold mb-3">{product.title}</h1>
<div className="text-2xl font-bold mb-6">{product.price.toLocaleString('ru-RU')} ₽</div>
<p className="text-gray-700 mb-6">Описание товара из каталога Zlatmax. Здесь будут характеристики, материалы и другие параметры.</p>
<button className="px-6 py-2 bg-amber-500 text-white rounded">Добавить в корзину</button>
</div>
</div>
</main>
)
}