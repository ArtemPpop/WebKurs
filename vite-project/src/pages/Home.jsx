import { Link } from 'react-router-dom'
export default function Home() {
const categories = [
{ id: 1, title: 'Ножи', img: 'https://picsum.photos/seed/cat1/400/200' },
{ id: 2, title: 'Точилки', img: 'https://picsum.photos/seed/cat2/400/200' },
{ id: 3, title: 'Аксессуары', img: 'https://picsum.photos/seed/cat3/400/200' },
]


return (
<main>
<section className="bg-gray-100 py-12">
<div className="max-w-7xl mx-auto px-4">
<h1 className="text-3xl font-bold mb-6">Добро пожаловать в Zlatmax</h1>
<p className="text-gray-600 mb-8">Крупнейший каталог товаров премиум-класса.</p>
<Link to="/catalog" className="px-6 py-3 bg-amber-500 text-white rounded">Перейти в каталог</Link>
</div>
</section>


<section className="max-w-7xl mx-auto px-4 py-12">
<h2 className="text-2xl font-semibold mb-6">Популярные категории</h2>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
{categories.map(c => (
<div key={c.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md">
<img src={c.img} alt={c.title} className="w-full h-40 object-cover" />
<div className="p-4 font-medium text-center">{c.title}</div>
</div>
))}
</div>
</section>
</main>
)
}