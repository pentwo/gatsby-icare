import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Hero />
    <section className="section service">
      <div className="container">
        <h1 className="title">Remedial/Sports Massage</h1>
        <div className="columns">
          <div className="column is-half-desktop is-offset-one-quarter-desktop">
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <th>Time</th>
                <th>Price</th>
                <th>with Aromatherapy (+$10)</th>
              </thead>
              <tbody>
                <tr>
                  <td>30 mins</td>
                  <td>$45</td>
                  <td>$55</td>
                </tr>
                <tr>
                  <td>45 mins</td>
                  <td>$65</td>
                  <td>$75</td>
                </tr>
                <tr className="">
                  <td>1 hour </td>
                  <td>$85</td>
                  <td>$95</td>
                </tr>
                <tr className="is-selected">
                  <td>1 hour 15 mins</td>
                  <td>$110</td>
                  <td>
                    $120 <span className="tag is-Danger">Most Popular</span>
                  </td>
                </tr>
                <tr>
                  <td>1 hour 30 mins</td>
                  <td>$130</td>
                  <td>$140</td>
                </tr>
              </tbody>
            </table>
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
        </div>
      </div>
    </section>
    <section className="section service">
      <div className="container">
        <h1 className="title">Aromatherapy Massage</h1>
        <div className="columns">
          <div className="column is-half-desktop is-offset-one-quarter-desktop">
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
        </div>
      </div>
    </section>
    <section className="section service">
      <div className="container">
        <h1 className="title">Pregnancy/Prenatal Massage</h1>
        <div className="columns">
          <div className="column is-half-desktop is-offset-one-quarter-desktop">
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <th>Time</th>
                <th>Price</th>
              </thead>
              <tbody>
                <tr className="is-selected">
                  <td>1 hour </td>
                  <td>
                    $85 <span className="tag is-Danger">Most Popular</span>
                  </td>
                </tr>
                <tr>
                  <td>1 hour 30 mins</td>
                  <td>$130</td>
                </tr>
              </tbody>
            </table>
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
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
