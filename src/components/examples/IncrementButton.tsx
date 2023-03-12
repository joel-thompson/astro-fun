import { useState } from "react";

const IncrementButton = () => {
  const [num, setNum] = useState(0);

  const style = {
    color: "red",
  };

  return (
    <>
      <button
        style={style}
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Clicked: {num}
      </button>
      <button
        style={style}
        onClick={() => {
          setNum(0);
        }}
      >
        Reset
      </button>
    </>
  );
};

export default IncrementButton;
