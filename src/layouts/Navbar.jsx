import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/currency">Döviz</Link>
      <Link to="/gold"> Altın</Link>
      <Link to="/emtia"> Emtialar</Link>
      <Link to="/cyrpto"> Kripto Para </Link>
      <Link to="/exchange"> Borsa</Link>
      <Link to="/credit"> Kredi</Link>
      <Link to="/news"> Add News</Link>
    </nav>
  );
}

export default Navbar;
