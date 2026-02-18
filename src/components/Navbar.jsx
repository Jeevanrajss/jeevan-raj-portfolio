import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container" style={{ padding: "30px 0" }}>
      <Link to="/" style={{ fontWeight: "bold", fontSize: "20px" }}>
        Jeevan Raj
      </Link>
    </div>
  );
}