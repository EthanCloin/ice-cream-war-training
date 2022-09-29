import "./AdDesigner.css";

const AdDesigner = () => {
  return (
    <div className="AdDesigner">
      <h1>Ad Designer</h1>
      <div className="ad-display-wrapper">
        <div className="ad-display">
          <h3>Vote For</h3>
          <h1>Chocolate</h1>
        </div>
      </div>
      <div className="ad-builder-wrapper">
        <div className="flavors">
          <h2>What to Support</h2>
          <div className="h-list">
            <button>Chocolate</button>
            <button>Strawberry</button>
            <button>Vanilla</button>
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
            <button>-</button>
            <p>42</p>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDesigner;
