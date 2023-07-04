import { ReactComponent as LogoSvg } from "./assets/shared/logo.svg";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <LogoSvg className="logosvg" />
      </div>

      <div className="links">
        <div className="soft-line"></div>
        <a href="/">
          <b style={{ marginRight: ".5rem" }}>00</b>
          HOME
        </a>
        <a href="/">
          <b style={{ marginRight: ".5rem" }}>01</b> DESTINATION
        </a>
        <a href="/">
          <b style={{ marginRight: ".5rem" }}>02</b> CREW
        </a>
        <a href="/">
          <b style={{ marginRight: ".5rem" }}>03</b> TECHNOLOGY
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
