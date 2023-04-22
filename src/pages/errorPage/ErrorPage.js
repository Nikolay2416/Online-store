import {Link} from "react-router-dom";

import "./errorPage.scss"

const ErrorPage = () => {
  return (
    <div className="errorPage">
        <div className="errorPage_text">
          <p>Страница не найдена. Вернитесь на главную страницу!</p>
        </div>
        <div>
          <Link className="errorPage_link" to="/">
           Перейти на главную!
          </Link> 
        </div>
    </div>
  )
}

export default ErrorPage;