import { useEffect, useState } from "react";

import axios from "../api/axios";
import LoadingComp from "../components/loading/LoadingComp";
import Product from "../components/products/Product";
import NoResponse from "../components/server/NoResponse";
import FilterProduct from "../components/filter/FilterProduct";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
const Section = styled.section`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  background: linear-gradient(299deg, rgb(142 218 243 / 50%), rgb(254 213 255));
  user-select: none;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 10%);
  border-radius: 8px;
`;
const Container = styled.div`
  max-width: 1557px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  user-select: none;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 10%);
  border-radius: calc(20px + 8px);
`;
const Main = styled.div`
  padding: 20px;
  margin: auto;
  background: #ffffff54;
  border-radius: calc(20px + 8px);
`;

const Title = styled.h3`
  width: fit-content;
  margin: 19px auto 32px;
  text-align: center;
  font-size: 41px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 20px 0px;
  border-radius: 20px;
  font-family: var(--font6);
  background-image: linear-gradient(90deg, rgb(0 178 255), #ff00b0);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding: 5px 118px;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [ifErr, setIfErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const location = useLocation();
  const catg = location.pathname.split("/")[2];

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          catg ? `/products?category=${catg}` : "/products"
        );
        setProducts(res?.data);
        setIsLoading(false);
        setIfErr(false);
        setErrMsg("");
      } catch (err) {
        if (!err?.response) {
          setIsLoading(false);
          setIfErr(true);
          setErrMsg("Server is not responding");
        } else if (err.response?.data) {
          setIsLoading(false);
          setIfErr(true);
          setErrMsg(err.response?.data?.message);
        } else {
          setErrMsg("something went wrong");
        }
      }
    };
    getProducts();
  }, [catg]);
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    products &&
      setFilteredProduct(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, catg, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProduct((prev) =>
        [...prev].sort((t, z) => t.createdAt - z.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProduct((prev) => [...prev].sort((t, z) => t.price - z.price));
    } else {
      setFilteredProduct((prev) => [...prev].sort((t, z) => z.price - t.price));
    }
  }, [sort]);

  return (
    <Section>
      <Main>
        {isLoading ? (
          <Container>
            <LoadingComp />
          </Container>
        ) : ifErr ? (
          <NoResponse message={errMsg} />
        ) : (
          <>
            <Title>{catg || "clothes"}</Title>
            <FilterProduct
              filters={filters}
              setSort={setSort}
              catg={catg}
              handleFilter={handleFilter}
            />
            <Container>
              {products ? (
                filteredProduct.map((product) => (
                  <Product product={product} key={product?._id} />
                ))
              ) : products.length ? (
                products.map((product) => (
                  <Product product={product} key={product?._id} />
                ))
              ) : (
                <p style={{ margin: "auto" }}>product not avalible</p>
              )}
            </Container>
          </>
        )}
      </Main>
    </Section>
  );
};

export default Products;