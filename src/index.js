import React, { useState } from "react";
import ReactDOM from "react-dom";

import ModelInfo from "./ModelInfo";
import ModelChange from "./ModelChange";
import ModelImage from "./ModelImage";
import ModelAnalysis from "./ModelAnalysis";

import StepButton from "./component/StepButton";
import TitleForm from "./component/TitleForm";

import "./styles.css";

const devMode = true;

// since it is progressive may need to add redux, but useContext could work as well.
const ProgressButton = ({ stage, updateStage }) => {
  return (
    <div>
      <StepButton
        compileModelInfo={() => updateStage(stage - 1)}
        stepProcess="BACK"
      />
      <StepButton
        compileModelInfo={() => updateStage(stage + 1)}
        stepProcess="NEXT"
      />
    </div>
  );
};
const FormStage = () => {
  const [formStage, updateFormStage] = useState(0);
  if (formStage === 0) {
    return (
      <>
        <StepButton
          compileModelInfo={() => updateFormStage(formStage + 1)}
          stepProcess="START"
        />
        <TitleForm formTitle="Make Request" />
      </>
    );
  } else if (formStage === 1) {
    return (
      <>
        <ProgressButton stage={formStage} updateStage={updateFormStage} />
        <ModelInfo />
      </>
    );
  } else if (formStage === 2) {
    return (
      <>
        <ProgressButton stage={formStage} updateStage={updateFormStage} />
        <ModelChange />
      </>
    );
  } else if (formStage === 3) {
    return (
      <>
        <ProgressButton stage={formStage} updateStage={updateFormStage} />
        <ModelImage />
      </>
    );
  } else if (formStage === 4) {
    return (
      <>
        <ProgressButton stage={formStage} updateStage={updateFormStage} />
        <ModelAnalysis />
      </>
    );
  } else {
    return (
      <>
        <StepButton
          compileModelInfo={() => updateFormStage(0)}
          stepProcess="REVIEW(start)"
        />
        <TitleForm formTitle="Completed request" />
      </>
    );
  }
};

const Dev = () => {
  const [requestData, updateRequestDate] = useState({
    baseModelName: "",
    requestModelName: "",
    requestModelPurpose: "",
    requestModelChanges: "",
    requestModelImage: "",
    requesModelAnalysis: [""],
    requestModelFileLoc: ""
  });

  function compileFormInputs(e) {
    e.preventDefault();
    updateRequestDate({
      ...requestData,
      [e.target.name]: e.target.value
    });
  }

  if (devMode === true) {
    return (
      <div>
        <ModelInfo />
        <ModelImage />
        <ModelChange />
        <ModelAnalysis />
      </div>
    );
  } else {
    return <FormStage />;
  }
};

function App() {
  // not best way to step through stage, maybe useReducer would work beter

  return (
    <div className="bg-blue-800 flex flex-col justify-center items-center justify-center ">
      <Dev />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
