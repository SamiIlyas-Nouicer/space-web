import Moon from "./Moon";

const Destination = () => {
  return (
    <div className="destination-back">
      <div className="titles">
        <div className="title">
          <span style={{ color: "grey" }}>01</span> Pick Your Destination
        </div>
        <div className="planets">
          <button className="planet">MOON</button>
          <button className="planet">MARS</button>
          <button className="planet">EUROPA</button>
          <button className="planet">TITAN</button>
        </div>
      </div>
      <Moon></Moon>
    </div>
  );
};

export default Destination;
