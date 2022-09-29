import "./Votes.css";

const Votes = () => {
  return (
    <div className="Votes">
      <h1>Vote Here</h1>
      <div className="h-list">
        <button>Chocolate</button>
        <button>Strawberry</button>
        <button>Vanilla</button>
      </div>
      <div className="graph">
        <p>Chocolate:</p>
        <div className="graph-row">_</div>
        <p>Strawberry:</p>
        <div className="graph-row">_</div>
        <p>Vanilla:</p>
        <div className="graph-row">_</div>
        {/* <div></div> 
        div with a background color and dependent width*/}
      </div>
    </div>
  );
};

export default Votes;
