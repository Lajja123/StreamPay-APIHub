import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ConnectKitButton } from "connectkit";
import "../styles/main.scss";
import logo from "../assets/logo.png";
import arrowImg from "../assets/Arrow.png";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

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
          <div style={{ display: "inline-block", position: "relative" }}>
            <ConnectKitButton
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              className="connect-btn"
            />
            <img
              src={arrowImg}
              alt="Arrow"
              style={{
                position: "absolute",
                top: "50%",
                width: "20px",
                backgroundColor: "black",
                borderRadius: "50px",
                right: "10px", // Adjust the value as per your requirement to position the arrow image
                transform: "translateY(-50%)",
              }}
            />
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
