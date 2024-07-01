import { Route, Routes } from "react-router-dom";
import "./scss/main.scss";
import Home from "./pages/home/Home";
import HeaderTop from "./components/header-top/HeaderTop";
import HeaderBottom from "./components/header-bottom/HeaderBottom";
import CompanyPage from "./pages/company/CompanyPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<CompanyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
