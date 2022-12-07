import CategoryIcon from "@mui/icons-material/Category";
import React from "react";
import "./customDropdown.css";
const CustomDropdown = () => {
  return (
    <div className="customDropdown customDropdownIconCont">
      <CategoryIcon  fontSize="large" color="action" className="customDropdownIcon" />
      <select defaultValue={"defaultvalue"}>
        <option value="defaultvalue" disabled>
          Loaction
        </option>
        <option value="ktm">KATHMANDU</option>
        <option value="ith">ITATHAR</option>
        <option value="pokhara">POKHARA</option>
      </select>
      <span className="customDropdownArrow"></span>
    </div>
  );
};

export default CustomDropdown;
