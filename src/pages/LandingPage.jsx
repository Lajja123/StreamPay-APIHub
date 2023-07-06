import React from "react";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.mp4";
import "../styles/main.scss";

function LandingPage() {
  return (
    <div className="main-div">
      <Navbar />
      <div className="d-hero">
        <video
          autoPlay
          loop
          muted
          className="p-middle-video"
          style={{ width: "100%" }}
        >
          <source src={hero} type="video/mp4" />
        </video>
      </div>
      <div className="home-left-section">
        <h1 className="home-title">Stream money every second.</h1>

        <p className="home-desc">
          Superfluid is a revolutionary asset streaming protocol that brings
          subscriptions, salaries, vesting, and rewards to DAOs and
          crypto-native businesses worldwide.
        </p>
        <button className="home-btn">Get started</button>
      </div>
    </div>
  );
}

export default LandingPage;
