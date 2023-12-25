import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { BlogPostContainer } from "../styles/blog.styles"

const SingleBlogPage = ({ data }) => {
  const imgList = data.contentfulBlogPost.content.references;
  const richText = JSON.parse(data.contentfulBlogPost.content.raw);
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // const alt = node.data.target.fields.title['en-US'];
        // const url = node.data.target.fields.file['en-US'].url;
        // return <img alt={alt} src={url} />
        const imgObj = imgList.find(img => img.contentful_id === node.data.target.sys.id)
        return <img alt={imgObj.title} src={imgObj.url} />
      }
    }
  }

  return (
    <Layout>
      <div style={{ alignSelf: 'normal', display: 'flex', alignItems: 'center' }}>
        <img src={data.contentfulBlogPost.icon.url} alt={data.contentfulBlogPost.icon.title} />
        <h1 style={{ margin: 0, marginLeft: 10 }}>{data.contentfulBlogPost.title}</h1>
      </div>
      <h3 style={{ alignSelf: 'normal' }}>{data.contentfulBlogPost.subtitle}</h3>
      <BlogPostContainer>
        {documentToReactComponents(richText, options)}
      </BlogPostContainer>
    </Layout>
  )
}

export default SingleBlogPage

export const Head = ({ data }) => <title>{data.contentfulBlogPost.title} | Andrew Le's Website</title>

export const pageQuery = graphql`
  query BlogPostByPath($url: String) {
    contentfulBlogPost(path: {eq: $url}) {
      id
      title
      subtitle
      icon {
        title
        url
      }
      content {
        raw
        references {
          contentful_id
          title
          url
        }
      }
    }
  }
`