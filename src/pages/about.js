import * as React from "react"
import Layout from "../components/layout"
import { AboutMeContainer, AboutBlock } from "../styles/about.styles"
import About1 from "../images/about1.jpg"
import About2 from "../images/about2.jpg"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Andrew Le</h1>
      <AboutMeContainer>
        <AboutBlock>
          <img id="about-1" src={About1} alt="UT Austin Graduation" width={250} />
          <div>
            <p>Howdy! My name is Andrew Le. I'm a 24-year old software engineer residing in Austin, TX. I've lived in Texas my whole life<span>&#8212;</span>I grew up in my hometown at San Antonio, and then attended and graduated from <b><u>The University of Texas at Austin</u></b> in 2021, with a <b><u>BS in Computer Science</u></b>!</p>
            <p>I currently have <b><u>4 years of experience</u></b> as a software engineer. I took on multiple internships during my time in college, where I gained experience building full-stack applications and working in scrum teams. After graduation, I got hired full-time at Citi, where I've worked the last 2 years.</p>
          </div>
        </AboutBlock>
        <AboutBlock>
          <img id="about-2-mobile" src={About2} alt="Selfie" width={250} />
          <div>
            <p>My primary hobby is dance games. I love to play Dance Dance Revolution, which I was introduced to as a kid. A lot of my close friends are part of the DDR community, including my two roommates<span>&#8212;</span>we even own a home setup! I upload my DDR clips at the arcade to my YouTube channel <a href="https://www.youtube.com/channel/UCU7PqJ_WJX5LHLv-npuNZGg" target="_blank" rel="noreferrer">here</a>.</p>
            <p>My other hobbies are a mix of physical activity and nerdy interests. I love to bike and hike in parks and nature spots! I enjoy sightseeing and exploring restaurants in Austin. When staying indoors, I spend my free time watching various animes or playing board games with my roommates.</p>
          </div>
          <img id="about-2" src={About2} alt="Selfie" width={250} />
        </AboutBlock>
      </AboutMeContainer>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About | Andrew Le's Website</title>