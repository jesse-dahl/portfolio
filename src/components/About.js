import React from 'react';
import HeaderTitle from './HeaderTitle';
import styled from 'styled-components';

const About = () => {

  const AboutMeText = (props) => {
    return (
      <p className='AboutText'>{props.text}</p>
    )
  }

  const MainAboutContent = styled.section`
    background: #2B2B2B;
  `;

  const AboutContentWrapper = styled.div`
    padding: 0px 200px;
    width: 95%;
    max-width: 1020px;
    margin: 0 auto;
  `;

  const AboutMeWrapper = styled.div`
    padding-top: 30px;
    padding-bottom: 40px;
  `;

  const AboutMeContent = styled.div`
    color: #7A7A7A;
    line-height: 30px;
    text-align: left;
    font-size: 20px;
  `;

  return (
    <MainAboutContent>
      <HeaderTitle title="About Me" color="white" />

      <AboutContentWrapper>

        <AboutMeWrapper>
          <AboutMeContent>
            <AboutMeText
              text="My name is Jesse Dahl. I am a third year student studying computer science and mathematics at Montana State University in Bozeman, MT"
            />
            <AboutMeText
              text="I consider myself a philomath and engineer - I enjoy learning and studying new material and applying what I have learned to building tangible projects. The ability to use my engineering and problem-solving skills to create new programs and apps from scratch is what initially drew me into programming; and the possibility for endless learning opportunities and ability to apply endless creativity is what keeps me invested."
            />
            <AboutMeText
              text="Currently, I am mostly interested in becoming an iOS/app developer since app development, in my experience, seems to utilize more OOP principles and coding techniques that I personally find most enjoyable. With respect to app development, I am most familiar with using Swift and Objective C for pure, native iOS development or Flutter and Dart for cross-platform development. Overall, I am most familiar and comfortable with Java as this is the language I use in basically every class in school. I use Java for all projects or assignments involving data structures and algorithms, as well as any 'non-app/web development' projects. In terms of web development, the language and tools - with over a year and a half of web development experience - that I am most comfortable using is JavaScript, React, HTML, and CSS/SCSS."
            />
            <AboutMeText
              text="Aside from software and programming, I have a strong passion for the field of mathematics - more specifically, pure mathematics. I also enjoy composing and playing music (I am a percussionist and pianist), messing around with graphic design in Photoshop, and exploring and skiing the beautiful mountains and landscape of Montana."
            />
          </AboutMeContent>
        </AboutMeWrapper>

      </AboutContentWrapper>

    </MainAboutContent>
  );
}

export default About;