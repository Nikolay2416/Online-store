import {Routes, Route} from "react-router-dom";

import Layout from "../../pages/layoutApp/Layout";
import Home from "../../pages/Home";
import AboutBrand from "../../pages/AboutBrand";
import Basket from "../../pages/basket/Basket";
import Shop from "../../pages/shop/Shop";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import Contacts from "../../pages/Contacts";
import OneItem from "../../pages/OneItem";
import MakingAnOrder from "../../pages/makingAnOrder/MakingAnOrder";
import Success from "../../pages/success/Success";

import "./app.scss"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/OneItem/:userId" element={<OneItem/>}/>
          <Route path="/AboutBrand" element={<AboutBrand/>}/>
          <Route path="/Contacts" element={<Contacts/>}/>
          <Route path="/Basket" element={<Basket/>}/>
          <Route path="/MakingAnOrder" element={<MakingAnOrder/>}/>
          <Route path="/Success" element={<Success/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App; 