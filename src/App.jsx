import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import About from "./pages/about";
import Product from "./pages/product";
import NotFound from "./pages/4044Notfound";

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
