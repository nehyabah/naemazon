import styled from "styled-components";
import { popularProducts } from "../data";
import { Product } from "./Product";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

//filters imported from ProductList
export const Products = ({ cat, filters, sort }) => {
  //fetch data as an empty array at the beginning using category as dependency
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5001/api/products?category=${cat}`
            : "http://localhost:5001/api/products"
        );
        console.log(cat);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredproducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

//Styling with Styled-components
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export default Products;
