import React from 'react'

import PropTypes from 'prop-types'

import './pay-links-card.css'

const PayLinksCard = (props) => {
  return (
    <div className="pay-links-card-container">
      <div className="pay-links-card-pay-links">
        <svg
          viewBox="0 0 1024 1024"
          id="invoice-icon"
          className="pay-links-card-pay-links-icon"
        >
          <path d="M392.491 580.224c42.325 56.619 103.68 90.709 168.448 100.053s133.248-6.059 189.867-48.384c10.197-7.637 19.84-16 27.947-24.235l127.787-127.744c49.621-51.371 73.472-117.376 72.363-182.827s-27.264-130.603-78.123-179.669c-50.005-48.299-114.731-72.192-179.157-71.808-63.659 0.341-127.275 24.363-176.512 71.808l-73.856 73.429c-16.725 16.597-16.811 43.648-0.171 60.331s43.648 16.811 60.331 0.171l72.917-72.491c32.853-31.659 75.221-47.659 117.76-47.915 43.051-0.256 86.059 15.659 119.381 47.872 33.92 32.768 51.328 76.075 52.096 119.808s-15.147 87.637-47.36 121.003l-128.213 128.256c-4.864 4.949-11.221 10.539-18.261 15.787-37.76 28.245-83.285 38.485-126.592 32.256s-84.096-28.928-112.299-66.688c-14.123-18.859-40.832-22.741-59.733-8.619s-22.741 40.832-8.619 59.733zM631.509 443.776c-42.325-56.619-103.68-90.709-168.448-100.053s-133.291 6.059-189.909 48.384c-10.197 7.637-19.797 16-27.947 24.235l-127.787 127.744c-49.621 51.371-73.472 117.376-72.363 182.827s27.264 130.603 78.123 179.669c50.005 48.299 114.731 72.192 179.157 71.808 63.659-0.341 127.275-24.363 176.512-71.808l73.515-73.515c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-72.363 72.491c-32.853 31.659-75.221 47.659-117.76 47.915-43.051 0.256-86.059-15.659-119.381-47.872-33.92-32.768-51.328-76.075-52.096-119.808s15.147-87.637 47.36-121.003l128.213-128.256c4.864-4.949 11.221-10.539 18.261-15.787 37.76-28.245 83.285-38.485 126.592-32.256s84.096 28.928 112.299 66.688c14.123 18.859 40.832 22.741 59.733 8.619s22.741-40.832 8.619-59.733z"></path>
        </svg>
        <h2 className="pay-links-card-pay-links1">{props.title1}</h2>
        <span className="pay-links-card-feature">{props.description}</span>
        <span className="pay-links-card-read-more">{props.action}</span>
      </div>
    </div>
  )
}

PayLinksCard.defaultProps = {
  title1: 'Pay Links',
  action: 'Read More',
  description:
    'Create checkout experiences with ease – no coding required! Price in any currency, including fiat and crypto, and let customers pay with any token – all with integrated swap capabilities.',
}

PayLinksCard.propTypes = {
  title1: PropTypes.string,
  action: PropTypes.string,
  description: PropTypes.string,
}

export default PayLinksCard
