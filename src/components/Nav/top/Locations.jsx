import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { locationData } from "../../../data/data";
import "../../dropdown/customDropdown.css";
const Locations = () => {
  return (
    <div className="customDropdown customDropdownIconCont" title="Location">
      <FmdGoodOutlinedIcon
        fontSize="12px"
        color="action"
        className="customDropdownIcon"
      />
      <select className="customDropdownSelect" defaultValue={"defaultvalue"}>
        <option value="defaultvalue" disabled>
          Loaction
        </option>
        {locationData.map((data) => (
          <option key={data.id} value={data.value}>
            {data.name}
          </option>
        ))}
      </select>
      <div className="customDropdownArrow"></div>
    </div>
  );
};

export default Locations;
