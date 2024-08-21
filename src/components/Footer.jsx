import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f9f9f9;
  color: #333333;
  font-size: 14px;
`;

const Footer = ({ timestamp, deviceStatus }) => (
  <FooterContainer>
    <div>Last updated: {timestamp}</div>
    <div>Status: {deviceStatus}</div>
  </FooterContainer>
);

export default Footer;
