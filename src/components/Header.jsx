import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const UserName = styled.span`
  font-size: 18px;
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
