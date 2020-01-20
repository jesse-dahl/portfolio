import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Image from 'react-image';
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
  background-image: url(${Background});
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  background-size: cover;
  height: -webkit-fill-available;
  background-position: center;
  opacity: 0.90;

  @media only screen and (max-width: 960px) {
    background-attachment: scroll;
  }
`;

const MainContentWrapper = styled.div`
  display: block;
  @media only screen and (max-width: 960px) {
    padding: 20% 0 50% 0;
  }
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
        <HomePageBackground>
          <MainPageContent>
            <Fade duration={3000}>
              <Header />



              <MainContentWrapper>

                <FullDescriptionWrapper>
                  <FullDescriptionContent>
                    <DescriptionItems paraNum='paragraph main-paragraph' text='Welcome To My Website' />
                    <DescriptionItems paraNum='paragraph' text='I am a Software and Web/App Developer located in Bozeman, MT' />
                    <DescriptionItems paraNum='paragraph' text='Click on one of the buttons below to view the projects I have worked on, read my resume, or contact me. You can also scroll down to learn a little more about me' />
                  </FullDescriptionContent>
                </FullDescriptionWrapper>

                <SocialWrapper>
                  <SocialContent>
                    <SocialLinks target='https://github.com/jesse-dahl' source={Github} alt='github' />
                    <SocialLinks target='https://www.linkedin.com/in/jesse-dahl-777437160/' source={Linkedin} alt='linkedin' />
                    <Link to="/resume">
                      <Image className="social" src={Resume} alt="img" />
                    </Link>
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