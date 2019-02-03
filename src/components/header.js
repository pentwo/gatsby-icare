import PropTypes from 'prop-types'
import React from 'react'

import Nav from '../components/nav'

const Header = ({ siteTitle }) => <Nav />

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
