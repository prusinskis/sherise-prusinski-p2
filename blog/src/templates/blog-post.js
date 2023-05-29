import React from 'react';
import {graphql} from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../components/layout';
import { H1 } from '../components/Heading'

const BlogPost = ({ data }) => {
    const { title, shortDescription, featuredImage } = data.contentfulPageBlogPost;

    return (
      <Layout>
        <GatsbyImage image={featuredImage.GatsbyImageData} />
        <H1>{title}</H1>
        <div
          dangerouslySetInnerHTML={{
            __html: shortDescription.childMarkdownRemark.html,
          }}
        ></div>
      </Layout>
    )
}

export default BlogPost;

export  const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulPageBlogPost(slug: { eq: $slug }) {
      title
      slug
      shortDescription {
        childMarkdownRemark {
          html
        }
      }
      featuredImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 960)
      }
    }
  }
`