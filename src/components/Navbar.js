import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <NavLink
                to="/"
                className="navbar-brand"
              > Cocktail App
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* <ul className="navbar-nav">
            <li className="nav-item px-3">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "link-active" : "")}
              > page 1
              </NavLink>
            </li>  

            <li className="nav-item px-3">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "link-active" : "")}
              > page 2
              </NavLink>
            </li>             
            
          </ul> */}
        </div>
      </div>
    </nav>
);
};

export default Navbar
