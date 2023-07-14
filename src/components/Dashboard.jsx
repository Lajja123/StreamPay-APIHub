import React, { useEffect, useState } from "react";
import { data } from "../DummyData/ApiGrid";
import "../styles/main.scss";

function Dashboard() {
  const [apiData, setApiData] = useState([]);

  return (
    <>
      <div className="dashboard-main">
        <div className="api-grid">
          {data.map((api) => (
            <div key={api.id} className="api-card">
              <div>
                <img
                  src={api.image_url}
                  alt={api.name}
                  style={{ width: "100px" }}
                />
              </div>
              <div style={{ padding: "0px 20px" }}>
                <h2>{api.name}</h2>
                <p>{api.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
