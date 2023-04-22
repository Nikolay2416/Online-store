import {Link} from "react-router-dom";

import imgHome from "../../assets/imgHome.png"
import "./fullscreen.scss"

const Fullscreen = () => {
  return (
    <div className="fullscreen-body">
      <div className="fullscreen">
        <div className="fullscreen_text">
          <div className="fullscreen_text_h1">
            <h1>Новые поступления в этом сезоне</h1>
          </div>
          <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
          <div className="fullscreen_text_button">
            <Link to="/Shop"><button>Открыть магазин</button></Link>
          </div>
        </div>
        <div className="fullscreen_img">
          <div className="fullscreen_img_budy">
            <img src={imgHome} alt="Фото на главной странице" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fullscreen;