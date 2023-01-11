import React from 'react'

import PropTypes from 'prop-types'

import './e-commerce-card.css'

const ECommerceCard = (props) => {
  return (
    <div className="e-commerce-card-container">
      <div className="e-commerce-card-e-commerce-feature">
        <div className="e-commerce-card-e-commerce-icon">
          <svg
            viewBox="0 0 1024 1024"
            id="e-commerce-icon"
            className="e-commerce-card-e-commerce-icon"
          >
            <path d="M384 928c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
            <path d="M1024 928c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
            <path d="M1024 512v-384h-768c0-35.346-28.654-64-64-64h-192v64h128l48.074 412.054c-29.294 23.458-48.074 59.5-48.074 99.946 0 70.696 57.308 128 128 128h768v-64h-768c-35.346 0-64-28.654-64-64 0-0.218 0.014-0.436 0.016-0.656l831.984-127.344z"></path>
          </svg>
        </div>
        <h2 className="e-commerce-card-infrastructure">{props.title1}</h2>
        <span className="e-commerce-card-feature">{props.description}</span>
        <span className="e-commerce-card-read-more">{props.action}</span>
      </div>
    </div>
  )
}

ECommerceCard.defaultProps = {
  title1: 'e-Commerce',
  action: 'SEE MORE',
  description:
    "StreamPay is a global decentralized payment platform built on top of Solana's highly scalable blockchain.",
}

ECommerceCard.propTypes = {
  title1: PropTypes.string,
  action: PropTypes.string,
  description: PropTypes.string,
}

export default ECommerceCard
