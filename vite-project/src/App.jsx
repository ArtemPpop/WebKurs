import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import Product from './pages/Product.jsx'
import Account from './pages/Account.jsx'


export default function App() {
return (
<Router>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/catalog" element={<Catalog />} />
<Route path="/product/:id" element={<Product />} />
<Route path="/account" element={<Account />} />
</Routes>
<Footer />
</Router>
)
}