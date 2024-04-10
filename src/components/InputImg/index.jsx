import React, { useState } from "react";
import { Input } from "../ui/input";
const InputImg = ({ onChange }) => {
  const [imgUrl, setImgUrl] = useState("");
  const handleGetImage = (e) => {
    const value = e.target.files[0];
    if (value) {
      setImgUrl(URL.createObjectURL(value));
      onChange(URL.createObjectURL(value));
    }
  };
  return (
    <>
      {!imgUrl ? (
        <Input
          type="file"
          onChange={(value) => handleGetImage(value)}
          className="w-full bg-white"
        />
      ) : (
        <div className="w-fit h-fit p-1 border border-dashed rounded-xl border-text">
          <img
            src={imgUrl}
            alt=""
            className="max-w-full max-h-[500px] rounded-xl"
          />
        </div>
      )}
    </>
  );
};

export default InputImg;
