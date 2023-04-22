import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from "react-router-dom";
import { oneProduct, requestСart } from '../../actions';

import Spinner from '../spinner/Spinner';
import "./oneProduct.scss"

const OneProduct = () => {

  const [quantityOfGoods, setQuantityOfGoods] = useState(1);
  const {productOne} = useSelector((state) => state.products);
  const {id,image, price, title, description} = productOne;
  const dispatch = useDispatch();
  const { userId } = useParams(); 
  
  const handleChange = event => {
    setQuantityOfGoods(event.target.value);
  };

  useEffect(() => {
    dispatch(oneProduct(userId));
  }, [dispatch]);

  const renderProductList = (object) => {
    if (object.length === 0) {
      return (
              <h5 className="text-center mt-5"><Spinner/></h5>
      )
    }

    return (
        <div className="oneProduct-body_card" key={id}>
          <div className="oneProduct-body_card_img-body" >
            <img className="oneProduct-body_card_img" src={image} alt={title}/>
          </div>
          <div className="oneProduct-body_card_body">
            <h5>{title}</h5>
            <p>{description}</p>
            <p className="">Цена: <span>{price}$</span></p>
            <div>
              <input type="number" 
              value={quantityOfGoods}
              onChange={handleChange}
              />
              <button
                onClick={() => dispatch(requestСart(id, quantityOfGoods))}
              >Добавить в корзину</button>
            </div>

          </div>
        </div>
    )
  }

  const elements = renderProductList(productOne);
  

  return (
      <div className="oneProduct-body">

        <h1 className="oneProduct-body_heading">{title}</h1>
        <p className="oneProduct-body_navigation">
          <Link className="oneProduct-body_navigation_link" to="/">Главная</Link> - <Link className="oneProduct-body_navigation_link" to="/Shop">Магазин</Link> - <span>Свитшот Sweet Shot</span>
        </p>
        {elements}

      </div>
  )
}

export default OneProduct;