import React, { useMemo, useState } from "react";
import { WagmiConfig } from "wagmi";
import SuperfluidWidget from "@superfluid-finance/widget";
import superTokenList from "@superfluid-finance/tokenlist";
import data from "../DummyData/widget.json";

function Subscription() {
  // Replace `wagmiConfig` with your actual configuration object
  const wagmiConfig = {};

  // Initialize the `open` and `isOpen` states for the walletManager
  const [open, setOpen] = useState(false);
  const isOpen = useMemo(() => open, [open]);

  // Define the walletManager object
  const walletManager = useMemo(
    () => ({
      open: () => setOpen(true),
      isOpen,
    }),
    [isOpen]
  );

  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
        <SuperfluidWidget
          {...data}
          tokenList={superTokenList}
          type="dialog"
          walletManager={walletManager}
        >
          {({ openModal }) => (
            <button onClick={() => openModal()}>Open Superfluid Widget</button>
          )}
        </SuperfluidWidget>
      </WagmiConfig>
    </div>
  );
}

export default Subscription;
