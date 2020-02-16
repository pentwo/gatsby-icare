import React, { Component } from 'react'
import Nav from '../components/nav'

export default class Hero extends Component {
  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-head">
          <div className="container">
            <Nav />
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="column is-8-desktop is-offset-2-desktop">
              <h1 className="title is-1 is-spaced">
                {this.props.title ? this.props.title : 'iCare Remedial Massage'}
              </h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
