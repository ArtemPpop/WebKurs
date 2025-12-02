export default function Footer() {
  return (
    <footer className="border-t bg-[#141414] mt-12" id="about">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600">
        <div className="mb-6 ">
            <div className="flex items-center">
                 <h1 className="text-lg font-bold text-amber-400 mb-4 align-middle">
                    Златоустовские ножи интернет-магазин "ЗЛАТМАКС"
                 </h1>
            </div>  
          
          <p className="mb-4 text-white">
            Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого качества
            из города оружейников - Златоуста. Златоустовские ножи известны и популярны 
            среди потребителей как на российском рынке, так и за рубежом: ножи охотничьи,
            хозяйственные, туристические, рыбацкие, складные и метательные. Нож Златоуста
            - это идеальный друг и товарищ в повседневной жизни и в экстремальных ситуациях.
            На многую продукцию распространяется гарантия до 10 лет - это один из главных
            показателей качества. Для Вас на нашем сайте "ЗЛАТМАКС" предложен огромный ассортимент
            Златоустовских ножей. Наши менеджеры
            помогут определиться и подобрать самый лучший Златоустовский нож, ориентируясь на Ваши пожелания.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6 text-white">
          <div>
            <h3 className="font-semibold ">ИНФОРМАЦИЯ</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" >Златоустовские ножи в Москве и Московской области</a>
              <a href="#" >Ножевые стали</a>
              <a href="#" >О нас</a>
              <a href="#" >Условия оплаты и доставки</a>
              <a href="#" >Политика конфиденциальности</a>
            </div>
          </div>

          <div className="text-white">
            <h3 className="font-semibold  mb-3">СЛУЖБА ПОДДЕРЖКИ</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="">Контактная информация</a>
              <a href="#" className="">Возврат товара</a>
              <a href="#" >Карта сайта</a>
            </div>
          </div>

          <div className="text-white">
            <h3 className="font-semibold ">ДОПОЛНИТЕЛЬНО</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="">Подарочные сертификаты</a>
              <a href="#" className="">Партнеры</a>
              <a href="#" className="">Товары со скидкой</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">ЛИЧНЫЙ КАБИНЕТ</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" >Личный кабинет</a>
              <a href="#" className="">История заказов</a>
              <a href="#" className="">Мои закладки</a>
              <a href="#" className="">Рассылка новостей</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t pt-6 text-white">
          <div>
            <h3 className="font-semibold ">КОНТАКТЫ</h3>
            <div className="space-y-2">
              <div>8 800 777-49-87</div>
              <div>Пн-Пт 7:00 - 16:00 (МСК)</div>
              <div>Златоуст, ул. Шевченко, 2, офис 409</div>
              <div>info@zlatmax.ru</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold ">ПОЛЕЗНЫЕ ССЫЛКИ</h3>
            <a href="#" >Способы оплаты и доставки</a>
          </div>

          <div>
            <h3 className="font-semibold ">НАША ГАРАНТИЯ</h3>
            <p>Не довольны своей покупкой? Вы можете вернуть ее в течение 30 дней с даты получения, согласно нашим правилам</p>
          </div>

          <div>
            <h3 className="font-semibold ">НОВОСТНАЯ РАССЫЛКА</h3>
            <div className="space-y-2">
              <p>Подпишитесь прямо сейчас!</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 flex-grow"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition-colors">
                  Подписаться
                </button>
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="privacy" className="mr-2" />
                <label htmlFor="privacy" className="text-xs">
                  Я прочитал Политику конфиденциальности и согласился с условиями
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-6 pt-4 text-center">
          <div className="mb-2">
            © {new Date().getFullYear()} Zlatmax. Все права защищены.
          </div>
          <p className="text-xs text-gray-500">
            Для материала, размещенного на сайте, может отображаться информация публичных оферт, 
            входящих в электронную систему для выполнения заказа.
          </p>
        </div>
      </div>
    </footer>
  )
}