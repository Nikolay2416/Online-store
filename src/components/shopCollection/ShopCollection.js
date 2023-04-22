import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { shopFetched, setCurrentPage, requestСart } from '../../actions';
import {Link} from "react-router-dom";
import Spinner from '../spinner/Spinner';

import {Card, Image} from "react-bootstrap";
import "./shopCollection.scss";

// Если мы заходим на вкл магазин и там филтре не all то не загружаються товары. Исправить! (all юзэфект)

const ShopСollection = () => {

  const [quantityOfGoods, setQuantityOfGoods] = useState(1);
  const {filterShop, currentPage, todosPerPage, productsShopLoadingStatus} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    window.scrollTo(0, 350)
    dispatch(setCurrentPage(event.target.id));
  }

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filterShop.slice(indexOfFirstTodo, indexOfLastTodo);

  const numberOfProductsPerPage = currentTodos.length;
  const totalNumberOfProducts = filterShop.length;

  const handleChange = event => {
    setQuantityOfGoods(event.target.value);
  };

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

        let croppedName = title;

        if (croppedName.length > 28) {
          croppedName = croppedName.slice(0, 28);
        } 

        return (
              <div className="shopCollection_products_product " key={id}>
                <Link className="shopCollection_products_product_link" to={`/OneItem/${id}`}>
                  <img  className="" src={image}/>
                  <div className="shopCollection_products_product_body" >
                    <p className="shopCollection_products_product_body_title">{croppedName}</p>
                    <div className="shopCollection_products_product_body_price">{price}$</div>
                  </div>
                </Link>
                <div className="shopCollection_products_product_addingToCart">
                  <input type="number" 
                    value={quantityOfGoods}
                    onChange={handleChange}
                  />
                  <button
                    onClick={() => dispatch(requestСart(id, quantityOfGoods))}
                  >Добавить в корзину</button>
                </div>
              </div>
        )
    })
  }

  const elements = renderProductList(currentTodos);
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filterShop.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <button
        key={number}
        id={number}
        className={number == currentPage ? "shopCollection_buttons-group_button-active" : "shopCollection_buttons-group_button"}
        onClick={handleClick}
      >
        {number}
      </button>
    );
  });

  return (
    <div className="shopCollection">
      <p>
        Показано {numberOfProductsPerPage} из {totalNumberOfProducts} товаров
      </p>
      {/* <div className="m-auto mt-3 flex row justify-content-between"> */}
      <div className="shopCollection_products">
        {elements}
      </div>
      <p>
        Показано {numberOfProductsPerPage} из {totalNumberOfProducts} товаров
      </p>
      <div className="shopCollection_buttons-group" id="page-numbers">
        {renderPageNumbers}
      </div>
    </div>
  )
}

export default ShopСollection;