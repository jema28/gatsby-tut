import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Archive = () => {
  const archivePostQuery = useStaticQuery(graphql`
    query BlogPostArchive {
      allMarkdownRemark(
        limit: 5
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
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
  const posts = archivePostQuery.allMarkdownRemark.edges

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ul>
          {posts.map(({ node: { frontmatter: { title, slug } } }) => (
            <Link to={`posts${slug}`} key={slug}>
              <li>{title}</li>
            </Link>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Archive
