const Home = () => {
  return (
    <div className="home-back">
      <div className="home">
        <div className="home-text">
          {" "}
          <p>
            <span style={{ fontSize: "1.5rem", display: "block" }}>
              {" "}
              SO YOU WANT TO TRAVEL TO
            </span>{" "}
            <span style={{ fontSize: "10rem", display: "block" }}>SPACE</span>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home-button">
          <p>EXPLORE</p>
          <div className="hover"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
