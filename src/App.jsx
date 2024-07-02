import { Route, Routes } from "react-router-dom";
import "./scss/main.scss";
import Home from "./pages/home/Home";
import HeaderTop from "./components/header-top/HeaderTop";
import HeaderBottom from "./components/header-bottom/HeaderBottom";
import CompanyPage from "./pages/company/CompanyPage";
import Footer from "./components/footer/Footer";
import AllProducts from "./pages/all-products/AllProducts";
import Payment from "./pages/payment/Payment";
import Return from "./pages/return/Return";
import BlogPage from "./pages/blog-page/BlogPage";
import NotFound from "./pages/not-found/NotFound";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/return" element={<Return />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
