import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const [show, setshow] = useState("/");
  useEffect(() => {
    setshow(location.pathname);
  }, [location]);

  const hamburger = (value) => {
    setNavbar(value);
  };

  return (
    <div className="navbar">
      <div className="nav-links">
        {show === "/" ? "" : <Link to="/">Home</Link>}
        {show === "/about" ? "" : <Link to="/about">About</Link>}
        {show === "/skill" ? "" : <Link to="/skill">Skill</Link>}
        {show === "/contact" ? "" : <Link to="/contact">Contact</Link>}
     
        {show === "/education" ? "" : <Link to="/education">Education</Link>}
       
      </div>


      <div className="mobile-menu">
        <span className="icon" onClick={() => hamburger(true)}>
          <button onClick={() => hamburger(true)}>&#9776;</button>
        </span>

        {navbar && (
          <div id="mysidebar" className="sidebar">
            <span className="closebtn" onClick={() => hamburger(false)}>
              &times;
            </span>
            <ul>
              {show === "/" ? (
                ""
              ) : (
                <li>
                  <Link to="/" onClick={() => hamburger(false)}>
                    Home
                  </Link>
                </li>
              )}
              {show === "/about" ? (
                ""
              ) : (
                <li>
                  <Link to="/about" onClick={() => hamburger(false)}>
                    About
                  </Link>
                </li>
              )}
              {show === "/skill" ? (
                ""
              ) : (
                <li>
                  <Link to="/skill" onClick={() => hamburger(false)}>
                    Skill
                  </Link>
                </li>
              )}
              {show === "/contact" ? (
                ""
              ) : (
                <li>
                  <Link to="/contact" onClick={() => hamburger(false)}>
                    Contact
                  </Link>
                </li>
              )}
             

              
{show === "/education" ? (
                ""
              ) : (
                <li>
                  <Link to="/education" onClick={() => hamburger(false)}>
                    Education
                  </Link>
                </li>
              )}
              
                                                          
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
