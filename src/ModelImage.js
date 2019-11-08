import React, { useState } from "react";
import TitleForm from "./component/TitleForm";

const ImageInput = ({ previewImagefun }) => {
  return (
    <div>
      <input
        className=" m-5 p-5 border-1 "
        onChange={previewImagefun}
        type="file"
        id="image_uploads"
        name="image_uploads"
        accept=".jpg, .jpeg, .png"
        multiple
      />
    </div>
  );
};

const ImageDisplay = ({ previewImg }) => {
  return (
    <img
      className="border border-solid w-3/4 bg-white"
      src={previewImg}
      alt="geometry model that shows change updates"
    />
  );
};

export default function UploadImg() {
  const [imageOf, setImageOf] = useState("");
  const [previewImg, setPreviewImg] = useState("");

  function previewImagefun(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      console.log("getit");
      setImageOf(file);
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className=" w-full max-w-lg p-4 m-4 bg-white flex flex-col rounded items-center ">
      <TitleForm formTitle="Add image" />
      <ImageInput previewImagefun={previewImagefun} />
      <ImageDisplay previewImg={previewImg} />
    </div>
  );
}
