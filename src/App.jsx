import { Route, Routes } from "react-router-dom";
import "./scss/main.scss";
import Home from "./pages/home/Home";
import HeaderTop from "./components/header-top/HeaderTop";
import HeaderBottom from "./components/header-bottom/HeaderBottom";
import CompanyPage from "./pages/company/CompanyPage";
import Footer from "./components/footer/Footer";
import AllProducts from "./pages/all-products/AllProducts";
import Payment from "./pages/payment/Payment";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
