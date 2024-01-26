import * as React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { BlogPostHeader, BlogPostContainer } from "../styles/blog.styles"

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
        if (imgObj.url.includes("videos")) {
          return (
            <center>
              <video preload="metadata" controls>
                <source src={`${imgObj.url}#t=0.001`} type="video/mp4" />
                <track kind="captions" />
              </video>
            </center>
          )
        }
        return <img alt={imgObj.title} src={imgObj.url} />
      }
    }
  }

  return (
    <Layout>
      <Link
        to="/blog"
        style={{
          color: 'white',
          alignSelf: 'normal',
          marginBottom: 30,
          fontSize: 18,
          fontWeight: 700
        }}
      >&#8592; Back</Link>
      <BlogPostHeader>
        <img src={data.contentfulBlogPost.icon.url} alt={data.contentfulBlogPost.icon.title} />
        <h1>{data.contentfulBlogPost.title}</h1>
      </BlogPostHeader>
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