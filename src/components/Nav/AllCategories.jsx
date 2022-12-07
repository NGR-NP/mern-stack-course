import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import "../dropdown/customDropdown.css";
const AllCategories = () => {
  return (
    <>
      <div className="customDropdown customDropdownIconCont" title="Categorites">
        <CategoryIcon
          fontSize="12px"
          color="action"
          className="customDropdownIcon"
        />
        <select defaultValue={"defaultvalue"}>
          <option value="defaultvalue" disabled>
            All Categories
          </option>
          <option value="mens">Mens</option>
          <option value="womens">Womens</option>
          <option value="accessories">Accessories</option>
        </select>
        <span className="customDropdownArrow"></span>
      </div>
    </>
  );
};

export default AllCategories;
