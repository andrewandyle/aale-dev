import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { BlogList, BlogEntry } from "../styles/blog.styles"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <h1>Andrew Le's Blog</h1>
      <BlogList>
        {data.allContentfulBlogPost.edges.map((post) => (
          <Link key={post.node.contentful_id} to={post.node.path}>
            <BlogEntry key={post.node.contentful_id}>
              <div>
                <img src={post.node.icon.url} alt={post.node.icon.title} />
                <h3>{post.node.title}</h3>
              </div>
              <p>{post.node.subtitle}</p>
            </BlogEntry>
          </Link>
        ))}
      </BlogList>
    </Layout>
  )
}

export default BlogPage

export const Head = () => <title>Blog | Andrew Le's Website</title>

export const pageQuery = graphql`{
  allContentfulBlogPost {
    edges {
      node {
        contentful_id
        title
        subtitle
        icon {
          title
          url
        }
        path
      }
    }
  }
}`