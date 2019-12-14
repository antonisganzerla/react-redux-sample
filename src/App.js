import React from 'react';
import { Provider } from 'react-redux'
import store from './store';
import ProductList from './components/ProductList';
import ProductsAdd from './components/ProductsAdd';

const App = () => {
  return (
    <Provider store={store}>
      <ProductsAdd/>
      <ProductList />
    </Provider>
  );
}

export default App;
