import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../store/actions';
import './style.css';
import api from '../../services/api'

const ProductsAdd = (props) => {

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const dispatch = useDispatch();

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const product = {
            title: productName,
            description: productDescription,
            price: parseInt(productPrice),
            categoryId: 2
        }
        const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        const response = await api.post(
            "/products",
            JSON.stringify(product), {
            headers: headers
        });
        console.log(response.data);
        dispatch(allActions.productActions.addProduct(response.data));
        cleanFields();
    }

    const cleanFields = () => {
        setProductName("");
        setProductDescription("");
        setProductPrice("");
    }

    return (
        <div>
            <h3>Cadastro Produto</h3>
            <form onSubmit={(e) => handleAddProduct(e)}>
                <label>
                    Nome:
                    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                </label>
                <br />
                <label>
                    Descrição:
                    <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
                </label>
                <br />
                <label>
                    Preço:
                    <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
                </label>
                <br />
                <button type="submit">
                    Adicionar produto
                </button>
            </form>
        </div>
    );
}

export default ProductsAdd;