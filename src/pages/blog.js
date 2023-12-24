import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { GlassContainer } from "../styles/index.styles"

const BlogPage = ({ data }) => {
  const richText = JSON.parse(data.contentfulBlogPost.content.raw);
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />
      }
    }
  }
  return (
    <Layout>
      <GlassContainer>
        {documentToReactComponents(richText, options)}
      </GlassContainer>
    </Layout>
  )
}

export default BlogPage

export const Head = () => <title>Blog | Andrew Le's Website</title>

export const pageQuery = graphql`{
  contentfulBlogPost(contentful_id: {eq: "6VPPb5jhQeprZcfuVfso6m"}) {
    id
    title
    subtitle {
      subtitle
    }
    content {
      raw
    }
  }
}`