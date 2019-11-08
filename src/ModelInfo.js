import React, { useState } from "react";
import TitleForm from "./component/TitleForm";
import LabelInput from "./component/LabelInput";
import LabelTextField from "./component/LabelTextField";

const ModelInfo = () => {
  const [formValues, updateFormValues] = useState({
    baseModelVerion: "",
    reqeustVersion: "",
    modelPurpose: ""
  });

  function updateValues(e) {
    e.preventDefault();
    updateFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="w-full max-w-lg p-4 m-4 bg-white flex flex-col rounded items-center">
      <TitleForm formTitle="Model Info" />
      <LabelInput
        labelName="baseModelVerion"
        labelTitle="Base Model Name"
        labelValue={formValues.baseModelVerion}
        updateValue={updateValues}
      />

      <LabelInput
        labelTitle="CM Model Name"
        labelName="reqeustVersion"
        labelValue={formValues.reqeustVersion}
        updateValue={updateValues}
      />
      <LabelTextField
        labelTitle="Purpose"
        labelName="modelPurpose"
        labelValue={formValues.modelPurpose}
        updateValue={updateValues}
      />
    </div>
  );
};

export default ModelInfo;
