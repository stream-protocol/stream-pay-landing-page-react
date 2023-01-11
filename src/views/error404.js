import React from 'react'

import { Helmet } from 'react-helmet'

import './error404.css'

const Error404 = (props) => {
  return (
    <div className="error404-container">
      <Helmet>
        <title>Error404 - StreamPay Landing page</title>
        <meta property="og:title" content="Error404 - StreamPay Landing page" />
        <meta
          property="og:description"
          content="StreamPay is set to revolutionize the online payment industry with its cryptocurrency payment infrastructure."
        />
      </Helmet>
      <div className="error404-hero">
        <h1 className="error404-error404">Error404</h1>
        <span className="error404-description">Site is underconstuction</span>
      </div>
    </div>
  )
}

export default Error404
