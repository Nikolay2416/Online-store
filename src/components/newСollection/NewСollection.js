import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {shopFetched} from '../../actions';

import {Card, Image} from "react-bootstrap";
import Spinner from '../spinner/Spinner';

const NewСollection = () => {

  const {productsShop, productsShopLoadingStatus} = useSelector((state) => state.products);
  const dispatch = useDispatch();

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
          <Card className="mb-3" style={{width: 320}} key={id}>
            <Image width={280} height={390} className="m-3" src={image}/>
            <Card.Body className="m-auto">
              <Card.Title>{title}</Card.Title>
              <div className="price">{price}</div>
            </Card.Body>
          </Card>
        )
      }
    })
  }

  const elements = renderProductList(productsShop);

  return (
    <div style={{width: 1110}} className="m-auto">
      <h2 className="mt-3 mb-3">Новая коллекция</h2>
       <div className="m-auto mt-3 flex row justify-content-between">
       {elements}
      </div>
    </div>
  )
}

export default NewСollection;