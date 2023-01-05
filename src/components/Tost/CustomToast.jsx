import styled from "styled-components";
import { Check } from "@mui/icons-material";

const ToastMessage = styled.div`
  position: fixed;
  top: 10px;
  right: 5px;
  padding: 15px;
  background-color: #${(props) => props.bg};
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const CustomToast = ({ toastmessage, bgcolor }) => {
  return (
    <ToastMessage bg={bgcolor}>
      <Check /> {toastmessage}
    </ToastMessage>
  );
};

export default CustomToast;
