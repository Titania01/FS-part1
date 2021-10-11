import React, { useState } from "react";
import History from "./History";
import Button from "./Button";

const App = () => {
  const [left, setLeft] = useState(0);
  const [zero, setZero] = useState("restart");
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleZeroClick = () => {
    setAll([]);
    setZero(zero);
    setRight(0);
    setLeft(0);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleZeroClick} text="zero" />
      <Button onClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
