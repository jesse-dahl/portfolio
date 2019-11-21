import React from 'react';
import HeaderTitle from './HeaderTitle';
import styled from 'styled-components';

const Skills = () => {

  const MainSkillsContent = styled.section`
    background-color: #f2f2f2;
  `;

  return (
    <MainSkillsContent>
      <HeaderTitle title="My Skills" color="black" />
    </MainSkillsContent>
  );
}

export default Skills;