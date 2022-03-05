import React from 'react'
import { graphql } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone }  from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import BgImage from '../components/BgImage'
import Cancelation from '../components/Cancelation'

const PricePage = ({ data }) => (
  <Layout>
    <SEO title="Price" />
    <Hero />
{/* Remedial */}
<BgImage
      fluid={data.bg2.childImageSharp.fluid}
      title="Remedial Massage"
      height="500px"
      overlayColor="#eeeeee90"
      alt=""
    >
      <section className="section">
        <div className="container section-flex">
          <div className="text">
            <h2 className="title">Remedial/Sports Massage</h2>
            <small>
              <i>*All Health Fund Rebate Are Available</i>
            </small>
            <p className="control">
              <a
                className="button is-primary"
                href="tel:+61431192844"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>Call or Text for Booking</span>
              </a>
            </p>
          </div>
          <div className="table">
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>          
                <tr>
                  <td>1 hour </td>
                  <td>$110</td>
                  
                </tr>
                <tr className="is-selected">
                  <td>1 hour 15 mins</td>
                  <td>$120 <span className="tag is-Danger">Most Popular</span></td>
                  
                </tr>
                <tr>
                  <td>1 hour 30 mins</td>
                  <td>$145</td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </BgImage>
    {/* Fertility */}
    <BgImage
      fluid={data.bg3.childImageSharp.fluid}
      title="Fertility Massage"
      height="500px"
      overlayColor="#eeeeee90"
      alt=""
    >
      <section className="section">
        <div className="container section-flex">
          <div className="text">
            <h2 className="title">Fertility Massage Therapy</h2>
            <p className="control">
              <a
                className="button is-primary"
                href="tel:+61431192844"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>Call or Text for Booking</span>
              </a>
            </p>
          </div>
          <div className="table">
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Initial treatment (including consultation) <br></br> 120
                    mins
                  </td>
                  <td>$250</td>
                </tr>
                <tr>
                  <td>
                    Follow up treatments<br></br> 90 mins
                  </td>
                  <td>$170</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </BgImage>
    {/* Pregnancy */}
    <BgImage
      fluid={data.bg1.childImageSharp.fluid}
      title="Pregnancy Massage"
      height="500px"
      overlayColor="#eeeeee90"
      alt=""
    >
      <section className="section">
        <div className="container section-flex">
          <div className="text">
            <h2 className="title">Pregnancy/Prenatal Massage</h2>
            <small>
              <i>*All Health Fund Rebate Are Available</i>
            </small>
            <p className="control">
              <a
                className="button is-primary"
                href="tel:+61431192844"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>Call or Text for Booking</span>
              </a>
            </p>
          </div>
          <div className="table">
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 hour </td>
                  <td>$110</td>
                </tr>
                <tr>
                  <td>1 hour 15 mins</td>
                  <td>$120</td>
                </tr>
                <tr className="is-selected">
                  <td>1 hour 30 mins</td>
                  <td>
                    $145 <span className="tag is-Danger">Most Popular</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </BgImage>
    <section className="section">
      <Cancelation />
    </section>
  </Layout>
)

export const query = graphql`
  query {
    bg1: file(
      relativePath: { eq: "pregnancy-pregnant-motherboard-parenthoof.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg2: file(relativePath: { eq: "fertility-images/P1002714.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg3: file(
      relativePath: { eq: "fertility-images/fertility-massage-4.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg4: file(
      relativePath: {
        eq: "white-and-purple-flower-plant-on-brown-wooden-surface.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default PricePage
