import React from "react";

const LabelInput = ({ labelTitle, labelName, labelValue, updateValue }) => {
  // label Input for all form, place in a top level for all component to uses
  return (
    <label className="flex flex-col m-4 w-3/4  text-md text-blue-800 font-semibold">
      {labelTitle}
      <input
        name={labelName}
        value={labelValue}
        onChange={updateValue}
        className="shadow my-2 p-2"
      />
    </label>
  );
};

export default LabelInput;
