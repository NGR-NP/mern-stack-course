import React from "react";

const Option = ({ values, names }) => {
  return (
    <>
      <select defaultValue={"DIFAULT"}>
        <option value="DIFAULT">{names}</option>
        <option value={values}>{names}</option>
      </select>
    </>
  );
};

export default Option;
