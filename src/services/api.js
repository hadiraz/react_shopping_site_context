import axios from "axios";

const BASEURL = "http://fakestoreapi.com" ;
axios.defaults.baseURL = BASEURL ; 

const getProducts = async() => {
    const response = await axios.get("/products");
    return response.data
}

export { getProducts } ;