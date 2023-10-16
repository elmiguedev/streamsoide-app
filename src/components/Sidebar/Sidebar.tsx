import { routes } from "../../router/router"
import { NavLink } from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px" }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {routes.map((item, index) => {
          return (
            <li key={index} className="nav-item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? 'active' : ''}`
                }>
                {item.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}