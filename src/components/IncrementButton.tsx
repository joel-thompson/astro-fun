import { useState } from "react";
import theme from "../theme";

const IncrementButton = () => {
  const [num, setNum] = useState(0);

  const style = {
    color: theme.colors.black,
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
