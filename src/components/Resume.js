import React from 'react';
import ResumeFile from '../documents/resume.pdf';
import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Resume = () => {

  return (
    <MainWrapper>
      <iframe src={ResumeFile} title="pdf" frameborder="0" style={{ overflow: "height: 100%", width: "100%", height: "100vh" }} />
    </MainWrapper>
  );
}

export default Resume;