import React from "react";
import "../styles/main.scss";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/section1Img.png";
import card1Icon from "../assets/seamless_icon.png";
import card1Img from "../assets/seamless_illustration.png";
import card2Icon from "../assets/realtime_icon.png";
import card2Img from "../assets/realtime_illustration.png";
import card3Icon from "../assets/automatic_icon.png";
import card3Img from "../assets/automatic_illustration.png";

function LandingPage() {
  const navigate = useNavigate();

  const dashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="main-div-landing">
      <div className="landing-flex">
        <div className="home-left-section">
          <h1 className="home-title">Welcome to StreamPay APIHub!</h1>
          <h2 className="home-title2">
            Built on Superfluid and powered by the Celo blockchain.
          </h2>
          <p className=" home-desc">
            Our platform revolutionizes the way API providers and consumers
            connect, transact, and collaborate.
          </p>
          <div style={{ padding: "10px" }}>
            <button className="home-btn" onClick={() => dashboard()}>
              Get started
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img className="hero-right-bg1" src={img1} alt="backgroundimage" />
        </div>
      </div>
      <div className="section2">
        <h1 style={{ color: "white" }}>How Its Works</h1>
        <div style={{ margin: "40px 0px" }}>
          <div className="card-main">
            <img src={card1Img}></img>
            <div style={{ textAlign: "start", width: "60%" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={card1Icon} style={{ width: "30px" }}></img>
                <h2>Seamless</h2>
              </div>
              <h1>Seamless Subscription Management</h1>
              <div>
                API provider can easily register on our marketplace platform and
                create detailed listings for their APIs. Specify functionality,
                pricing tiers, usage limits, and subscription plans to attract
                consumers. API consumers, on the other hand, can effortlessly
                browse the marketplace, discover a wide range of APIs, and
                select a suitable subscription plan that fits their needs.
              </div>
            </div>
          </div>
          {/* 
          <div className="card-main card-img2">
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={card2Icon} style={{ width: "30px" }}></img>
                <h2>Real-Time</h2>
              </div>
              <h1>Real-Time Payment Experince</h1>
              <div>
                With Superfluid integration, our platform establishes a secure
                and continuous payment stream between API consumers and
                providers. Say goodbye to manual payment renewals or
                interruptions. Superfluid ensures a real-time payment flow that
                adapts to usage fluctuations, automatically adjusting payment
                rates accordingly. This results in a smooth and uninterrupted
                payment experience for both parties involved.
              </div>
            </div>
            <img src={card2Img}></img>
          </div>

          <div className="card-main card-img3">
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={card3Icon} style={{ width: "30px" }}></img>
                <h2>Real-Time</h2>
              </div>
              <h1>Real-Time Payment Experince</h1>
              <div>
                With Superfluid integration, our platform establishes a secure
                and continuous payment stream between API consumers and
                providers. Say goodbye to manual payment renewals or
                interruptions. Superfluid ensures a real-time payment flow that
                adapts to usage fluctuations, automatically adjusting payment
                rates accordingly. This results in a smooth and uninterrupted
                payment experience for both parties involved.
              </div>
            </div>
            <img src={card3Img}></img>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
