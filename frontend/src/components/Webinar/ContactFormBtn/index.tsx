import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const StyledButton = styled(Button)`
  color: #fff !important;
  background: #1c439c !important;

  &:hover {
    background: #3963e6 !important;
  }
`;

export const ContactBtn = ({ size = "large", onRequestBtnClick }) => {
  return (
    <StyledButton className="contactBtn" aria-label="order-consultation" size={size} primary onClick={onRequestBtnClick}>
      Заказать консультацию
    </StyledButton>
  );
};
