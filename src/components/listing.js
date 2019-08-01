import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

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
          <article key={slug}>
            <Link to={`posts${slug}`}>
              <h2>{title}</h2>
            </Link>
            <p>{date}</p>
            <p>{excerpt}</p>
            <Link to={`posts${slug}`}>Read more</Link>
          </article>
        )
      )}
    </div>
  )
}

export default Listing
