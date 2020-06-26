import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <h1 className="siteHeading"><Link to="/">{siteTitle}</Link></h1>
    <h2 className="siteSubheading">pediatric nurse practitioner</h2>
    <div className="navContainer">
      <Link className="navLink" to="/">home</Link>
      <Link className="navLink" to="/about">about</Link>
      <Link className="navLink" to="/blog">blog</Link>
      <Link className="navLink" to="/contact">contact</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
