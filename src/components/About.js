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
    background: #1E1E1F;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 960px){
      height: fit-content;
    }
  `;

  const AboutContentWrapper = styled.div`
    padding: 0px 200px;
    width: 95%;
    max-width: 1020px;
    margin: 0 auto;

    @media screen and (max-width: 960px){
      padding: 0;
    }
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

    @media screen and (max-width: 960px){
      font-size: 1.5em;
      line-height: 40px;
    }
  `;

  return (
    <MainAboutContent>
      <HeaderTitle title="About Me" color="#f2f2f2" />

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
              text="Overall, I am most familiar and comfortable with Java as this is the language I use in basically every class in school. I use Java for all projects or assignments involving data structures and algorithms, as well as any 'non-app/web development' projects; however, I am also familiar with Python for these same types of projects. In terms of web development, the language and tools - with over a year and a half of web development experience - that I am most comfortable using is JavaScript, React, HTML, and CSS/SCSS for frontend development. With respect to backend web development, I am comfortable with using NodeJS, ExpressJS, SQL, and MongoDB. I have also been messing around with iOS development with Swift. I dabbled with mobile development using Flutter/Dart earlier this year but I have transitioned to focusing on iOS development using Swift."
            />
            <AboutMeText
              text="Aside from software and programming, I have a strong passion for the field of mathematics - more specifically, pure mathematics. I also enjoy composing and playing music (I am a percussionist and pianist), messing around with graphic design in Photoshop, and exploring and skiing the beautiful mountains and landscape of Montana."
            />
            <AboutMeText
              text="Recently, I have been getting more involved in using my knowledge and experience in software towards engineering hardware. Engineering projects out of different electrical componenents has, in a way, resparked a huge interest towards coding in my life and allows me to explore my creative interests with no boundaries. I will always be a software developer first but getting into electrical/computer engineering has allowed me to pick up a new hobby that I enjoy while still building on and learning new software engineering skills. I am still very much a novice when it comes to electrical engineering; however, much like coding, I continue to work towards projects in an attempt to further my skills and understanding."
            />
          </AboutMeContent>
        </AboutMeWrapper>

      </AboutContentWrapper>

    </MainAboutContent>
  );
}

export default About;