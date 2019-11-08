const { useEffect, useState } = React;
const SubTitle = ({ formTitle }) => {
  return <h2 className="text-center font-bold text-lg m-5 "> {formTitle}</h2>;
};
const ListItem = ({ changeList, removeIt }) => {
  const Thelist = changeList.map((item, k) => {
    return (
      <li
        className="border-b border-solid flex justify-between items-center"
        key={k}
      >
        {item}
        <button
          onClick={() => {
            removeIt(k);
          }}
          className="flex justify-center text-white text-xs p-2 m-2 rounded-full bg-red-700 "
        >
          X
        </button>
      </li>
    );
  });
  return Thelist;
};

const ChangeModel = () => {
  const [itemToChange, setItemToChange] = useState("");
  const [allChange, updateAllChange] = useState(["1", "2"]);

  function removeIt(idlist) {
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
      clearList;
    }
  }

  return (
    <div className="m-2 bg-white flex flex-col rounded">
      <SubTitle formTitle={"Click to add changes"} />
      <label className="flex flex-col m-4  text-md text-blue-800 font-semibold">
        <input
          value={itemToChange}
          onChange={e => setItemToChange(e.target.value)}
          onKeyPress={keyPressed}
          className="shadow my-2 p-2"
        />
      </label>
      <div className="flex justify-around">
        <button
          onClick={addItemChange}
          className="flex justify-center text-white w-10 h-10 rounded-full bg-blue-700 text-2xl"
        >
          {" "}
          +{" "}
        </button>

        <button
          onClick={clearList}
          className="flex justify-center text-white w-10 h-10 rounded-full bg-yellow-700 text-2xl"
        >
          C
        </button>
      </div>
      <ul className=" rounded p-4 m-2">
        <ListItem changeList={allChange} removeIt={removeIt} />
      </ul>
    </div>
  );
};

const Items = () => {
  const [items, updateItems] = useState([
    "lab panel with bead",
    "Change thickness for rear member",
    "add bead"
  ]);

  function removeIt(idlist) {
    let test = items.filter((elm, index) => {
      return index !== idlist;
    });
    updateItems(test);
  }

  return (
    <div>
      {items.map((entry, id) => {
        return (
          <li key={id}>
            <button
              className="bg-red-500 m-5 p-2 rounded hover:bg-red-300"
              onClick={() => removeIt(id)}
            >
              REMOVE
            </button>
            {entry}
          </li>
        );
      })}
    </div>
  );
};

const ItemList = () => {
  return (
    <ul>
      <Items />
    </ul>
  );
};
