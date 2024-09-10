import axios from "axios";

export async function getAllProducts (){
    return await axios.get('https://dummyjson.com/products');
}

export async function getProductsById(id){
    return await axios.get(`https://dummyjson.com/products/${id}`);
}

export async function getProductsByCategory(id){
    return await axios.get(`https://dummyjson.com/products/category/${id}`);
}

export async function getCategories(){
    return await axios.get('https://dummyjson.com/products/categories');
}

