import React from 'react';
import styled from 'styled-components';

const Header = (props) => {

  const HeaderWrapper = styled.header`
    padding: 20px 10px;
    background-color: transparent;
    display: block;
  `;

  const HeaderContent = styled.div`
    display: flex;
  `;

  // const NavigationWrapper = styled.div`
  //   padding: 10px;
  // `;

  // const HeaderNav = styled.nav`
  //   width: 100%;
  // `;

  // const HeaderNavContent = styled.div`
  //   display: flex;
  //   justify-content: space-around;
  // `;

  // const HeaderNavItem = styled.a`
  //   color: white;
  //   text-decoration: none;
  //   font-size: 24px;
  // `;

  return (
    <HeaderWrapper>
      <HeaderContent>
        <div className="Header">Jesse Dahl</div>
      </HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;