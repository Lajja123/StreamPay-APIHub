import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PDFViewer from "pdf-viewer-reactjs";
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
  const [isAppInfoOpen, setIsAppInfoOpen] = useState(false);
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [singleApi, setSingleApi] = useState();

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
    <div>
      {singleApi && (
        <>
          <img
            src={singleApi.image_url}
            alt={singleApi.name}
            style={{ width: "100px" }}
          />
          <h2>{singleApi.name}</h2>
        </>
      )}{" "}
      <div>
        <button onClick={openAppInfo}>App info</button>
        <button onClick={openDocumentation}>Documentation</button>
        <button onClick={openPricing}>Pricing</button>
      </div>
      {isAppInfoOpen && (
        <div>
          {/* Render the detailed app info here */}
          <p>{singleApi.description}</p>
        </div>
      )}
      {isDocumentOpen && (
        <div>
          {/* Render the detailed app info here */}
          <PDFViewer
            document={{
              url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
            }}
          />
        </div>
      )}
      {isPricingOpen && (
        <div className="subscription-grid">
          {/* Render the subscription plan grid */}
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
