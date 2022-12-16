import React from "react";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { allCategoriesData } from "../../../data/data";
import '../../dropdown/customDropdown.css'
const BrowseAllCategories = () => {
  return (
    <>
      <div
        className="customDropdown customDropdownIconCont"
        title="Categorites"
      >
        <AppsOutlinedIcon
          fontSize="12px"
          color="action"
          className="customDropdownIcon"
        />
        <select className="customDropdownSelect" defaultValue={"defaultvalue"}>
          <option value="defaultvalue" disabled>
            All Categories
          </option>
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

export default BrowseAllCategories;
