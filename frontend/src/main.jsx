import { createRoot } from "react-dom/client";
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./landing_page/home/HomePage"
import Signup from "./landing_page/Signup";
import Login from "./landing_page/Login";
import SupportPage from "./landing_page/support/SupportPage";
import ProductPage from "./landing_page/product/ProductPage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import NotFound from "./landing_page/NotFound";
import InvestmentPage from "./landing_page/investment/InvestmentPage";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/support" element={<SupportPage />} ></Route>
          <Route path="/products" element={<ProductPage />} ></Route>
          <Route path="/about" element={<AboutPage />} ></Route>
          <Route path="/pricing" element={<PricingPage />} ></Route>
          <Route path="/investments" element={<InvestmentPage/>}/>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
)