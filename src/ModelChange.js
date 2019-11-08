import React, { useState } from "react";
import TitleForm from "./component/TitleForm";

const AddModelFeatures = ({ change, updateChange, onKeyEnter }) => {
  return (
    <label className="flex flex-col m-4 w-3/4  text-md text-blue-800 font-semibold">
      Model changes:
      <input
        value={change}
        onChange={e => updateChange(e.target.value)}
        onKeyPress={onKeyEnter}
        className="shadow my-2 p-2 "
      />
    </label>
  );
};
const ChangeList = ({ changesall, removedItem }) => {
  return (
    <ul>
      {changesall.map((item, k) => {
        return (
          <li
            className="break-normal border-b p-2 my-2 border-solid flex items-center"
            key={k}
          >
            <RemoveItemButton removeItem={() => removedItem(k)} />
            {item}
          </li>
        );
      })}
    </ul>
  );
};
const AddListButton = ({ addItemChange }) => {
  return (
    <button
      onClick={addItemChange}
      className=" w-1/3  text-white p-2 rounded bg-blue-700"
    >
      {" "}
      ADD
    </button>
  );
};
const ClearListButton = ({ clearItemsChange }) => {
  return (
    <button
      onClick={clearItemsChange}
      className="  w-1/3 text-black px-2 rounded bg-red-200 "
    >
      {" "}
      CLEAR
    </button>
  );
};

const RemoveItemButton = ({ removeItem }) => {
  return (
    <button
      onClick={removeItem}
      className=" text-white px-2 mr-4 rounded bg-red-700 "
    >
      {" "}
      X{" "}
    </button>
  );
};

export default function ModelChange() {
  const [itemToChange, setItemToChange] = useState("");
  const [allChange, updateAllChange] = useState(["1", "2"]);

  function removeIt(idlist) {
    console.log("remove item");
    let test = allChange.filter((elm, index) => {
      return index !== idlist;
    });
    updateAllChange(test);
  }
  function addItemChange() {
    if (itemToChange !== "") {
      updateAllChange([...allChange, itemToChange]);
      setItemToChange("");
    }
  }
  function clearList() {
    updateAllChange([]);
  }
  function keyPressed(e) {
    if (e.key === "Enter") {
      addItemChange(e.target.value);
    }
  }

  return (
    <div className=" w-full max-w-lg m-4 bg-white flex flex-col rounded items-center ">
      <TitleForm formTitle="Model Changes" />

      <div className="flex flex-col items-center w-full">
        <AddModelFeatures
          change={itemToChange}
          updateChange={setItemToChange}
          onKeyEnter={keyPressed}
        />
        <div className="flex flex-row justify-around w-3/4">
          <AddListButton addItemChange={addItemChange} />
          <ClearListButton clearItemsChange={clearList} />
        </div>
      </div>
      <div className="w-full px-5">
        <h2 className="text-center border-b-2 border-gray-600 p-2 mb-2 h-auto">
          Changes To Model
        </h2>
        <ChangeList changesall={allChange} removedItem={removeIt} />
      </div>
    </div>
  );
}
