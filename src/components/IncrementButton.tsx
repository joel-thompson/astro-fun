import { useState } from "react";

const IncrementButton = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Clicked: {num}
      </button>
      <button
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
