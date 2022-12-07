import React from "react";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
const Locations = () => {
  return (
    <div className="customDropdown customDropdownIconCont" title="Location">
      <FmdGoodOutlinedIcon
        fontSize="12px"
        color="action"
        className="customDropdownIcon"
      />
      <select defaultValue={"defaultvalue"}>
        <option value="defaultvalue" disabled>
          Loaction
        </option>
        <option value="ith">ITATHAR</option>
        <option value="pokhara">POKHARA</option>
        <option value="ktm">KATHMANDU</option>
      </select>
      <span className="customDropdownArrow"></span>
    </div>
  );
};

export default Locations;
