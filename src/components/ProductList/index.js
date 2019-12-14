import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../store/actions';
import api from '../../services/api';

const ProductsList = (props) => {

    const products = useSelector(state => state.products.data);
    const dispatch = useDispatch();



     function getData() {
        return async dispatch => {
            const response = await api.get("/products")
            dispatch(allActions.productActions.fetchProducts(response.data))
        };
    }

    useEffect(() => {
        dispatch(getData());
    }, []);



    return (
        <>
            <h3>Lista de Produtos</h3>
            <ul>
                {products.map(product => 
                    <li key={product.id}>{product.title} - {product.description} - {product.price}</li>
                )}
            </ul>
        </>
    );
}

export default ProductsList;


/*
//<button type="button" onClick={props.addProduct(dispatch, productName)}></button>
    */