/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

const PostLayout = ({ data }) => {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

export default PostLayout
