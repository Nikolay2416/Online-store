import { Outlet } from "react-router-dom";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";

import "./layout.scss"

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout_menu">
        <Menu/>
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