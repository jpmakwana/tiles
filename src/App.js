import "./App.css";
import { Route, Routes } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Home from "./page/Home";
import Auth from "./Auth/Auth";
import ForgetPassword from "./Auth/ForgetPassword";
import "react-toastify/dist/ReactToastify.css";
import SellerPosts from "./page/SellerPosts";
import { ToastContainer } from "react-toastify";
import Directory from "./page/Directory";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Companies } from "./page/Companies";
import { CompaniesDetails } from "./page/CompaniesDetails";
import Traders from "./page/Trader";
import { TradersDetails } from "./page/TradersDetails";
import SellerPostCreate from "./page/SellerPostCreate";
import BuyerPostCreate from "./page/BuyerPostCreate";
// import { NotFound } from "./page/NotFound";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Directory" element={<Directory />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/forgot-password" element={<ForgetPassword />}></Route>
        <Route path="/seller-posts" element={<SellerPosts />}></Route>
        <Route
          path="/directory/:directoryname/:directoryId"
          element={<Companies />}
        ></Route>
        <Route path="/traders" element={<Traders />}></Route>
        <Route
          path="/traders/:companiesname/:companiesId"
          element={<TradersDetails />}
        ></Route>
        <Route
          path="/directory/:directoryname/:directoryId/:companiesname/:companiesId"
          element={<CompaniesDetails />}
        ></Route>
        <Route
          path="/seller-post-create"
          element={<SellerPostCreate />}
        ></Route>
        <Route path="/buyer-post-create" element={<BuyerPostCreate />}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* "homepage": "https://tri-techno.com/tiles/", */}
      </Routes>
    </>
  );
}

export default App;
