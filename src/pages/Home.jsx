import CustomToast from "../components/Tost/CustomToast";
import Brands from "../sections/brands/Brands";
import Hero from "../sections/hero/Hero";
import Products from "../sections/Products/Products";
import { selectCurrentUsername } from "../new/auth/authSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Home = () => {
  const username = useSelector(selectCurrentUsername);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (username) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } else {
      setShowToast(false);
    }
  }, [username]);
  const userGreeting = (
    <CustomToast
      bgcolor={"5eda2fcf"}
      toastmessage={`Welcome Back ${username}`}
    />
  );

  return (
    <>
      {showToast ? userGreeting : <></>}
      <Hero />
      <Brands />
      <Products />
    </>
  );
};

export default Home;
