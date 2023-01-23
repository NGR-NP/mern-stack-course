import { useEffect, useState } from "react";

const useToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  const showToast = (toastMessage) => {
    setMessage(toastMessage);
    
    setIsVisible(true);
  };

  const hideToast = () => {
    setIsVisible(false);
  };
  console.log(message + "hooks");
  console.log(isVisible + "hooks");

  return { isVisible, setIsVisible, setMessage, message, showToast, hideToast };
};

export default useToast;
