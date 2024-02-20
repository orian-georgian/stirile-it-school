import { Link, useLocation } from "react-router-dom";

export default function NavLink({ path, title }) {
  const { pathname } = useLocation();

  return (
    <Link className={`nav-link ${path === pathname ? "active" : ""}`} to={path}>
      {title}
    </Link>
  );
}
