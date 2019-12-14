const INITIAL_STATE = {
    data: []
  }

const products = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
      case 'ADD_PRODUCT':
        return { ...state, data: [...state.data, action.product] };
      case 'FETCH_PRODUCTS':
        return { ...state, data: action.data };
      default:
        return state;
    }
  };

export default products;