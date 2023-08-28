import { useEffect, useRef, useState } from "react";

export default function Colors() {
  const imgRef = useRef();
  const [checkedColors, setCheckedColors] = useState("black");

  function changeColor(event) {
    console.log(event.target.value);
    imgRef.current.classList.add("downUpAnimation");
    setCheckedColors(event.target.value);
  }

  useEffect(() => {
    setTimeout(() => {
      console.log("set");
      imgRef.current.classList.remove("downUpAnimation");
    }, 500);
  }, [checkedColors]);
  return (
    <div className="flex flex-col md:flex-row items-center p-3 md:px-10">
      <div className="flex flex-col items-center md:items-start md:w-3/4 space-y-7">
        <h4 className=" text-blue-500">
          This product is <b> only available online!</b>
        </h4>
        <div className="text-2xl md:text-5xl text-center md:text-left">
          <h1>PROTECT YOUR</h1>
          <h1 className="font-semibold">RESPIRATORY SYSTEM</h1>
        </div>
        <p className="text-sm md:text-lg text-center md:text-left">
          PURIFAIR neutralizes harmful pollutants by releasing negatively
          charged ions into the air. They attach themselves to pollutants like
          virus, bacteria, dust and smoke, and remove them from the air, giving
          you a healthier breathing environment to enjoy.
        </p>
        <div className="flex flex-col lg:flex-row-reverse md:items-center gap-2">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Available in 3 colors</p>
            <ColorInputs checks={checkedColors} changeColor={changeColor} />
          </div>
          <button
            className="w-[300px] self-center bg-gradient-to-r from-cyan-500 to-blue-500
      py-2 rounded-full text-white font-semibold text-lg shadow-lg shadow-slate-500
      "
          >
            Get puriferi now
          </button>
        </div>
      </div>
      <div className="self-center mt-4">
        <img
          ref={imgRef}
          className=" w-40 md:w-1/2 mx-auto"
          src={`/${checkedColors}.png`}
          alt=""
        />
      </div>
    </div>
  );
}

function ColorInputs({ checks, changeColor }) {
  const colors = ["black", "pink", "gold"];
  return (
    <div className="radio-input">
      {colors.map((color) => (
        <input
          name="color"
          type="radio"
          class="input"
          value={color}
          checked={checks[color]}
          onChange={(event) => changeColor(event)}
        ></input>
      ))}
    </div>
  );
}
