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

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            "Каталог ножей",
            "Среднеклинковое оружие",
            "Длинноклинковое оружие",
            "Сувенирные ножи",
            "Сопутствующие товары",
            "Мастерская"
          ].map((x, i) => (
            <Link
              key={i}
              to="/catalog"
              className="group bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-28 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/cat${i}/500/300`}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>
              <div className="p-3 text-center font-medium">
                {x}
              </div>
            </Link>
          ))}
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





