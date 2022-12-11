import React from "react";

const Option = ({ values, names }) => {
  return (
    <>
        <option value={values}>{names}</option>
    </>
  );
};

export default Option;
