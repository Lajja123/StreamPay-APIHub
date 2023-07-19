import { ConnectKitButton } from "connectkit";
import arrowImg from "../assets/Arrow.png";

import styled from "styled-components";
const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 14px 24px;
  color: black;
  background: #2dda8f;
  font-size: 16px;
  font-weight: 500;

  box-shadow: 0 4px 24px -6px #2a23cf;

  transition: 200ms ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 40px -6px #2a23cf;
  }
  &:active {
    transform: translateY(-3px);
    box-shadow: 0 6px 32px -6px #2a23cf;
  }
`;

export const Connectbuttoncustom = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <StyledButton onClick={show}>
            {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
            {/* <img src={arrowImg} alt="Arrow" /> */}
          </StyledButton>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
