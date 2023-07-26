import React from "react";
import "../styles/main.scss";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import img1 from "../assets/section1Img.png";
import card1Icon from "../assets/seamless_icon.png";
import card1Img from "../assets/seamless_illustration.png";
import card2Icon from "../assets/realtime_icon.png";
import card2Img from "../assets/realtime_illustration.png";
import card3Icon from "../assets/automatic_icon.png";
import card3Img from "../assets/automatic_illustration.png";
import card4Icon from "../assets/effortless_icon.png";
import card4Img from "../assets/effortless_illustration.png";
import card5Icon from "../assets/flexible_icon.png";
import card5Img from "../assets/flexible_illustration.png";
import card6Icon from "../assets/enhanced_icon.png";
import card6Img from "../assets/enhanced_illustration.png";
import { GetStarted } from "../components/GetStarted";
import Listapi from "../DummyData/ListApi.json";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
const contractAddress = "0x09905C1E44D4FC4DA1c366C92D189E5878D56B71";

function LandingPage() {
  const { address, isConnected, isDisconnected } = useAccount();
  const walletAddress = address;
  console.log(walletAddress);
  const navigate = useNavigate();

  const handleDashboardNavigation = () => {
    if (isConnected) {
      navigate("/dashboard");
    }
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
            {/* Conditionally render the button or redirect */}
            {isDisconnected ? (
              <GetStarted />
            ) : (
              <button
                className="home-btn"
                onClick={() => handleDashboardNavigation()}
              >
                Get started
              </button>
            )}
          </div>
        </div>
        <div className="hero-right">
          <img className="hero-right-bg1" src={img1} alt="backgroundimage" />
        </div>
        <div className="green-blob"></div>
        <div className="blue-blob"></div>
      </div>
      <div className="section2">
        <div
          style={{
            color: "white",
            fontSize: "1.5rem",
            width: "50%",
            margin: "0 auto",
          }}
        >
          {" "}
          <h1>How Its Works</h1>
        </div>

        <div style={{ margin: "40px 0px" }}>
          <div className="card-main ">
            <img src={card1Img}></img>
            <div style={{ textAlign: "start", width: "50%", color: "white" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={card1Icon}
                  style={{ width: "30px", margin: "0" }}
                ></img>
                <h2 style={{ padding: "0px 10px" }}>Seamless</h2>
              </div>
              <h1 style={{ marginTop: "0", marginBottom: "0" }}>
                Seamless Subscription Management
              </h1>
              <div
                style={{
                  padding: "10px 0px",
                  letterSpacing: "0.2px",
                  fontWeight: "250",
                  textAlign: "justify",
                }}
              >
                API provider can easily register on our marketplace platform and
                create detailed listings for their APIs. Specify functionality,
                pricing tiers, usage limits, and subscription plans to attract
                consumers. API consumers, on the other hand, can effortlessly
                browse the marketplace, discover a wide range of APIs, and
                select a suitable subscription plan that fits their needs.
              </div>
            </div>
          </div>
          <div className="card-main card-img2">
            <div style={{ textAlign: "start", width: "50%", color: "white" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={card2Icon}
                  style={{ width: "30px", margin: "0" }}
                ></img>
                <h2 style={{ padding: "0px 10px" }}>Real-Time</h2>
              </div>
              <h1 style={{ marginTop: "0", marginBottom: "0" }}>
                Real-Time Payment Experince
              </h1>
              <div
                style={{
                  padding: "10px 0px",
                  letterSpacing: "0.2px",
                  fontWeight: "250",
                  textAlign: "justify",
                }}
              >
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
            <div style={{ textAlign: "start", width: "50%", color: "white" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={card3Icon}
                  style={{ width: "30px", margin: "0" }}
                ></img>
                <h2 style={{ padding: "0px 10px" }}>Automatic</h2>
              </div>
              <h1 style={{ marginTop: "0", marginBottom: "0" }}>
                Automatic Access Provisioning
              </h1>
              <div
                style={{
                  padding: "10px 0px",
                  letterSpacing: "0.2px",
                  fontWeight: "250",
                  textAlign: "justify",
                }}
              >
                Once the subscription is set up, API consumers are granted
                access credentials such as API keys or authentication tokens.
                With these credentials, they can seamlessly start consuming the
                API's services based on the agreed-upon usage limits. No more
                manual access provisioning or waiting periods. It's all
                automated for a hassle-free experience.
              </div>
            </div>
            <img src={card3Img}></img>
          </div>
          <div className="card-main card-img4">
            <img src={card4Img}></img>
            <div style={{ textAlign: "start", width: "50%", color: "white" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={card4Icon}
                  style={{ width: "30px", margin: "0" }}
                ></img>
                <h2 style={{ padding: "0px 10px" }}>Effortless</h2>
              </div>
              <h1 style={{ marginTop: "0", marginBottom: "0" }}>
                Effortless Payment Processing
              </h1>
              <div
                style={{
                  padding: "10px 0px",
                  letterSpacing: "0.2px",
                  fontWeight: "250",
                  textAlign: "justify",
                }}
              >
                Our platform handles all payment processing, making it
                convenient for API consumers. Fees are deducted from the
                consumer's Superfluid payment account based on the subscription
                plan and the actual API usage. This streamlined process ensures
                accurate and transparent payment management
              </div>
            </div>
          </div>
          <div className="card-main card-img5">
            <div style={{ textAlign: "start", width: "50%", color: "white" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={card5Icon}
                  style={{ width: "30px", margin: "0" }}
                ></img>
                <h2 style={{ padding: "0px 10px" }}>Flexible</h2>
              </div>
              <h1 style={{ marginTop: "0", marginBottom: "0" }}>
                Flexible Subscription Managment
              </h1>
              <div
                style={{
                  padding: "10px 0px",
                  letterSpacing: "0.2px",
                  fontWeight: "250",
                  textAlign: "justify",
                }}
              >
                Our marketplace platform provides comprehensive subscription
                management features. API consumers have the freedom to upgrade
                or downgrade their subscription plans, cancel subscriptions when
                needed, or modify payment preferences. We prioritize
                flexibility, allowing consumers to adapt their subscriptions to
                changing requirements.
              </div>
            </div>
            <img src={card5Img}></img>
          </div>
          <div className="card-main card-img6">
            <img src={card6Img}></img>
            <div style={{ textAlign: "start", width: "50%", color: "white" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={card6Icon}
                  style={{ width: "30px", margin: "0" }}
                ></img>
                <h2 style={{ padding: "0px 10px" }}>Enhanced</h2>
              </div>
              <h1 style={{ marginTop: "0", marginBottom: "0" }}>
                Enhanced Payment Process With Superfluid Subscriptions
              </h1>
              <div
                style={{
                  padding: "10px 0px",
                  letterSpacing: "0.2px",
                  fontWeight: "250",
                  textAlign: "justify",
                }}
              >
                By leveraging Superfluid Subscriptions on the Celo blockchain,
                we enhance the payment process for API consumption. Real-time
                payments, automatic adjustments, and secure revenue sharing
                become the new norm, offering a seamless experience to both API
                consumers and providers.
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Link to="/">
            <img
              src={logo}
              alt=""
              style={{ width: "250px", position: "relative", right: "50px" }}
            />
          </Link>

          <div style={{ color: "white", fontSize: "15px" }}>
            StreamPay APIHub © 2023
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
