import React from "react";

const Header = ({ titleHeader }) => {
  return (
    <h1 className=" text-4xl p-5  bg-blue-900 w-full text-white font-bold">
      {titleHeader}
    </h1>
  );
};

export default Header;
