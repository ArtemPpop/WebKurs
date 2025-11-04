import { Link } from 'react-router-dom'
export default function Header() {
return (
<header className="border-b bg-white sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
<Link to="/" className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-md flex items-center justify-center font-bold text-white">ZM</div>
<div className="font-bold text-lg">Zlatmax</div>
</Link>
<nav className="flex gap-6 text-sm">
    <Link to="/catalog" className="hover:text-amber-500">Каталог</Link>
    <Link to="/account" className="hover:text-amber-500">Аккаунт</Link>
</nav>
</div>
</header>
)
}