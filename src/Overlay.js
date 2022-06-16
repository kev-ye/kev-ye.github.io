import styles from "./Overlay.module.css";
import {BsFillTelephoneFill} from 'react-icons/bs';
import styled from 'styled-components';
import { v4 } from "uuid";
import {FiMail} from 'react-icons/fi';
import {
  SiCodio,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiPython,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiGnubash,
  SiHtml5,
  SiCss3,
  SiGit,
  SiAssemblyscript,
  SiLinkedin,
  SiGithub
} from "react-icons/si";
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import React from "react";

const InfoTextWrapper = styled.p`
  font-size: 20px;
  margin: 0;
  padding: 0;
`

const PresentationTextWrapper = styled.p`
  font-size: 20px;
  margin: 0;
  padding: 0;
`

const DivWrapper = styled.div`
  margin: 10px 0;
  font-size: 30px
`

const TitleWrapper = styled.h2`
  font-size: 40px
`

const SupWrapper = styled.sup`
  margin-right: 10px;
  font-size: 12px;
`

const SocialWrapper = styled.div`
  font-size: 75px;
`

const skillArray = [
  [
    { name: "", logo: SiCodio },
    { name: "", logo: SiCplusplus }
  ],
  [
    { name: "Javascript", logo: SiJavascript },
    { name: "Typescript", logo: SiTypescript },
    { name: "React", logo: SiReact },
    { name: "Angular", logo: SiAngular }
  ],
  [
    { name: "Python", logo: SiPython },
    { name: "Flask", logo: SiFlask }
  ],
  [
    { name: "SQL", logo: AiOutlineConsoleSql },
    { name: "Mongodb", logo: SiMongodb },
    { name: "Postgresql", logo: SiPostgresql }
  ],
  [
    { name: "Docker", logo: SiDocker },
    { name: "Kubernetes", logo: SiKubernetes }
  ],
  [
    { name: "Bash", logo: SiGnubash }
  ],
  [
    { name: "Html", logo: SiHtml5 },
    { name: "Css3", logo: SiCss3 }
  ],
  [
    { name: "Git", logo: SiGit }
  ],
  [
    { name: "Assembly", logo: SiAssemblyscript }
  ]
]


export function Overlay({ scroll }) {
  return (
    <div
      className={styles.scrollContainer}
      onScroll={(e) => {
        const scroll01 =
          e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
        scroll.current = scroll01;
      }}
    >
      <section
        style={{ height: "100vh" }}
        className={styles.sectionLeft + " " + styles.sectionHero}
      >
        <header>
          <h1>
            <strong>Kangkai Ye</strong><sup>Profile</sup>
            <InfoTextWrapper><span><BsFillTelephoneFill /></span> 0782948530</InfoTextWrapper>
            <InfoTextWrapper><span><FiMail /></span> Kangkai.ye@hotmail.com</InfoTextWrapper>
          </h1>
        </header>
        
        <h2>Hi, everyone !</h2>
        <PresentationTextWrapper>
          I come from <b>School 42</b> and I am <b>available immediately</b>,<br/>
          I am looking for a <b>4 to 6 month internship</b><br/>
          that will allow me to develop my skills in the new technologies sector,<br/>
          and I am particularly interested in back-end development.<br/><br/>
          I am passionate about programming!<br/><br/>
          Thanks to the projects I have done in my school,<br/>
          I now have a good aptitude for learning and working.<br/>
          <b>Polyvalent</b>, <b>autonomous</b> and <b>a good integration in teamwork</b>.<br/>
        </PresentationTextWrapper>
        <p>
          <svg
            width="30"
            height="71"
            viewBox="0 0 30 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="1.5"
              width="27"
              height="45"
              rx="13.5"
              stroke="#2D3A94"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
            <path
              d="M15 12V20"
              stroke="#2D3A94"
              strokeOpacity="0.6"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M8 54L14.5 60.5L21 54"
              stroke="#2D3A94"
              strokeOpacity="0.6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 63L14.5 69.5L21 63"
              stroke="#2D3A94"
              strokeOpacity="0.6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </section>
      <section style={{ height: "100vh" }} className={styles.sectionLeft}>
        <TitleWrapper><GiSkills/> Skills</TitleWrapper>
        {skillArray.map(skill => {
          if (skill.length > 1) {
            return (
              <DivWrapper key={v4()}>
              {
                skill.map(subSkill => {
                  const Logo = subSkill.logo
                  return (
                    <React.Fragment key={v4()}>
                      <Logo /><SupWrapper>{` ${subSkill.name} `}</SupWrapper>
                    </React.Fragment>
                  )
                })
              }
              </DivWrapper>
            )
          }
          else {
            const Logo = skill[0].logo
            return (
              <DivWrapper key={v4()}>
                <Logo /><SupWrapper>{` ${skill[0].name}`}</SupWrapper>
              </DivWrapper>
            )
          }
        })}
      </section>
      <section style={{ height: "100vh", fontSize: "18px" }} className={styles.sectionLeft}>
        <TitleWrapper>Projects</TitleWrapper>
        <h3><b>WEB APPLICATION - <a href="https://github.com/kev-ye/Camagru">CAMAGRU</a></b></h3>
        Realization of a single page application Instagram or Snapchat like.
        <ul>
          <li>Front-end: Html / Css / Javascript (Vanilla)</li>
          <li>Back-end: Typescript (Express)</li>
          <li>Database: MongoDB</li>
          <li>Deployment: Docker-compose</li>
        </ul>

        <h3><b>WEB APPLICATION - <a href="https://github.com/kev-ye/Ft_transcendence">FT_TRANSCENDENCE</a> (TEAM)</b></h3>
        Realization of a single page application for an online pong game.
        <ul>
          <li>Front-end: Typescript (Angular)</li>
          <li>Back-end: Typescript (NestJs)</li>
          <li>Database: PostgreSQL</li>
          <li>Deployment: Docker-compose</li>
        </ul>

        <h3><b>WEB SERVER - <a href="https://github.com/kev-ye/webserv">WERSERV</a> (TEAM)</b></h3>
        Realization of a web server in C++ (Nginx 2.0).
        <ul>
          <li>Development of a non-blocking single-threaded web server</li>
          <li>Implementation of a file transfer system</li>
        </ul>
      </section>
      <section style={{ height: "100vh" }} className={styles.sectionRight}>
        <SocialWrapper>
          <a href="https://www.linkedin.com/in/kangkai-ye/" target="_blank" rel="noreferrer"><SiLinkedin/></a>
        </SocialWrapper>
        <SocialWrapper>
          <a href="https://github.com/kev-ye" target="_blank" rel="noreferrer"><SiGithub/></a>
        </SocialWrapper>
      </section>
    </div>
  );
}
