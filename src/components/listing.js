import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #333;
    text-decoration: none;
  }
  p {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
  .readmore {
    font-size: 0.75rem;
    text-decoration: underline;
    color: #524763;
  }
`

export const listingQuery = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query ListingQuery {
        allMarkdownRemark(
          limit: 10
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                slug
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}

const Listing = () => {
  const posts = listingQuery()
  return (
    <div>
      {posts.map(
        ({
          node: {
            excerpt,
            frontmatter: { title, slug, date }
          }
        }) => (
          <Post key={slug}>
            <Link to={`posts${slug}`}>
              <h2>{title}</h2>
            </Link>
            <p>{date}</p>
            <p>{excerpt}</p>
            <Link class="readmore" to={`posts${slug}`}>
              Read more
            </Link>
          </Post>
        )
      )}
    </div>
  )
}

export default Listing
