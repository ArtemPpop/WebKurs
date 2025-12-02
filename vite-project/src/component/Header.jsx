import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'
export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-40">
      {/* Верхий нав */}
        <div className="bg-gray-100 text-gray-600 text-sm">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
    
                <div className='flex gap-6'>
      
                    <a href="#about" className="hover:text-amber-600">О нас</a>
                    <a href="#about" className="hover:text-amber-600">Оплата и доставка</a>
                    <a href="#about" className="hover:text-amber-600">Новости</a>
                    <a href="#about" className="hover:text-amber-600">Контакты</a>
                </div>

                <div className="flex gap-6">
                    <Link to="/account" className="hover:text-amber-600">Аккаунт</Link>
                </div>

            </div>
        </div>

      {/* 🔹 Основной блок*/}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* логотип */}
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="" />
        </Link>
        <search type="поиск" />

      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 ">
     <nav className="flex gap-6 text-sm items-center">
  {/*  подменю  аталог */}
  <div className="relative group">
      Каталог
     {/* Выпадающее меню  */}
    <div className="absolute left-0 top-full mt-1 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
      <Link to="/catalog/knives" className="block px-4 py-2 hover:bg-gray-100">Клинковое оружие</Link>
      <Link to="/catalog/souvenirs" className="block px-4 py-2 hover:bg-gray-100">Сувенирные изделия</Link>
      <Link to="/catalog/flashlights" className="block px-4 py-2 hover:bg-gray-100">Фонари ARMYTEK</Link>
      <Link to="/catalog/accessories" className="block px-4 py-2 hover:bg-gray-100">Сопутствующие товары</Link>
    </div>
  </div>

  {/* Остальные пункты меню без подменю */}
  <Link to="/catalog/knives" className="hover:text-amber-600">Клинковое оружие</Link>
  <Link to="/catalog/souvenirs" className="hover:text-amber-600">Сувенирные изделия</Link>
  <Link to="/catalog/flashlights" className="hover:text-amber-600">Фонари ARMYTEK</Link>
  <Link to="/catalog/accessories" className="hover:text-amber-600">Сопутствующие товары</Link>
</nav>
      </div>
    </header>
  );
}