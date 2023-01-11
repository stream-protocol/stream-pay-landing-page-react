import React from 'react'

import PropTypes from 'prop-types'

import './navigation-menu.css'

const NavigationMenu = (props) => {
  return (
    <nav className={`navigation-menu-nav ${props.rootClassName} `}>
      <span className="navigation-menu-wallet">{props.text}</span>
      <span className="navigation-menu-card">{props.text1}</span>
      <span className="navigation-menu-gateway">{props.text11}</span>
      <span className="navigation-menu-bussiness">{props.text2}</span>
      <span className="navigation-menu-swap">{props.text3}</span>
      <span className="navigation-menu-about">{props.text4}</span>
      <span className="navigation-menu-f-a-q">{props.text41}</span>
    </nav>
  )
}

NavigationMenu.defaultProps = {
  text1: 'Card',
  rootClassName: '',
  text: 'Wallet',
  text4: 'About',
  text2: 'Bussiness',
  text3: 'Swap',
  text11: 'Features',
  text41: 'FAQ',
}

NavigationMenu.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text11: PropTypes.string,
  text41: PropTypes.string,
}

export default NavigationMenu
