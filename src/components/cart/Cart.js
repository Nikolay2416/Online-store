import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { cartDeleted, setCounterPlus, setCounterMinus, setSumProducts } from '../../actions';
import {Link} from "react-router-dom";

import "./cart.scss";
import buttonX from '../../assets/buttonX.png';

const Cart = () => {

  const {addedToCart, sumProducts} = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // const [theTotalAmountOfProductsProduced, setTheTotalAmountOfProductsProduced] = useState(0);
  let theTotalAmountOfProductsProduced = 0;

  useEffect(() => {
      dispatch(setSumProducts(theTotalAmountOfProductsProduced))
  }, [theTotalAmountOfProductsProduced]);

  
  console.log(sumProducts, theTotalAmountOfProductsProduced)

  const renderProductList = (arr) => {
    if (arr.length === 0) {
      return (
              <h5 className="text-center mt-5">Нет товаров в корзине</h5>
      )
    }

    return arr.map(({id,image, price, title, count}) => {

      let countPlus = +count + +1;

      let countMinus;
      if (count > 0) {
        countMinus = +count - +1;
      } else {
        countMinus = 0;
      }

      let priceForTheseProducts = count * price;
      theTotalAmountOfProductsProduced = theTotalAmountOfProductsProduced + priceForTheseProducts;

      // setTheTotalAmountOfProductsProduced(theTotalAmountOfProductsProduced + priceForTheseProducts);

      return (
        <div className="product" key={id}>
          <div className="product_product-data-body">
            <div className="product_product-data">
              <button onClick={() => dispatch(cartDeleted(id, priceForTheseProducts))}>
                <div>
                  <img src={buttonX} alt="buttonX" />
                </div>
              </button>
              <img src={image} alt={title} />
              <p className="product_product-data_title">{title}</p>
            </div>
          </div>
          <p className="product_others">{price}$</p>
          <div className="product_count">
            <button onClick={() => dispatch(setCounterMinus(id, countMinus, priceForTheseProducts))}>-</button>
            <p>{count}</p>
            <button onClick={() => dispatch(setCounterPlus(id, countPlus, priceForTheseProducts))}>+</button>
          </div>
          <p className="product_others text-align">{ count > 0 ? Math.round((priceForTheseProducts) * 100) / 100 : 0}$</p>
        </div>
      )
    })
  }

  const elements = renderProductList(addedToCart);

  return (
    <div>
      <div className="product_characteristics">
        <p className="product_characteristics_product">Товар</p>
        <p className="product_characteristics_others">Цена</p>
        <p className="product_characteristics_others">Количество</p>
        <p className="product_characteristics_others">Всего</p>
      </div>
      {elements}
      
      <button onClick={() => dispatch(setSumProducts(theTotalAmountOfProductsProduced))} >обновить</button>
      <div className="product_result">
        <div className="product_result_amount-body">
          <div className="product_result_amount">
            <p>Итого:</p>
            <p>{Math.round((sumProducts) * 100) / 100}$</p>
          </div>
        </div>
        <Link className="roduct_result_link" to="/MakingAnOrder">
          <button className="product_result_button">
           <p>Оформить заказ</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;