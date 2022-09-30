import React, { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [fontSize, setFontSize] = useState(32);
  const [darkMode, setDarkMode] = useState(false);
  const [flavorName, setFlavorName] = useState("Pick One");

  const fontIncrementSize = 8;
  const handleFontUp = () => {
    setFontSize(fontSize + fontIncrementSize);
  };
  const handleFontDown = () => {
    setFontSize((fontSize) => fontSize - fontIncrementSize);
  };

  const handleFlavorSelected = (flavor: string) => {
    // how to grab button text?
    // take arg of 'flavor: str'
    setFlavorName(flavor);
  };

  const adFlavorStyle = {
    fontSize: fontSize,
  };

  // const adThemeStyle = {
  //   backgroundColor: darkMode ? "black" : "white",
  //   color: darkMode ? "white" : "black",
  // };
  // const adThemeClass = darkMode ?

  return (
    <div className="AdDesigner">
      <h1>Ad Designer</h1>
      <div className="ad-display">
        <h3 className="ad-header">Vote For</h3>
        <h1 style={adFlavorStyle}>{flavorName}</h1>
      </div>
      <div className="ad-builder-wrapper">
        <div className="flavors">
          <h2>What to Support</h2>
          <div className="h-list">
            <button
              onClick={() => handleFlavorSelected("chocolate")}
              disabled={flavorName === "chocolate"}
            >
              Chocolate
            </button>
            <button
              onClick={() => handleFlavorSelected("strawberry")}
              disabled={flavorName === "strawberry"}
            >
              Strawberry
            </button>
            <button
              onClick={() => handleFlavorSelected("vanilla")}
              disabled={flavorName === "vanilla"}
            >
              Vanilla
            </button>
          </div>
        </div>
        <div className="themes">
          <h2>Color Theme</h2>
          <div className="h-list">
            <button>Light</button>
            <button>Dark</button>
          </div>
        </div>
        <div className="font-sizer">
          <h2>Font Size</h2>
          <div className="h-list">
            <button
              onClick={handleFontDown}
              disabled={fontSize === fontIncrementSize}
            >
              -
            </button>
            <p>{fontSize}</p>
            <button
              onClick={handleFontUp}
              disabled={fontSize === fontIncrementSize * 10}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDesigner;
