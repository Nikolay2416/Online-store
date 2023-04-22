import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {shopFetched} from '../../actions';
import {Link} from "react-router-dom";

import Spinner from '../spinner/Spinner';
import "./newСollection.scss";

const NewСollection = () => {

  const {productsShop, productsShopLoadingStatus} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    dispatch(shopFetched(fetch));
  }, [dispatch]);

  if (productsShopLoadingStatus === "loading") {
      return <h5 className="text-center mt-5"><Spinner/></h5>;
  } else if (productsShopLoadingStatus === "error") {
      return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }

  const renderProductList = (arr) => {
    if (arr.length === 0) {
      return (
              <h5 className="text-center mt-5"><Spinner/></h5>
      )
    }

    return arr.map(({id,image, price, title}) => {
      if (id <= 3) {
        return (
          <div className="newСollection_products_product " key={id}>
            <Link className="newСollection_products_product_link" to={`/OneItem/${id}`}>
              <img  className="" src={image}/>
              <div>
                <p className="newСollection_products_product_title">{title}</p>
                <div className="newСollection_products_product_price">{price}$</div>
              </div>
            </Link>
          </div>
        )
      }
    })
  }

  const elements = renderProductList(productsShop);

  return (
    <div className="newСollection">
      <h2 className="newСollection_h2">Новая коллекция</h2>
      <div className="newСollection_products">
       {elements}
      </div>
      <div className="newСollection_button-body">
        <Link to="/shop"><button>Открыть магазин</button></Link>
      </div>
    </div>
  )
}

export default NewСollection;