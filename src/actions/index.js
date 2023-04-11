
 // Shop запрос
export const shopFetched = (fetch) => (dispatch) => {
  dispatch('PRODUCT_FETCHING');
  fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(res => dispatch(productsShopFetched(res)))
      .catch(() => dispatch(productsShopFetchingError()))
}

// oneProduct запрос
export const oneProduct = (id) => (dispatch) => {
  dispatch('PRODUCT_FETCHING');
  fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(res => dispatch(oneProductShop(res)))
      .catch(() => dispatch(productsShopFetchingError()))
}

// requestСart запрос
export const requestСart = (id, quantityOfGoods) => (dispatch) => {
  dispatch('PRODUCT_FETCHING');
  fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(res => dispatch(cartFetched(res, quantityOfGoods)))
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

// currentPage

export const setCurrentPage = (CurrentPage) => {
  return {
      type: 'CURRENTPAGE',
      payload: CurrentPage
  }
}

// oneProduct 

export const oneProductShop = (oneProduct) => {
  return {
      type: 'ONEPRODUCTSHOP_FETCHED',
      payload: oneProduct
  }
}

// oneProduct 

export const cartFetched = (cart, quantityOfGoods) => {
  return {
      type: 'CART_FETCHED',
      cart,
      quantityOfGoods,
  }
}

export const cartDeleted = (id) => {
  return {
      type: 'CART_DELETED',
      payload: id
  }
}