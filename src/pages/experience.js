import * as React from "react"
import Layout from "../components/layout"

import { SkillsContainer, SingleSkill } from "../styles/experience.styles"
import Marquee from "react-fast-marquee"

// Icons for Skills
import Java from '../images/skills/java.svg'
import Python from '../images/skills/python.svg'
import CPP from '../images/skills/cpp.svg'
import JavaScript from '../images/skills/javascript.svg'
import Swift from '../images/skills/swift.svg'
import Android from '../images/skills/android.svg'
import ReactIcon from '../images/skills/react.svg'
import Angular from '../images/skills/angular.svg'
import GraphQL from '../images/skills/graphql.svg'
import AWS from '../images/skills/aws.svg'
import MySQL from '../images/skills/mysql.svg'

const skills = [
  { name: 'Java', src: Java },
  { name: 'Python', src: Python },
  { name: 'C++', src: CPP },
  { name: 'JavaScript', src: JavaScript },
  { name: 'Swift', src: Swift },
  { name: 'Android', src: Android },
  { name: 'React', src: ReactIcon },
  { name: 'Angular', src: Angular },
  { name: 'GraphQL', src: GraphQL },
  { name: 'AWS', src: AWS },
  { name: 'MySQL', src: MySQL }
]

const ExperiencePage = () => {
  return (
    <Layout>
      <SkillsContainer>
        <p>
          I currently have <b>4 years of experience</b> as a software engineer.
        </p>
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
      </SkillsContainer>
    </Layout>
  )
}

export default ExperiencePage

export const Head = () => <title>Experience | Andrew Le's Website</title>