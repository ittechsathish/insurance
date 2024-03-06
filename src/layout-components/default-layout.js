import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="app-container">
      {/* We can have top level links here */}
      {/* <ul>
        <li>
          <Link to="/">Calculate Monthly Premium</Link>
        </li>
      </ul> */}

      <Outlet />
    </div>
  );
}
