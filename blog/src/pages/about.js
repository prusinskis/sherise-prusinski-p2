import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const About = ({ data }) => {
    const { name, company } = data.site.siteMetadata.contact;
    
    return (
      <Layout>
        <Seo title="Home" />
        <h1>About Us</h1>
        <p>{`${company} was started by ${name} in 2023. `}</p>
        <p>{`At ${company} we just make great food!`}</p>
        <p>A mobile restaurant!!! This is where you will find delectable and authentic food from world cuisines.</p>
        <p>Weekly different menu! Daily different cuisines !!</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45 rem` }}>
          <StaticImage
            src="../images/foodtruck.jpg"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby icon"
            style={{ marginBottom: `1.45 rem` }}
          />
        </div>
        <Link to="/">Home</Link>
      </Layout>
    )
}

export default About

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                    name
                    company
                }
            }
        }
    }
`
