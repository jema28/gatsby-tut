import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-size: 0.75rem;
    color: #524763;
  }
`

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
        <ArchiveList>
          {posts.map(({ node: { frontmatter: { title, slug } } }) => (
            <Link to={`posts${slug}`} key={slug}>
              <li>{title}</li>
            </Link>
          ))}
        </ArchiveList>
      </aside>
    </>
  )
}

export default Archive
