import React from 'react';
import styled from 'styled-components';

const HeaderTitle = (props) => {

  const SectionHeader = styled.h2`
    margin: 0;
    font-size: 45;
    text-align: center;

    @media screen and (max-width: 960px){
      font-size: 3.5em;
    }
  `;

  return (
    <div className='title-wrapper' style={{ paddingTop: 40 }}>
      <div className='title'>
        <SectionHeader
          className='main-title'
          style={{
            color: props.color
          }}
        >
          ⌈ &nbsp;&nbsp; {props.title} &nbsp;&nbsp; ⌋
        </SectionHeader>
      </div>
    </div>
  );
}

export default HeaderTitle;