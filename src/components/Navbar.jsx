import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ConnectKitButton } from "connectkit";
import "../styles/main.scss";
import logo from "../assets/logo.png";
function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <span className="logo">
            {/* <Link to="/">
              <img src={logo} alt="" />
            </Link> */}
            <h1>StreamPay APIHub</h1>
          </span>
          {/* <ul className={isExpanded === false ? "navmenu" : "navmenu active"}>
            <li className="navitem">
              <span>
                <Link to="/page1" className="navlink">
                  Page1
                </Link>
              </span>
            </li>
            <li className="navitem">
              <span>
                <Link to="/page2" className="navlink">
                  Page2
                </Link>
              </span>
            </li>
            <li className="navitem">
              <span>
                <Link to="/page3" className="navlink">
                  Page3
                </Link>
              </span>
            </li>
          </ul> */}

          <ConnectKitButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
            style={{ backgroundColor: "#1db227" }}
          />

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
