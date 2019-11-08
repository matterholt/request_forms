import React from "react";

const LabelTextField = ({ labelTitle, labelName, labelValue, updateValue }) => {
  // label Input for all form, place in a top level for all component to uses
  return (
    <label className="flex flex-col m-4 w-3/4 text-md text-blue-800 font-semibold">
      {labelTitle}
      <textarea
        name={labelName}
        value={labelValue}
        onChange={updateValue}
        className="shadow my-2 p-2"
      />
    </label>
  );
};

export default LabelTextField;
