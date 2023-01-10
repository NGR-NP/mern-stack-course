import { Link } from "react-router-dom";
import Brands from "../sections/brands/Brands";
import Hero from "../sections/hero/Hero";
import Products from "../sections/Products/Products";
const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Products />
      <div>
        <Link to='/admin'>admin</Link>
        <Link to='/profile'>profile</Link>
      </div>
    </>
  );
};

export default Home;
