import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import TagManager from 'react-gtm-module'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import About from '../components/About'
import Nav from '../components/Nav'
import Testimony from '../components/Testimony'
import Features from '../components/Features'
import Cancelation from '../components/Cancelation'


const tagManagerArgs = {
  gtmId: 'GTM-N9H2WJL',
}
if (typeof window !== 'undefined') {
  TagManager.initialize(tagManagerArgs)
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <section className="hero is-large is-primary">
        <div className="hero-head">
          <div className="container">
            <Nav />
          </div>
        </div>
        <div className="hero-body hero-has-bg">
          <div className="container">
            <div className="columns">
              <div className="column is-8-desktop is-offset-2-desktop">
                <h1 className="title is-1 is-spaced">iCare Remedial Massage</h1>
                <h2 className="subtitle is-4">
                  The best time to take care of you
                </h2>
                {/* <div className="buttons are-medium">
                  <a
                    className="button is-primary"
                    href="https://wuasianmassage.mylocalsalon.com/onlinebooking/v7410/Steps/SelectServices.aspx"
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </span>
                    <span>Book Now</span>
                  </a>

                  <a
                    className="button is-primary"
                    href="https://www.wusdayspanmassage.com.au/price/gift-voucher/"
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faTicketAlt} />
                    </span>
                    <span>Gift Voucher</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section features">
        <Features />
      </section>
      <section className="section has-text-centered">
        <figure style={{ maxWidth: `960px`, margin: `0 auto` }}>
          <GatsbyImage
            image={data.JennyAdQuery.childImageSharp.gatsbyImageData}
            alt="pregnancy massage ad" />
        </figure>
      </section>
      <section className="section about">
        <About />
      </section>
      <section className="section qualification">
        <div className="container">
          <h1 className="title">Qualification</h1>
          <div className="content">
            <div className="column is-10 is-offset-1">
              <ul>
                <li>Diploma of Remedial Massage (HLT50307)</li>
                <li>Practitioner of Pregnancy Massage @ NurtureLife&reg;</li>
                <li>Member of Massage & Myotherapy Association</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <Cancelation></Cancelation>
      </section>
      <section className="section testimony">
        <Testimony avatarInfo={data.AvatarQueryAll.edges} />
      </section>
      {/* <section className="section map">
        <Map />
      </section> */}
    </Layout>
  );
}

export default IndexPage

export const query = graphql`query allImgsQuery {
  AvatarQueryAll: allFile(filter: {relativePath: {regex: "/avatar/.*.jpg/"}}) {
    edges {
      node {
        relativePath
        name
        childImageSharp {
          gatsbyImageData(width: 150, layout: FIXED)
        }
      }
    }
  }
  JennyAdQuery: file(relativePath: {eq: "jennyad.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 960, placeholder: NONE, layout: CONSTRAINED)
    }
  }
}
`
