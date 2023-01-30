import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CustomToastM from "../../components/CustomToastM";
import {
  hideToastMessage,
  selectCurrentMessage,
  selectCurrentType,
  selectCurrentVisible,
} from "../custonToast/toastSlice";

const Layout = () => {
  const visible = useSelector(selectCurrentVisible);
  const message = useSelector(selectCurrentMessage);
  const type = useSelector(selectCurrentType);
  const dispatch = useDispatch();
  useEffect(() => {
    if (visible) {
      const timeoutId = setTimeout(() => {
        dispatch(hideToastMessage());
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [visible, dispatch]);

  return (
    <>
      {visible && <CustomToastM message={message} type={type} />}
      <Outlet />;
    </>
  );
};

export default Layout;

// const timeoutId = useRef(null);

// useEffect(() => {
//   if (visible) {
//     if (timeoutId.current) {
//       clearTimeout(timeoutId.current);
//     }

//     timeoutId.current = setTimeout(() => {
//       dispatch(hideToastMessage());
//       timeoutId.current = null;
//     }, 3000);

//     return () => {
//       if (timeoutId.current) {
//         clearTimeout(timeoutId.current);
//       }
//     };
//   }
// }, [visible, dispatch]);
