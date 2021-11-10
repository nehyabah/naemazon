import styled from "styled-components";
import { popularProducts } from "../data";
import { Product } from "./Product";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";





//filters imported from ProductList
export const Products = ({ cat, filters, sort }) => {

    //fetch data as an empty array at the beginning using category as dependency
    const [products, setProducts] = useState([])
    const [filteredproducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/products");
                console.log(res);
            } catch (err) {
                
            }
        };
        getProducts()
    },[cat])
    return (
        <Container>
            {popularProducts.map(item => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

//Styling with Styled-components
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;