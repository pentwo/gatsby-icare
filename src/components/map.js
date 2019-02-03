import React, { Component } from 'react'

export default class Map extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Where to find me? (In Wu's Day Spa n Massage)</h1>
        <div className="content">
          <ul>
            <li>Address: 2A Progress St, Morley WA 6062</li>
            <li>
              <a href="tel:+61861615173">Tel: 61615173</a>
            </li>
          </ul>
        </div>
        <div className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA__wKfByOk2SLaucCgxbf-JZBprIKtgp4
      &q=Wu+Massage,Morley+WA"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            title="wu's day spa map"
          />
        </div>
      </div>
    )
  }
}
