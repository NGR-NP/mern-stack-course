import React from "react";
import "../dropdown/customDropdown.css";
const Options = (props) => {
  return (
    <>
      <div
        className="customDropdown customDropdownIconCont"
        title="Categorites"
      >
        <select style={{paddingLeft: "10px"}} className="customDropdownSelect" defaultValue={"defaultvalue"}>
          <option value="defaultvalue" disabled>
            {props.title}
          </option>
          {/* {allCategoriesData.map((data) => (
            <option key={data.id} value={data.value}>
              {data.name}
            </option>
          ))} */}
          <option>{props.option}</option>
          <option>m</option>
          <option>m</option>
        </select>
        <div className="customDropdownArrow"></div>
      </div>
    </>
  );
};

export default Options;
