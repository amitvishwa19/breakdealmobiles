import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../src/pages/Home';
import About from "../src/pages/about";
import Product from "../src/pages/product";
import NotFound from "../src/pages/4044Notfound";

const App = () => {
  return (

    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
