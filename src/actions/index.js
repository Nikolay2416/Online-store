
 // Shop запрос
export const shopFetched = (fetch) => (dispatch) => {
  dispatch('PRODUCT_FETCHING');
  fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(res => dispatch(productsShopFetched(res)))
      .catch(() => dispatch(productsShopFetchingError()))
}

 // Filter запрос
export const filterFetched = (fetch) => (dispatch) => {
  dispatch('FILTERSHOP_FETCHING');
  fetch('https://fakestoreapi.com/products/categories')
      .then(res=>res.json())
      .then(res => dispatch(filterShopFetched(res)))
      .catch(() => dispatch(filterShopFetchingError()))
}

// Товары

export const productsShopFetching = () => {
  return {
      type: 'PRODUCTSHOP_FETCHING'
  }
}

export const productsShopFetched = (products) => {
  return {
      type: 'PRODUCTSHOP_FETCHED',
      payload: products
  }
}

export const productsShopFetchingError = () => {
  return {
      type: 'PRODUCTSHOP_FETCHING_ERROR'
  }
}

// Фильтры 

export const filterShopFetching = () => {
  return {
      type: 'FILTERSHOP_FETCHING'
  }
}

export const filterShopFetched = (products) => {
  return {
      type: 'FILTERSHOP_FETCHED',
      payload: products
  }
}

export const filterShopFetchingError = () => {
  return {
      type: 'FILTERSHOP_FETCHING_ERROR'
  }
}

export const activeFilterChanged = (filter) => {
  return {
      type: 'ACTIVE_FILTER_CHANGED',
      payload: filter
  }
}

export const setCurrentPage = (CurrentPage) => {
  return {
      type: 'CURRENTPAGE',
      payload: CurrentPage
  }
}