import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./layout.scss"

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout_menu">
        <Header/>
      </div>
      <div className="layout_outlet">
        <Outlet/>
      </div>
      <div className="layout_footer">
        <Footer/>
      </div>
    </div>
  )
}

export default Layout;