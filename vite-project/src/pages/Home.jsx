import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProductCard from "../component/ProductCard.jsx";


import bibika from "../assets/bibika.svg";
import palec from "../assets/palec.svg";
import skidka from "../assets/skidka.svg";
import galochka from "../assets/galochka.svg";
import backgraund from "../assets/backgraund.jpg";
import kategorii from "../assets/kategorii.png";
import statyi1 from "../assets/statyi1.png";
import statyi2 from "../assets/statyi2.png";
import statyi3 from "../assets/statyi3.png";
import statyi4 from "../assets/statyi4.png";
import fanarik from "../assets/fanarik.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const [knives, setKnives] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/knives")
      .then(res => res.json())
      .then(data => setKnives(data))
      .catch(console.error);
  }, []);


const articles = [
  {
    img: statyi1,
    title: "Все о ножах: как правильно выбрать",
    date: "24.07.2019",
  },
  {
    img: statyi2,
    title: "Как правильно выбрать фонарь",
    date: "24.07.2019",
  },
  {
    img: statyi3,
    title: "Кухонные ножи для хозяек",
    date: "24.07.2019",
  },
  {
    img: statyi4,
    title: "Кухонные ножи для хозяек",
    date: "24.07.2019",
  },
];


  return (
    <main className="w-full">

      {/* HERO BLOCK */}
      <section className="relative bg-black text-white">
        <img
          src={backgraund}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 py-20">

          <h1 className="text-4xl font-bold max-w-xl">Интернет-магазин сертифицированных<br />златоустовских ножей</h1>

          <p className="text-gray-200 max-w-lg mt-4">
            Добро пожаловать в интернет-магазин «ZLATMAX»! В нашем каталоге
            представлены ножи от разных производителей.
          </p>

          <Link
            to="/catalog"
            className="inline-block mt-8 px-8 py-3 bg-amber-500 rounded text-black font-semibold hover:bg-amber-600 transition"
          >
            В каталог
          </Link>

          {/* Иконки преимуществ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <img src={galochka} alt="" />
              </div>
              <p>Гарантия возврата средств</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <img src={bibika} alt="" />
              </div>
              <p>Доставка по СНГ</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <img src={palec} alt="" />
              </div>
              <p>Заказ без регистрации</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <img src={skidka} alt="" />
              </div>
              <p>Скидки постоянным клиентам</p>
            </div>
          </div>
        </div>
      </section>

      {/* КАТЕГОРИИ */}
   <section className="max-w-7xl mx-auto px-4 py-14">
  <h2 className="text-3xl font-semibold mb-8">Каталог ножей</h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* КАТЕГОРИЯ 1 */}
    <Link to="/catalog/knives" className="group bg-white rounded-xl shadow p-6 flex justify-between items-center hover:shadow-lg transition">
      <div>
        <h3 className="text-xl font-semibold mb-3">Каталог ножей</h3>
        <ul className="text-gray-700 space-y-1">
          <li>● Разделочные</li>
          <li>● Туристические</li>
          <li>● Охотничьи</li>
        </ul>
      </div>
      <img src={kategorii} className="h-28 object-contain" />
    </Link>

    {/* КАТЕГОРИЯ 2 */}
    <Link to="/catalog/knives" className="group bg-white rounded-xl shadow p-6 flex justify-between items-center hover:shadow-lg transition">
      <div>
        <h3 className="text-xl font-semibold mb-3">Среднеклинковое оружие</h3>
        <ul className="text-gray-700 space-y-1">
          <li>● Разделочные</li>
          <li>● Туристические</li>
          <li>● Охотничьи</li>
        </ul>
      </div>
      <img src={kategorii} className="h-28 object-contain" />
    </Link>

    {/* КАТЕГОРИЯ 3 */}
    <Link to="/catalog/knives" className="group bg-white rounded-xl shadow p-6 flex justify-between items-center hover:shadow-lg transition">
      <div>
        <h3 className="text-xl font-semibold mb-3">Длинноклинковое оружие</h3>
        <ul className="text-gray-700 space-y-1">
          <li>● Разделочные</li>
          <li>● Туристические</li>
          <li>● Охотничьи</li>
        </ul>
      </div>
      <img src={kategorii} className="h-28 object-contain" />
    </Link>

    {/* КАТЕГОРИЯ 4 */}
    <Link to="/catalog/souvenirs" className="group bg-white rounded-xl shadow p-6 flex justify-between items-center hover:shadow-lg transition">
      <div>
        <h3 className="text-xl font-semibold mb-3">Сувенирные изделия</h3>
        <ul className="text-gray-700 space-y-1">
          <li>● Разделочные</li>
          <li>● Туристические</li>
          <li>● Охотничьи</li>
        </ul>
      </div>
      <img src={kategorii} className="h-28 object-contain" />
    </Link>

    {/* КАТЕГОРИЯ 5 */}
    <Link to="/catalog/accessories" className="group bg-white rounded-xl shadow p-6 flex justify-between items-center hover:shadow-lg transition">
      <div>
        <h3 className="text-xl font-semibold mb-3">Сопутствующие товары</h3>
        <ul className="text-gray-700 space-y-1">
          <li>● Разделочные</li>
          <li>● Туристические</li>
          <li>● Охотничьи</li>
        </ul>
      </div>
      <img src={kategorii} className="h-28 object-contain" />
    </Link>

    {/* КАТЕГОРИЯ 6 */}
    <Link to="/catalog/knives" className="group bg-white rounded-xl shadow p-6 flex justify-between items-center hover:shadow-lg transition">
      <div>
        <h3 className="text-xl font-semibold mb-3">Ножевая мастерская</h3>
        <ul className="text-gray-700 space-y-1">
          <li>● Разделочные</li>
          <li>● Туристические</li>
          <li>● Охотничьи</li>
        </ul>
      </div>
      <img src={kategorii} className="h-28 object-contain" />
    </Link>

  </div>
</section>

      {/* ХИТЫ продаж */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10">Хиты продаж</h2>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            loop
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
          >
            {knives.map(item => (
              <SwiperSlide key={item.id}>
                <ProductCard product={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Фоновый блок + Новинки */}
      <section
        className="py-14 text-white"
        style={{
          backgroundImage: "url('/forest.jpg')",
          backgroundSize: "cover"
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10">Новинки</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {knives.slice(0, 4).map(k => (
              <ProductCard key={k.id} product={k} />
            ))}
          </div>
        </div>
      </section>

      {/* Акции */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10">Акции</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {knives.slice(0, 4).map(k => (
              <ProductCard key={k.id} product={k} />
            ))}
          </div>
        </div>
      </section>
      {/* Наши статьи */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-10">Наши статьи</h2>

   {/* Наши статьи */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-10">Наши статьи</h2>

    {/* Верхние 4 карточки */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {articles.map((a, index) => (
        <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
          <img
            src={a.img}
            alt={a.title}
            className="w-full h-40 object-cover"
          />

          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-2">{a.title}</h3>
            <p className="text-gray-500 text-sm">{a.date}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    {/* Две широкие карточки */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* Карточка 1 */}
      <div className="bg-white shadow rounded-xl p-8 flex justify-between items-center">
        <div className="max-w-xs">
          <h3 className="text-xl font-semibold">Тактические фонари</h3>
          <div className="h-1 w-10 bg-amber-500 mt-2 mb-4"></div>

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition">
            Подробнее
          </button>
        </div>

        <img
          src={fanarik}
          className="h-32 object-contain"
        />
      </div>

      {/* Карточка 2 */}
      <div className="bg-white shadow rounded-xl p-8 flex justify-between items-center">
        <div className="max-w-xs">
          <h3 className="text-xl font-semibold">Палобные мультифонари</h3>
          <div className="h-1 w-10 bg-amber-500 mt-2 mb-4"></div>

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition">
            Подробнее
          </button>
        </div>

        <img
          src={fanarik}
          className="h-32 object-contain"
        />
      </div>

    </div>
  </div>
</section>


      {/* Фонарики */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-semibold mb-10">Фонари</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {knives.slice(0, 4).map(k => (
            <ProductCard key={k.id} product={k} />
          ))}
        </div>
      </section>

    </main>
  );
}





