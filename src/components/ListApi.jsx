import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import arrow from "../assets/Arrow.png";
import "../styles/main.scss";

const SubscriptionPlanCard = ({ title, price, features }) => {
  return (
    <div className="subscription-card">
      <h3>{title}</h3>
      <h2>{price}</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Subscription</button>
    </div>
  );
};
function ListApi() {
  const location = useLocation();
  const [isAppInfoOpen, setIsAppInfoOpen] = useState(true);
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [singleApi, setSingleApi] = useState();
  const [arrowRotated, setArrowRotated] = useState(false);

  const handleArrowClick = () => {
    setArrowRotated(!arrowRotated);
    // Redirect to the other page when the arrow is clicked
    window.location.href = "/dashboard"; // Replace "/otherpage" with the actual URL of the other page you want to navigate to
  };

  useEffect(() => {
    if (location.state.data) {
      console.log(location.state.data);
      setSingleApi(location.state.data);
    }
  }, [location]);

  const openAppInfo = () => {
    setIsAppInfoOpen(true);
    setIsDocumentOpen(false);
    setIsPricingOpen(false);
  };
  const openDocumentation = () => {
    setIsAppInfoOpen(false);
    setIsDocumentOpen(true);
    setIsPricingOpen(false);
  };
  const openPricing = () => {
    setIsAppInfoOpen(false);
    setIsDocumentOpen(false);
    setIsPricingOpen(true);
  };
  return (
    <div style={{ textAlign: "start", margin: "20px" }}>
      <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleArrowClick}
      >
        {" "}
        <img
          src={arrow}
          style={{
            transform: "rotate(180deg)",
            width: "50px",
          }}
        ></img>
        API Marketplace
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {singleApi && (
          <>
            <img
              src={singleApi.image_url}
              alt={singleApi.name}
              style={{ width: "80px" }}
            />
            <h2 style={{ padding: "30px", fontSize: "2rem" }}>
              {singleApi.name}
            </h2>
          </>
        )}{" "}
      </div>
      <div style={{ margin: "30px 100px", display: "flex" }}>
        <div onClick={openAppInfo} className="listapi-tabBtn">
          App info
        </div>
        <div onClick={openDocumentation} className="listapi-tabBtn">
          Documentation
        </div>
        <div onClick={openPricing} className="listapi-tabBtn">
          Pricing
        </div>
      </div>
      {singleApi && (
        <>
          {isAppInfoOpen && (
            <div style={{ margin: "0px 100px" }}>
              <p style={{ lineHeight: "2.5vh", letterSpacing: "1.5px" }}>
                {singleApi.description}
              </p>
            </div>
          )}
          {isDocumentOpen && <div>{singleApi.endpoints}</div>}
          {isPricingOpen && <div className="subscription-grid"></div>}
        </>
      )}
      {isPricingOpen && (
        <div className="subscription-grid">
          <SubscriptionPlanCard
            title="Basic Plan"
            price="$9.99/month"
            features={["Feature 1", "Feature 2", "Feature 3"]}
          />
          <SubscriptionPlanCard
            title="Pro Plan"
            price="$19.99/month"
            features={["Feature 1", "Feature 2", "Feature 3"]}
          />
          <SubscriptionPlanCard
            title="Premium Plan"
            price="$29.99/month"
            features={["Feature 1", "Feature 2", "Feature 3"]}
          />
        </div>
      )}
    </div>
  );
}
export default ListApi;
