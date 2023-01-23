import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CustomToastM from "../components/CustomToastM";
import { ToastContext } from "../context/ToastContext";
const ToastLayout = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const timeout = setTimeout(
      () => setIsSuccess(false) || setIsErr(false),
      4000
    );
    if (isSuccess) {
      return () => clearTimeout(timeout);
    }
    if (isErr) {
      return () => clearTimeout(timeout);
    }
  }, [isSuccess, isErr]);

  const successToast = (successMessage) => {
    setSuccessMsg(successMessage);
    setIsSuccess(true);
  };
  const errToast = (errMessage) => {
    setErrMsg(errMessage);
    setIsErr(true);
  };

  return (
    <ToastContext.Provider value={{ successToast, errToast }}>
      {isSuccess && (
        <CustomToastM
          bgColor={"#5eda2f"}
          isVisible={isSuccess}
          successMsg={successMsg}
        />
      )}
      {isErr && (
        <CustomToastM bgColor={"red"} isVisible={isErr} errMsg={errMsg} />
      )}
      <Outlet />
    </ToastContext.Provider>
  );
};

export default ToastLayout;
