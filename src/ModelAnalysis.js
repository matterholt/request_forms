import React, { useState } from "react";
import TitleForm from "./component/TitleForm";
import LabelInput from "./component/LabelInput";

const AnalysisCheckbox = ({ analysisJobs }) => {
  // temp extracted to code pen for functionaliy and designish
  let test = analysisJobs.map((value, id) => {
    return (
      <li key={id}>
        <label className="flex ">
          <input type="checkbox" className="shadow m-2" />
          {value}
        </label>
      </li>
    );
  });
  return test;
};

const FileLocation = () => {
  const [pathToFile, updatepathToFile] = useState({
    fileLoc: ""
  });

  function updateValues(e) {
    e.preventDefault();
    updatepathToFile({
      ...pathToFile,
      [e.target.name]: e.target.value
    });
  }

  return (
    <LabelInput
      labelTitle="File Location"
      labelName="fileLoc"
      labelValue={pathToFile.fileLoc}
      updateValue={updateValues}
    />
  );
};

export default function ModalAnalysis() {
  const analysisTypes = ["Stiffness", "Static", "Dura", "NHV", "Other"];
  return (
    <div className=" w-full max-w-lg p-4 m-4 bg-white flex flex-col rounded items-center shadow-lg   ">
      <TitleForm formTitle="Analysis Performed" />
      <FileLocation />
      <div>
        <h2 className="text-center border-b-2 border-gray-600 p-2 mb-2 h-auto">
          Analysis Performed on Model
        </h2>
        <ul className=" bg-white flex items-center ">
          <AnalysisCheckbox analysisJobs={analysisTypes} />
        </ul>
      </div>
    </div>
  );
}
