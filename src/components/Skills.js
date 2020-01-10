import React from 'react';
import HeaderTitle from './HeaderTitle';
import styled from 'styled-components';

const Skills = () => {

  const HrTag = () => {
    return (
      <hr style={{ marginTop: 15, marginBottom: 15, width: 160 }} />
    );
  }

  const SkillsWrapper = styled.div`
  
  `;

  const SkillsTitleWrapper = styled.div`
    margin: 10px;
  `;

  const SkillsTitle = styled.h3`
    font-size: 32px;
    color: #686868;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;

    @media screen and (max-width: 960px){
      font-size: 3em;
    }
  `;

  const Padding = styled.div`
    @media screen and (max-width: 960px){
      padding-top: 60px;
    }
  `;

  const SkillsInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const SkillsRow = styled.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 960px){
      flex-direction: column;
      align-items: center;
    }
  `;

  const SkillsInfo = (props) => {
    return (
      <div>{props.skills}</div>
    )
  }



  const SkillsColumn = (props) => {
    return (
      <SkillsWrapper>

        <SkillsTitleWrapper>
          <SkillsTitle>
            {props.title}
          </SkillsTitle>
        </SkillsTitleWrapper>

        <HrTag />

        <SkillsInfoWrapper>
          {props.skill}
        </SkillsInfoWrapper>

      </SkillsWrapper>
    );
  }

  const MainSkillsContent = styled.section`
    background-color: #f2f2f2;
    padding: 0px 20px 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 960px){
      height: 100vh;
      min-height: 100vh;
    }
  `;

  const SkillsDescWrapper = styled.div`
    padding: 25px 20px;
  `;

  const SkillsDescContent = styled.div`
    text-align: center;
  `;

  const SkillsDesc = styled.h3`
    font-family: 'Raleway', sans-serif;
    color: #9c9c9c;
    line-height: 1.5;
    font-size: 20px;
    font-weight: 100;

    @media screen and (max-width: 960px){
      font-size: 1.7em;
      font-weight: 300;
    }
  `;

  return (
    <MainSkillsContent>
      <HeaderTitle title="My Skills" color="#686868" />

      <SkillsDescWrapper>
        <SkillsDescContent>
          <SkillsDesc>Below are the languages, frameworks, and areas where I feel the most comfortable.</SkillsDesc>
          <SkillsDesc>I am also more than comfortable to pick up a new language. After all, learning new material is what keeps me invested in programming</SkillsDesc>
        </SkillsDescContent>
      </SkillsDescWrapper>

      <SkillsRow>
        <SkillsColumn
          title="Languages"
          skill={
            <SkillsInfo skills=
              {<ul className="List">
                <li>Java</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Swift</li>
                <li>Dart</li>
                <li>C</li>
              </ul>}
            />
          }
        />

        <Padding />

        <SkillsColumn
          title="Frameworks and Technologies"
          skill={
            <SkillsInfo skills=
              {<ul className="List">
                <li>React</li>
                <li>Flutter</li>
                <li>Firebase</li>
                <li>GCP</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>NodeJS</li>
                <li>GraphQL</li>
              </ul>}
            />
          }
        />

      </SkillsRow>

    </MainSkillsContent>
  );
}

export default Skills;