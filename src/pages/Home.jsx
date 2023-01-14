import CustomToast from "../components/Tost/CustomToast";
import Brands from "../sections/brands/Brands";
import Hero from "../sections/hero/Hero";
import Products from "../sections/Products/Products";
import { selectCurrentUsername } from "../new/auth/authSlice";
import { useSelector } from "react-redux";
const Home = () => {
  const username = useSelector(selectCurrentUsername);

  const userGreeting = username ? (
    <CustomToast
      bgcolor={"5eda2fcf"}
      toastmessage={`Welcome Back ${username}`}
    />
  ) : (
    <></>
  );

  return (
    <>
      {userGreeting}
      <Hero />
      <Brands />
      <Products />
    </>
  );
};

export default Home;
