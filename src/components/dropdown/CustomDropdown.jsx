import CategoryIcon from "@mui/icons-material/Category";
import React from "react";
import "./customDropdown.css";
import Option from "./Option";
const CustomDropdown = ({values, names}) => {
  return (
    <div className="customDropdown customDropdownIconCont">
      <CategoryIcon  fontSize="large" color="action" className="customDropdownIcon" />
      <select>
        <Option values={values} names={names}/>
      </select>
      <div className="customDropdownArrow"></div>
    </div>
  );
};

export default CustomDropdown;
