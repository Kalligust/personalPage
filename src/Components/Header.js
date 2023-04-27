import HeaderNavbar from "./HeaderNavbar";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="page-title">
        <h1>Page The Page</h1>
      </div>
      <HeaderNavbar />
    </header>
  );
};

export default Header;
