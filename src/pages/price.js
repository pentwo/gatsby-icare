import React from 'react'
import { Link, graphql } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import BgImage from '../components/BgImage'

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Price" />
    <Hero />

    <BgImage
      fluid={data.bg2.childImageSharp.fluid}
      height="500px"
      overlayColor="#eeeeee90"
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
                href="https://wuasianmassage.mylocalsalon.com/onlinebooking/v7410/Steps/SelectServices.aspx"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </span>
                <span>Book Now</span>
              </a>
            </p>
          </div>
          <div className="table">
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <th>Time</th>
                <th>Price</th>
                <th>with Aromatherapy (+$10)</th>
              </thead>
              <tbody>
                <tr>
                  <td>30 mins</td>
                  <td>$50</td>
                  <td>$60</td>
                </tr>
                <tr>
                  <td>45 mins</td>
                  <td>$70</td>
                  <td>$80</td>
                </tr>
                <tr className="">
                  <td>1 hour </td>
                  <td>$90</td>
                  <td>$100</td>
                </tr>
                <tr className="is-selected">
                  <td>1 hour 15 mins</td>
                  <td>$115</td>
                  <td>
                    $125 <span className="tag is-Danger">Most Popular</span>
                  </td>
                </tr>
                <tr>
                  <td>1 hour 30 mins</td>
                  <td>$135</td>
                  <td>$145</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </BgImage>
    <BgImage
      fluid={data.bg3.childImageSharp.fluid}
      height="500px"
      overlayColor="#eeeeee90"
    >
      <section className="section">
        <div className="container section-flex">
          <div className="text">
            <h2 className="title">Fertility Massage Therapy</h2>
            <p className="control">
              <a
                className="button is-primary"
                href="https://wuasianmassage.mylocalsalon.com/onlinebooking/v7410/Steps/SelectServices.aspx"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </span>
                <span>Book Now</span>
              </a>
            </p>
          </div>
          <div className="table">
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <th>Time</th>
                <th>Price</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    First treatment (Including consultation) <br></br> 120 mins
                  </td>
                  <td>$220</td>
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
    <BgImage
      fluid={data.bg1.childImageSharp.fluid}
      height="500px"
      overlayColor="#eeeeee90"
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
                href="https://wuasianmassage.mylocalsalon.com/onlinebooking/v7410/Steps/SelectServices.aspx"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </span>
                <span>Book Now</span>
              </a>
            </p>
          </div>
          <div className="table">
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <th>Time</th>
                <th>Price</th>
              </thead>
              <tbody>
                <tr>
                  <td>1 hour </td>
                  <td>$90</td>
                </tr>
                <tr className="is-selected">
                  <td>1 hour 30 mins</td>
                  <td>
                    $135 <span className="tag is-Danger">Most Popular</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </BgImage>
    <BgImage
      fluid={data.bg4.childImageSharp.fluid}
      height="500px"
      overlayColor="#eeeeee90"
    >
      <section className="section">
        <div className="container section-flex">
          <div className="text">
            <h2 className="title">Aromatherapy Massage</h2>
            <p className="control">
              <a
                className="button is-primary"
                href="https://wuasianmassage.mylocalsalon.com/onlinebooking/v7410/Steps/SelectServices.aspx"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </span>
                <span>Book Now</span>
              </a>
            </p>
          </div>
          <div className="table">
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <th>Time</th>
                <th>Price</th>
              </thead>
              <tbody>
                <tr>
                  <td>30 mins</td>
                  <td>$45</td>
                </tr>
                <tr>
                  <td>45 mins</td>
                  <td>$65</td>
                </tr>
                <tr className="is-selected">
                  <td>1 hour </td>
                  <td>
                    $85 <span className="tag is-Danger">Most Popular</span>
                  </td>
                </tr>
                <tr>
                  <td>1 hour 15 mins</td>
                  <td>$110</td>
                </tr>
                <tr>
                  <td>1 hour 30 mins</td>
                  <td>$130</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </BgImage>
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

export default SecondPage
