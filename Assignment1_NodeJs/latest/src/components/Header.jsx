import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">MyLogo</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
      </nav>
    </header>
  );
}

export default Header;
