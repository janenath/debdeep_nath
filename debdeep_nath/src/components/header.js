import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default class Header extends React.Component {
  state = {
     navActive: false
   }
 toggleNav = (e) => {
     this.setState({navActive: !this.state.navActive})
 }


render() {
 return(
   <header>
    <div className="headingContainer">
    <h1 className="siteHeading"><Link to="/">Debdeep Nath</Link></h1>
    <h2 className="siteSubheading">pediatric nurse practitioner</h2>
    </div>
     <div className="navContainer">
       <div className="hamburger">
         <FontAwesomeIcon icon={faBars} onClick={this.toggleNav}/>
       </div>
       <nav className={`navbar + ${this.state.navActive}`}> 
        <Link className="navLink" to="/">home</Link>
        <Link className="navLink" to="/about">about</Link>
        <Link className="navLink" to="/blog">blog</Link>
        <Link className="navLink" to="/contact">contact</Link>
       </nav> 
     </div>
   </header>
 )

}
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

