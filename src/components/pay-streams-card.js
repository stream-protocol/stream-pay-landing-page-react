import React from 'react'

import PropTypes from 'prop-types'

import './pay-streams-card.css'

const PayStreamsCard = (props) => {
  return (
    <div className="pay-streams-card-container">
      <div className="pay-streams-card-pay-streams">
        <div className="pay-streams-card-pay-streams-icon">
          <svg
            viewBox="0 0 1024 1024"
            className="pay-streams-card-pay-streams-icon1"
          >
            <path d="M928 128h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM96 192h832c17.346 0 32 14.654 32 32v96h-896v-96c0-17.346 14.654-32 32-32zM928 832h-832c-17.346 0-32-14.654-32-32v-288h896v288c0 17.346-14.654 32-32 32zM128 640h64v128h-64zM256 640h64v128h-64zM384 640h64v128h-64z"></path>
          </svg>
        </div>
        <h2 className="pay-streams-card-pay-streams1">{props.title1}</h2>
        <span className="pay-streams-card-feature">{props.description}</span>
        <span className="pay-streams-card-read-more">{props.action}</span>
      </div>
    </div>
  )
}

PayStreamsCard.defaultProps = {
  description:
    'Easily configure recurring payments for BaaS subscriptions, digital content paywalls and web3 payments more with just a few clicks.',
  title1: 'Pay Streams',
  action: 'Read More',
}

PayStreamsCard.propTypes = {
  description: PropTypes.string,
  title1: PropTypes.string,
  action: PropTypes.string,
}

export default PayStreamsCard
