import React, { Component } from 'react'

export default class Map extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Where to find me? (In Wu's Day Spa n Massage)</h1>
        <div className="content">
          <ul>
            <li>
              <a href="https://goo.gl/maps/jbuXrPCDt1X84W5K8">
                Address: 2A Progress St, Morley WA 6062
              </a>
            </li>
            <li>
              <a href="tel:+61415040248">Tel: 0415 040 248</a>
            </li>
          </ul>
        </div>
        <div className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA__wKfByOk2SLaucCgxbf-JZBprIKtgp4
      &q=icare+remedial+massage,Morley+WA"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            title="iCare Remedial Massage"
          />
        </div>
      </div>
    )
  }
}

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423.4247698344434!2d115.89634430994985!3d-31.895777626290965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e3e8d8b487d76b5!2siCare%20Remedial%20Massage(in%20Wu%E2%80%99s%20Day%20Spa%20and%20Massage)!5e0!3m2!1sen!2sau!4v1629618107438!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
