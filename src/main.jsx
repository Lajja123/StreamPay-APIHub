import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { configureChains } from "wagmi";
import { celoAlfajores } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains } = configureChains(
  [celoAlfajores],
  [
    alchemyProvider({ apiKey: "Rwja692xoss6YsaqbUDRNVwpjZrO4ltM" }),
    publicProvider(),
  ]
);

const config = createConfig(
  getDefaultConfig({
    appName: "Your App Name",
    alchemyId: "Rwja692xoss6YsaqbUDRNVwpjZrO4ltM",
    // walletConnectProjectId,
    chains,
  })
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <WagmiConfig config={config}>
    <ConnectKitProvider theme="midnight">
      <App />
    </ConnectKitProvider>
  </WagmiConfig>
);
