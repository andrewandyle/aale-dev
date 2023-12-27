import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { BlogList, BlogEntry } from "../styles/blog.styles"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Andrew Le's Blog</h1>
        <h4 style={{ marginBlockStart: 0 }}>
          My collection of pages to showcase my personal life! Made using the Contentful Headless CMS.
        </h4>
        <h2>Hobbies</h2>
        <BlogList>
          {data.allContentfulBlogPost.edges.map((post, index) => post.node.category === 'Hobbies' && (
            <Link key={post.node.contentful_id} to={post.node.path}>
              <BlogEntry key={post.node.contentful_id} index={index}>
                <div>
                  <img src={post.node.icon.url} alt={post.node.icon.title} />
                  <h3>{post.node.title}</h3>
                </div>
                <p>{post.node.subtitle}</p>
              </BlogEntry>
            </Link>
          ))}
        </BlogList>

        <h2>Projects</h2>
        <BlogList>
          {data.allContentfulBlogPost.edges.map((post, index) => post.node.category === 'Projects' && (
            <Link key={post.node.contentful_id} to={post.node.path}>
              <BlogEntry key={post.node.contentful_id} index={index}>
                <div>
                  <img src={post.node.icon.url} alt={post.node.icon.title} />
                  <h3>{post.node.title}</h3>
                </div>
                <p>{post.node.subtitle}</p>
              </BlogEntry>
            </Link>
          ))}
        </BlogList>
      </div>

    </Layout>
  )
}

export default BlogPage

export const Head = () => <title>Blog | Andrew Le's Website</title>

export const pageQuery = graphql`{
  allContentfulBlogPost(sort: {createdAt: DESC}) {
    edges {
      node {
        contentful_id
        title
        subtitle
        category
        icon {
          title
          url
        }
        path
      }
    }
  }
}`