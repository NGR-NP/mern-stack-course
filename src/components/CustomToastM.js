import styled from "styled-components";
import { Check, Dangerous } from "@mui/icons-material";


const ToastMessage = styled.div`
  position: fixed;
  top: 1rem;
  right: 5px;
  padding: 15px;
  background-color: ${(props) => props.bg || "red"};
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 99999999;
`;
const CustomToastM = ({ bgColor, successMsg, errMsg }) => {
  return (
    <ToastMessage bg={bgColor}>
      {successMsg ? (
        <>
          <Check />
          {successMsg}
        </>
      ) : errMsg ? (
        <>
          <Dangerous />
          {errMsg}
        </>
      ) : (
        <></>
      )}
    </ToastMessage>
  );
};

export default CustomToastM;
