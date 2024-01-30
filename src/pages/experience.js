import * as React from "react"
import Layout from "../components/layout"

import { SkillsContainer, SingleSkill, TimelineContainer, SkillBubbles, Skill } from "../styles/experience.styles"
import Marquee from "react-fast-marquee"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

// Icons for Skills
import Java from '../images/skills/java.svg'
import Python from '../images/skills/python.svg'
import CPP from '../images/skills/cpp.svg'
import JavaScript from '../images/skills/javascript.svg'
import Swift from '../images/skills/swift.svg'
import Kotlin from '../images/skills/kotlin.svg'
import ReactIcon from '../images/skills/react.svg'
import Angular from '../images/skills/angular.svg'
import GraphQL from '../images/skills/graphql.svg'
import AWS from '../images/skills/aws.svg'
import MySQL from '../images/skills/mysql.svg'

// Icons for Timeline
import UTAustin from '../images/logos/utaustin.png'
import ProMazo from '../images/logos/promazo.png'
import EdgeLearning from '../images/logos/edgelearning.png'
import Citi from '../images/logos/citi.png'

const skills = [
  { name: 'Java', src: Java },
  { name: 'Python', src: Python },
  { name: 'C++', src: CPP },
  { name: 'JavaScript', src: JavaScript },
  { name: 'Swift', src: Swift },
  { name: 'Kotlin', src: Kotlin },
  { name: 'React', src: ReactIcon },
  { name: 'Angular', src: Angular },
  { name: 'GraphQL', src: GraphQL },
  { name: 'AWS', src: AWS },
  { name: 'MySQL', src: MySQL }
]

const ExperiencePage = () => (
  <Layout>
    <h1>Andrew's Work Experience</h1>
    <SkillsContainer>
      <p>
        Through my full-time work at Citi and in internships, projects, and other courses, I've expanded my tech stack and gained proficiency in the following:
      </p>
      <Marquee speed={50} style={{ padding: `20px 0` }}>
        { skills.map((skill, index) =>
          <SingleSkill delay={index + 1}>
            <img src={skill.src} height={50} alt={skill.name} />
            <span>{ skill.name }</span>
          </SingleSkill>
        )}
      </Marquee>
      <p>
        I currently have <u><b>4 years of experience</b></u> as a software engineer. Here is a timeline of my journey:
      </p>
    </SkillsContainer>

    <TimelineContainer>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="January 2022 - Present"
          icon={<img id="citi" src={Citi} alt="Citi" width={50} />}
          iconStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to top, #00529b, #10c0f2)' }}
        >
          <SkillBubbles>
            <Skill>Angular</Skill>
          </SkillBubbles>
          <h3>Software Engineer</h3>
          <h4>Citi</h4>
          <ul>
            <li>Lead 200+ journey teams in app-wide migration to Angular 15</li>
            <li>Design new customer-facing experiences for branding and login flow visible to 2 mil. customers daily</li>
            <li>Maintain and refactor core Angular libraries to minimize defects and improve performance</li>
            <li>Streamline developer onboarding process and minimize costs of onboarding effort</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="August 2018 - December 2021"
          icon={<img id="utaustin" src={UTAustin} alt="UT Austin" width={60} />}
        >
          <h3>B.S. in Computer Science</h3>
          <h4>The University of Texas at Austin</h4>
          <ul>
            <li>Completed 45 hours of CS coursework, built multiple web and mobile apps in group projects</li>
            <li><u>Coursework:</u> Data Structures, Algorithms, Software Engineering, iOS Mobile Computing, Modern Web Apps, Object-Oriented Programming, Network Security and Privacy, Computer Architecture, Operating Systems</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="June 2021 - August 2021"
          icon={<img id="citi" src={Citi} alt="Citi" width={50} />}
          iconStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to top, #00529b, #10c0f2)' }}
        >
          <SkillBubbles>
            <Skill>Angular</Skill>
          </SkillBubbles>
          <h3>Global Consumer Technology Analyst</h3>
          <h4>Citi</h4>
          <ul>
            <li>Contributed to Angular library providing reusable, generic, and ADA-compliant components to journey teams</li>
            <li>Conducted research in spike stories and documented findings/best practices</li>
            <li>Engineered QoL features and fixes in an interal feedback tool</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="April 2020 - May 2021"
          icon={<img id="promazo" src={ProMazo} alt="ProMazo" width={30} />}
          iconStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to right, #38d4d1, #59cd89)' }}
        >
          <SkillBubbles>
            <Skill>React</Skill>
            <Skill>Redux</Skill>
            <Skill>GraphQL</Skill>
            <Skill>AWS</Skill>
          </SkillBubbles>
          <h3>Full Stack Engineer</h3>
          <h4>ProMazo</h4>
          <ul>
            <li>Developed a data-driven PWA for career exploration using React</li>
            <li>Released a React Native app to match students with career mentors</li>
            <li>Architected user flow and authentication using GraphQL and AWS</li>
            <li>Built a web extension to scrape data from career search websites</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="August 2020 - January 2021"
          icon={<img id="edgelearning" src={EdgeLearning} alt="Edge Learning" width={60} />}
          iconStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(315deg, #bdcad9 0%, #e1dada 74%)' }}
        >
          <SkillBubbles>
            <Skill>React</Skill>
            <Skill>Redux</Skill>
          </SkillBubbles>
          <h3>Frontend Engineer</h3>
          <h4>Edge Learning</h4>
          <ul>
            <li>Built a college readiness tracker using React and Redux</li>
            <li>Designed and implemented consistent UI/UX across all device sizes</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </TimelineContainer>
  </Layout>
)


export default ExperiencePage

export const Head = () => <title>Experience | Andrew Le's Website</title>