import axios from "axios";

const BASEURL = "https://fakestoreapi.com" ;
axios.defaults.baseURL = BASEURL ; 

const getProducts = async() => {
    const response = await axios.get("/products");
    return response.data
}

export { getProducts } ;