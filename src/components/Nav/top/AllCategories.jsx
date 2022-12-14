import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import {allCategoriesData} from "../../../data/data";
import "../dropdown/customDropdown.css";
const AllCategories = () => {
  return (
    <>
      <div
        className="customDropdown customDropdownIconCont"
        title="Categorites"
      >
        <CategoryIcon
          fontSize="12px"
          color="action"
          className="customDropdownIcon"
        />
        <select className="customDropdownSelect" defaultValue={"defaultvalue"}>
          <option value="defaultvalue" disabled>All Categories</option>
          {allCategoriesData.map((data) => (
            <option key={data.id} value={data.value}>
              {data.name}
            </option>
          ))}
        </select>
        <div className="customDropdownArrow"></div>
      </div>
    </>
  );
};

export default AllCategories;
