import React from "react";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.mp4";
import "../styles/main.scss";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";

function LandingPage() {
  const navigate = useNavigate();

  const dashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="main-div">
      <div className="d-hero"></div>
      <div className="home-left-section">
        <h1 className="home-title">Stream money every second.</h1>

        <p className="home-desc">
          Superfluid is a revolutionary asset streaming protocol that brings
          subscriptions, salaries, vesting, and rewards to DAOs and
          crypto-native businesses worldwide.
        </p>
        <button className="home-btn" onClick={() => dashboard()}>
          Get started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
