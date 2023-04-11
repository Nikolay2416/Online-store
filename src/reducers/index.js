const initialState = {
  productsShop: [],
  productsShopLoadingStatus: 'idle',
  filterShop: [],
  filterShopLoadingStatus: 'idle',
  activeFilter: 'all',
  filterProducts:  ['all', ],
  currentPage: 1,
  todosPerPage: 9,
  productOne: [],
  addedToCart: [],
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {

    // Товары
          
        case 'PRODUCTSHOP_FETCHING':
            return {
                ...state,
                productsShopLoadingStatus: 'loading'
          }
        case 'PRODUCTSHOP_FETCHED':
            return {
                ...state,
                productsShop: action.payload,
                filterShop: state.activeFilter === 'all' ? 
                                    action.payload :
                                    state.productsShop.filter(item => item.category === action.payload),
                productsShopLoadingStatus: 'idle'
          }
        case 'PRODUCTSHOP_FETCHING_ERROR':
            return {
                ...state,
                productsShopLoadingStatus: 'error'
          }

    // Фильтры

        case 'FILTERSHOP_FETCHING':
            return {
                ...state,
                filterShopLoadingStatus: 'loading'
            }
        case 'FILTERSHOP_FETCHED':
            return {
                ...state,
                filterProducts: [...state.filterProducts, ...action.payload],
                filterShopLoadingStatus: 'idle'
            }
        case 'FILTERSHOP_FETCHING_ERROR':
            return {
                ...state,
                filterShopLoadingStatus: 'error'
            }
        case 'ACTIVE_FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload,
                filterShop: action.payload === 'all' ? 
                                state.productsShop :
                                state.productsShop.filter(item => item.category === action.payload)
            }
        
    // currentPage

        case 'CURRENTPAGE':
            return {
                ...state,
                currentPage: action.payload
            }

    // oneProduct 

        case 'ONEPRODUCTSHOP_FETCHED':
            return {
                ...state,
                productOne: action.payload,
            }

    // addedToCart 

        case 'CART_FETCHED':

        const itemIndex = state.addedToCart.findIndex((item) => item.id === action.cart.id);
    
        if (itemIndex === -1) {
            return {
                ...state,
                addedToCart: [...state.addedToCart, { ...action.cart, count: action.quantityOfGoods}],
            }
        } else {
            const copy = state.addedToCart;
            copy[itemIndex].count = action.quantityOfGoods;

            return {
                ...state,
                addedToCart: copy
            }
        }

        case 'CART_DELETED': 
            return {
                ...state,
                addedToCart: state.addedToCart.filter(item => item.id !== action.payload)
            }

        default: return state
  }
}

export default productsReducer;