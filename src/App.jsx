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
import Guarantee from "./pages/guarantee/Guarantee";
import Cart from "./pages/cart/Cart";
import Wishes from "./pages/Wishes";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/CreateProduct";
import ManageProduct from "./pages/admin/ManageProduct";
import CreateCategory from "./pages/admin/CreateCategory";
import ManageCategory from "./pages/admin/ManageCategory";
import Auth from './pages/Auth/Auth'


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
        <Route path="/guarantee" element={<Guarantee />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Auth/>}>
        <Route path='/admin' element={<Admin/>}>
            <Route path='create-product' element={<CreateProduct/>}></Route>
            <Route path='manage-product' element={<ManageProduct/>}></Route>
            <Route path='create-category' element={<CreateCategory/>}></Route>
            <Route path='manage-category' element={<ManageCategory/>}></Route>
         </Route>
         </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
