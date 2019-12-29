import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarAlt,
  faPhone,
  faHome,
  faHandHoldingHeart,
  faDollarSign,
  faTicketAlt,
  faHandPaper,
} from '@fortawesome/free-solid-svg-icons'

export default class Nav extends Component {
  // Get all "navbar-burger" elements
  componentDidMount() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger')
    )

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function(el) {
        el.addEventListener('click', function() {
          // Get the target from the "data-target" attribute
          var target = el.dataset.target
          var $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item navbar-logo is-size-1">
              iCare
            </Link>
            <a
              // onClick={gtag_report_conversion('tel:61861615173')}
              className="navbar-item"
              href="tel:+61861615173"
            >
              <FontAwesomeIcon icon={faPhone} />
              &nbsp; Tel: 61615173
            </a>
            <div className="navbar-burger burger" data-target="navMenu">
              <span /> <span /> <span />
            </div>
          </div>

          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                <FontAwesomeIcon icon={faHome} />
                &nbsp; Home
              </Link>
              <Link to="/about" className="navbar-item">
                <FontAwesomeIcon icon={faHandPaper} />
                &nbsp; About
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/service" className="navbar-link">
                  <FontAwesomeIcon icon={faHandHoldingHeart} />
                  &nbsp; Services
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <Link to="/service" className="navbar-item">
                    Remedial/Sports Massage
                  </Link>
                  <Link to="/fertility" className="navbar-item">
                    Fertility Massage Therapy
                  </Link>
                  <Link to="/service" className="navbar-item">
                    Pregnancy Massage
                  </Link>
                  <Link to="/service" className="navbar-item">
                    Aromatherapy Massage
                  </Link>
                </div>
              </div>
              <Link to="/price" className="navbar-item">
                <FontAwesomeIcon icon={faDollarSign} />
                &nbsp; Price
              </Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a
                      className="button is-primary is-outlined is-inverted"
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
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a
                      className="button is-primary is-outlined is-inverted"
                      href="https://www.wusdayspanmassage.com.au/price/gift-voucher/"
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon={faTicketAlt} />
                      </span>
                      <span>Gift Voucher</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}
