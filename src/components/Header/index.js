import React, { Component } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"
import hamburgerSvg from "../icons/iconmonstr-menu-1.svg"
import styles from "./index.css"

export default class Header extends Component {
  constructor() {
    super()

    this.state = { navShown: false }
    this._toggleResponsiveNav = this._toggleResponsiveNav.bind(this)
    this._resetRespNav = this._resetRespNav.bind(this)
  }

  _toggleResponsiveNav() {
    this.setState({navShown: !this.state.navShown})
  }

  _resetRespNav(){
    this.setState({navShown: false})
  }

  render() {
    var respNavClass = this.state.navShown ? (styles.navPart1 + ' ' + styles.navShown) : styles.navPart1

    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link className={styles.logoText}
                to={ "/" }>
            {'Trailer Leasing, LLC'}
          </Link>

          <div className={respNavClass}>
            <span onClick={this._toggleResponsiveNav}
                  className={styles.closebtn}>
              &times;
            </span>

            <Link
              onClick={this._resetRespNav}
              className={ styles.link }
              to={ "/" }
            >
              { "Home" }
            </Link>
            <Link
              onClick={this._resetRespNav}
              className={ styles.link }
              to={ "/about" }
            >
              { "About" }
            </Link>
            <Link
              onClick={this._resetRespNav}
              className={ styles.link }
              to={ "/application" }
            >
              { "Application" }
            </Link>
            <Link
              onClick={this._resetRespNav}
              className={ styles.link }
              to={ "/pay-online" }
            >
              { "Pay Online" }
            </Link>
            <Link
              onClick={this._resetRespNav}
              className={ styles.link }
              to={ "/leasing-terms" }
            >
              { "Leasing Terms" }
            </Link>
            <Link
              onClick={this._resetRespNav}
              className={ styles.link }
              to={ "/contact-us" }
            >
              { "Contact Us" }
            </Link>
          </div>

          <Svg className={styles.hamburger}
               onClick={this._toggleResponsiveNav}
               svg={ hamburgerSvg }
               cleanup />
        </nav>
      </header>
    )
  }
}
