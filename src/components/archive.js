import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Archive = () => {
  const data = useStaticQuery(graphql`
    query BlogPostArchive {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges
  return (
    <>
      <aside>
        <h3>Archive</h3>
        {posts.map(post => (
          <li>{post.node.frontmatter.title}</li>
        ))}
      </aside>
    </>
  )
}

export default Archive
