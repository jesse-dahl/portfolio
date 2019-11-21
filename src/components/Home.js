import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Background from '../images/mountain-sillhouette.jpg';
import Linkedin from '../images/linkedin-white.png';
import Email from '../images/email-white.png';
import Github from '../images/github-white.png';
import Resume from '../images/contract.png';
import ResumeFile from '../documents/Jesse_Dahl_Resume.pdf';

const DescriptionItems = (props) => {
  return (
    <div className='description-wrapper' style={{ padding: 10 }}>
      <div className='description'>
        <p className={props.paraNum}>{props.text}</p>
      </div>
    </div>
  )
}

const SocialLinks = (props) => {
  return (
    <div className='individual-social'>
      <a className='social-target' href={props.target} target='_blank' rel='noopener noreferrer'>
        <img className='social' style={{ fill: "white" }} src={props.source} alt={props.alt} />
      </a>
    </div>
  );
}

const MainPageWrapper = styled.div`
  display: block;
  height: 100vh;
`;

const MainPageContent = styled.div`
  display: block;
`;

const HomePageBackground = styled.div`
  display: flex;
  justify-content: center;
  background-size: cover;
  height: -webkit-fill-available;
  background-position: center;
  opacity: 0.90;

`;

const MainContentWrapper = styled.div`
  display: block;
`;

const FullDescriptionWrapper = styled.div`
padding: 120px 20px 20px 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`;

const FullDescriptionContent = styled.div`

`;

const SocialWrapper = styled.div`
  padding: 60px 80px;
`;

const SocialContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

class Home extends Component {

  render() {

    return (
      <MainPageWrapper>
        <HomePageBackground style={{ backgroundImage: `url(${Background})`, backgroundAttachment: 'fixed' }}>
          <MainPageContent>
            <Fade duration={3000}>
              <Header />



              <MainContentWrapper>

                <FullDescriptionWrapper>
                  <FullDescriptionContent>
                    <DescriptionItems paraNum='paragraph main-paragraph' text='Welcome To My Website' />
                    <DescriptionItems paraNum='paragraph' text='I am a Web/App Developer and designer located in Bozeman, MT' />
                    <DescriptionItems paraNum='paragraph' text='Click around to look at the projects I have worked on, find out more about me, or read my resume :)' />
                  </FullDescriptionContent>
                </FullDescriptionWrapper>

                <SocialWrapper>
                  <SocialContent>
                    <SocialLinks target='https://github.com/jesse-dahl' source={Github} alt='github' />
                    <SocialLinks target='https://www.linkedin.com/in/jesse-dahl-777437160/' source={Linkedin} alt='linkedin' />
                    <SocialLinks target={ResumeFile} source={Resume} alt='resume' />
                    <SocialLinks target='mailto:jddahl199@gmail.com' source={Email} alt='email' />
                  </SocialContent>
                </SocialWrapper>

              </MainContentWrapper>


            </Fade>
          </MainPageContent>
        </HomePageBackground>

        <About />

        <Skills />

      </MainPageWrapper >
    )
  }
}

export default Home;