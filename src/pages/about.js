import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <div style={{
        border: `1px solid rgba(255,255,255,0.4)`,
        backgroundColor: `rgba(255,255,255,0.25)`,
        borderRadius: `30px`,
        height: `500px`,
        backdropFilter: `blur(5px)`
      }}>
        About Me
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About | Andrew Le's Website</title>