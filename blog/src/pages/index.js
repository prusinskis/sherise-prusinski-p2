import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage} from "gatsby-plugin-image"
import styled from 'styled-components'
import {Box, Card, Heading} from 'rebass'
import Layout from "../components/layout"
import Seo from "../components/seo"

const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px,1fr));
`
const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Grid>
      {data.allContentfulPageBlogPost.edges.map(edge => (
        <Card width={256} p={3} key={edge.node.id}>
          <Link to={edge.node.slug}>
            <GatsbyImage image={edge.node.featuredImage.gatsbyImageData} />
          </Link>
          <Heading>{edge.node.title}</Heading>
          <div>{edge.node.shortDescription.childMarkdownRemark.excerpt}</div>
        </Card>
      ))}
    </Grid>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query MyAllContentfulPageBlogPost {
    allContentfulPageBlogPost {
      edges {
        node {
          id
          title
          slug
          shortDescription {
            childMarkdownRemark {
              excerpt
            }
          }
          featuredImage {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 600
            )
          }
        }
      }
    }
  }
`
