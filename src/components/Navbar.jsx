import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/main.scss";
import logo from "../assets/logo.png";

import { Connectbuttoncustom } from "./Connectbuttoncustom";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const register = () => {
    navigate("/registration");
  };

  function handleClick() {
    setIsExpanded(!isExpanded);
  }
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link to="/">
            <img
              src={logo}
              alt=""
              style={{ width: "350px", position: "relative", right: "50px" }}
            />
          </Link>

          <div
            style={{
              display: "flex",
              position: "relative",
              alignItems: "center",
            }}
          >
            <ul className="navmenu navmenu active">
              <li className="navitem">
                <span
                  className="navlink"
                  onClick={() => register()}
                  style={{ cursor: "pointer" }}
                >
                  List Your API
                </span>
              </li>
            </ul>
            <Connectbuttoncustom />
          </div>

          <button
            onClick={handleClick}
            className={isExpanded === false ? "hamburger" : "hamburger active"}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
