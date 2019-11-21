import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import About from './About';

const Header = (props) => {

  const HeaderWrapper = styled.header`
    padding: 20px;
    background-color: transparent;
    display: block;
  `;

  const HeaderContent = styled.div`
    display: flex;
  `;

  const NavigationWrapper = styled.div`
    padding: 10px;
  `;

  const HeaderNav = styled.nav`
    width: 100%;
  `;

  const HeaderNavContent = styled.div`
    display: flex;
    justify-content: space-around;
  `;

  const HeaderNavItem = styled.a`
    color: white;
    text-decoration: none;
    font-size: 24px;
  `;

  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderNav>
          <HeaderNavContent>
            <HeaderNavItem className="header-item" href="/">Home</HeaderNavItem>
            <HeaderNavItem className="header-item" href={About}>About Me</HeaderNavItem>
            <HeaderNavItem className="header-item" href="/">Portfolio</HeaderNavItem>
            <HeaderNavItem className="header-item" href="/">Skills</HeaderNavItem>
          </HeaderNavContent>
        </HeaderNav>
      </HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;