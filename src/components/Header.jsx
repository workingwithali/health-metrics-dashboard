import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #3498db; /* Health-themed green color */
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Enhanced shadow for depth */
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  }
`;

const UserName = styled.span`
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover ${ProfileImage} {
    transform: scale(1.1);
  }

  &:hover ${UserName} {
    color: black;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Health Dashboard</Logo>
    <UserProfile>
      <ProfileImage src="https://via.placeholder.com/40" alt="Profile" />
      <UserName>John Doe</UserName>
    </UserProfile>
  </HeaderContainer>
);

export default Header;
