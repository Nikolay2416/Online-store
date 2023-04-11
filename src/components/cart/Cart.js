import { useDispatch, useSelector} from 'react-redux';
import { cartDeleted } from '../../actions';

import "./cart.scss"

const Cart = () => {

  const {addedToCart} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return (
              <h5 className="text-center mt-5">Нет товаров в корзине</h5>
      )
    }

    return arr.map(({id,image, price, title, count}) => {
      return (
        <div className="product" key={id}>
          <button
          onClick={() => dispatch(cartDeleted(id))}
          >x</button>
          <img src={image} alt={title} />
          <p className="product_title">{title}</p>
          <p className="product_others">{price}</p>
          <div className="product_count">
            <button>-</button>
            <p className="product_others">{count}</p>
            <button>+</button>
            {/* <input type="number" 
                value={count}
                onChange={handleChange}
                /> */}
          </div>
          <p className="product_others text-align">{count * price}</p>
        </div>
      )
    })
  }

  const elements = renderHeroesList(addedToCart);

  return (
    <div>
      <div className="product_characteristics">
        <p className="product_characteristics_product">Товар</p>
        <p className="product_characteristics_others">Цена</p>
        <p className="product_characteristics_others">Количество</p>
        <p className="product_characteristics_others">Всего</p>
      </div>
      {elements}
    </div>
  );
};

export default Cart;