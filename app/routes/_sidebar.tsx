import { NavLink } from "@remix-run/react";

export function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/people">People</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
