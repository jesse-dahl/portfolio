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
              text="My name is Jesse Dahl. I am a fourth year student studying computer science and mathematics at Montana State University in Bozeman, MT"
            />
            <AboutMeText
              text="I consider myself a philomath and engineer - I enjoy learning and studying new material and applying what I have learned to building tangible projects. The ability to use my engineering and problem-solving skills to create new programs and apps from scratch is what initially drew me into programming; and the possibility for endless learning opportunities and ability to apply endless creativity is what keeps me invested."
            />
            <AboutMeText
              text="Overall, I am most familiar and comfortable with building applications using JavaScript and React. I have over two years of experience with using JavaScript, along with JavaScript frameworks such as React.js, Node.js, and Express.js. I am also very familiar with using SQL, namely MySQL, and MongoDB for database work. Aside from web development, I am comfortable with using Java and Python since these are two languages that my university uses in their curriculum. I also have experience using Dart and C, even though my experience with these languages are not near as vast as the others."
            />
            <AboutMeText
              text="Aside from software and programming, I have a strong passion for the field of mathematics - more specifically, pure mathematics. I also enjoy composing and playing music (I am a percussionist and pianist), as well as exploring and skiing the beautiful mountains and landscape of Montana."
            />
            <AboutMeText
              text="I have recently been spending some free time exploring the realms of data science and embedded systems, since they are two areas of computer science that intrigue me; although, I still consider myself to be a novice in both fields."
            />
          </AboutMeContent>
        </AboutMeWrapper>

      </AboutContentWrapper>

    </MainAboutContent>
  );
}

export default About;