const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        product
    }
};

const fetchProducts = (data) =>{
    return {
        type: "FETCH_PRODUCTS",
        data
    }
}

export default {
    addProduct,
    fetchProducts
};