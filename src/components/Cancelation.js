import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default class Cancelation extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Cancelation Policy</h1>
        <div className="columns">
          <div className="content">
            <div className="column is-10 is-offset-1">
              <p>
                Your business is valued, and your cooperation is appreciated. I
                understand that sometimes things happen. If you need to
                reschedule or cancel, please call me on
                <a href="tel:+61431192844"> 0431 192 844</a> 12 hours prior to
                your appointment. If you are unable to call 12 or more hours
                prior to your scheduled appointment you will be invoiced for 50%
                of the appointment fee. A missed appointment with no prior
                communication will incur a full appointment fee invoice.
                Emergency cancellations are determined at my discretion.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
