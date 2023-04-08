import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {filterFetched, activeFilterChanged, setCurrentPage} from '../../actions';

import Spinner from '../spinner/Spinner';
import './shopFilterProducts.scss';


const ShopFilterProducts = () => {

  const dispatch = useDispatch();
  const {filterProducts, filterShopLoadingStatus, activeFilter} = useSelector((state) => state.products);

  useEffect(() => {
    if (filterProducts.length < 5) {
      dispatch(filterFetched(fetch));
    }
  }, [dispatch]);

  if (filterShopLoadingStatus === "loading") {
    return <h5 className="text-center mt-5"><Spinner/></h5>;
  } else if (filterShopLoadingStatus === "error") {
      return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return (
              <h5 className="text-center mt-5"><Spinner/></h5>
      )
    }

    return arr.map((filter) => {
        return (
          <button 
            key={filter} 
            type="button" 
            className={filter === activeFilter ? 'buttons-group_button-active' : 'buttons-group_button'}
            onClick={() => {
              dispatch(activeFilterChanged(filter));
              dispatch(setCurrentPage(1));
            }}
            >
                {filter}
          </button>
        )
    })
  }

  const elements = renderHeroesList(filterProducts);

  return (
    <div className="buttons-group">
      {elements}
    </div>
  )
}

export default ShopFilterProducts;