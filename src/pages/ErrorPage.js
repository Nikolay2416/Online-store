import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <p>Страница не найдена. Вернитесь на <Link to="/">главную</Link> страницу!</p>
  )
}

export default ErrorPage;