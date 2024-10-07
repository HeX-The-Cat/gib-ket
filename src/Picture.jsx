import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Picture = ({ text }) => {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    setImg("searching");
    if (text.trim() === "") {
      const res = await fetch("https://cataas.com/cat");
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    } else {
      const res = await fetch(`https://cataas.com/cat/says/${text.trim()}`);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className=" w-full flex flex-col justify-center items-center mt-5">
      <div className=" mb-4 w-[750px] h-[750px] flex justify-center items-center ">
        {img === "searching" ? (
          <p>Searching...</p>
        ) : (
          <>
            <img className=" max-w-[750px] max-h-[750px] rounded-xl" src={img} />
          </>
        )}
      </div>

      <button className=" p-5 border-solid border-2 rounded-lg font-bold text-xl text-slate-50" onClick={fetchImage}>
        Gib Another Ket!
      </button>
    </div>
  );
};

export default Picture;

Picture.propTypes = {
  text: PropTypes.string,
};
