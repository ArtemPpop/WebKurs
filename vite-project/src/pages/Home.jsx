import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import ProductCard from '../component/ProductCard.jsx';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';

export default function Home() {
  const [knives, setKnives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { id: 1, title: 'Ножи', img: 'https://picsum.photos/seed/cat1/400/200' },
    { id: 2, title: 'Точилки', img: 'https://picsum.photos/seed/cat2/400/200' },
    { id: 3, title: 'Аксессуары', img: 'https://picsum.photos/seed/cat3/400/200' },
  ]

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
      <main>
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">Загрузка ножей...</div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center text-red-500">Ошибка загрузки: {error}</div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Добро пожаловать в Zlatmax</h1>
          <p className="text-gray-600 mb-8">Крупнейший каталог товаров премиум-класса.</p>
          <Link to="/catalog" className="px-6 py-3 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors">
            Перейти в каталог
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Популярные категории</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map(c => (
            <Link 
              to="/catalog" 
              key={c.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={c.img} 
                  alt={c.title} 
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-4 font-medium text-center group-hover:text-amber-600 transition-colors">
                {c.title}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">Почему выбирают Zlatmax</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">✓</span>
              </div>
              <p className="text-gray-600">Гарантия 100% возврата денежных средств</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🚚</span>
              </div>
              <p className="text-gray-600">Доставка по России, Казахстану и Белоруссии</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">👤</span>
              </div>
              <p className="text-gray-600">Возможность оформление заказа без регистрации.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎁</span>
              </div>
              <p className="text-gray-600">Скидки постоянным покупателям.</p>
            </div>
          </div>
        </div>
      </section>

      {knives.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-8 text-center">Наши ножи</h2>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="offersSwiper"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {knives.map((knife) => (
              <SwiperSlide key={knife.id}>
                <ProductCard product={knife} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </main>
  )
}