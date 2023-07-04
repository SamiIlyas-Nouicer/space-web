const Moon = () => {
  return (
    <div className="Moon">
      <div className="image"></div>
      <div className="informations">
        <div className="description">
          <h1>MOON</h1>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        </div>
        <div className="soft-line"></div>
        <div className="details">
          <div className="detail">
            <div className="detail-title">AVG. DISTANCE FROM EARTH</div>
            <div className="detail-value">384,400 KM</div>
          </div>
          <div className="detail">
            <div className="detail-title">DIAMETER</div>
            <div className="detail-value">3,474 KM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moon;
