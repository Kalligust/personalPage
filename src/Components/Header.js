import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="page-title">
        <h1>Page The Page</h1>
      </div>
      <nav>
        <ul>
          <li className="activity">Activity 1</li>
          <li className="activity">Activity 2</li>
          <li className="activity">Activity 3</li>
          <li className="activity">Activity 4</li>
          <li className="activity">Activity 5</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
