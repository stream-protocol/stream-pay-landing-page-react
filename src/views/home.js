import React from 'react'

import { Helmet } from 'react-helmet'

import InvoiceCard from '../components/invoice-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>StreamPay Landing page</title>
        <meta property="og:title" content="StreamPay Landing page" />
        <meta
          property="og:description"
          content="StreamPay is set to revolutionize the online payment industry with its cryptocurrency payment infrastructure."
        />
      </Helmet>
      <div className="home-hero">
        <h1 className="home-heading">Revolutionizing the payment industry</h1>
        <span className="home-description">
          <span>Stream</span>
          <span className="home-text01">Pay</span>
          <span>
            {' '}
            is building the next generation payment infrastructure with Solana
            blockchain technology, and
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            will provide a platform for bringing the gap between merchant and
            cryptocurrency users.
          </span>
        </span>
        <div className="home-btn-group">
          <button className="home-get-started button">Get Started</button>
          <button className="home-whitepaper button">Whitepaper</button>
        </div>
      </div>
      <header data-role="Header" className="home-header">
        <img
          alt="logo"
          src="/playground_assets/logo%20component%20light-200h.png"
          className="home-logo"
        />
        <nav className="home-nav">
          <span className="home-wallet">Wallet</span>
          <span className="home-card">Card</span>
          <span className="home-features">Gateways</span>
          <span className="home-bussiness">Bussiness</span>
          <span className="home-swap">Swap</span>
          <span className="home-about">About</span>
          <span className="home-f-a-q">FAQ</span>
        </nav>
        <div className="home-nav1"></div>
        <div className="home-btn-group1">
          <button className="home-login button">Login</button>
          <button className="home-register button">Register</button>
        </div>
        <div data-role="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-nav2">
            <div className="home-container01">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image"
              />
              <div data-role="CloseMobileMenu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-container02">
        <div className="home-features1">
          <h1 className="home-web3-payments-protocol">
            <span>Web3 Payments Protocol</span>
            <br></br>
          </h1>
          <span className="home-features2">
            StreamPay’s business products allow both online and in-person
            merchants to accept cryptocurrency payments easily and with no fuss
          </span>
          <div className="home-container03">
            <InvoiceCard
              rootClassName="rootClassName"
              title3="Pay Links"
            ></InvoiceCard>
            <InvoiceCard
              rootClassName="rootClassName3"
              title3="Pay Streams"
            ></InvoiceCard>
            <InvoiceCard
              rootClassName="rootClassName5"
              title3="Invoice"
            ></InvoiceCard>
            <InvoiceCard
              rootClassName="rootClassName1"
              title3="e-Commerce"
            ></InvoiceCard>
          </div>
        </div>
        <div className="home-newsletter-banner">
          <div className="home-container04">
            <h1 className="home-newsletter">
              <span>Be the first to get the latest features</span>
            </h1>
            <span className="home-description1">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis, ut tincidunt lectus. Mauris luctus
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                rutrum mi ut rhoncus. Integer in dignissim tortor, id egestas
                ante. Proin at enim purus. Mauris ut felis nisi.
              </span>
            </span>
            <div className="home-container05">
              <input
                type="text"
                placeholder="Email here..."
                className="home-your-email-address input"
              />
              <button className="home-subscribe button">Subscribe</button>
            </div>
          </div>
          <img
            alt="Logo icon"
            src="/playground_assets/playstore.png"
            className="home-icon-img-mid"
          />
        </div>
        <div className="home-mid-banner">
          <h1 className="home-heading1">The Web3 payments platform</h1>
          <span className="home-description2">
            StreamPay provides a robust Solana-native payments system that
            seamlessly integrates with web3 solutions.
          </span>
          <div className="home-btn-group2">
            <button className="home-get-started1 button">Dashboard</button>
            <button className="home-read-more button">Presentation</button>
          </div>
        </div>
        <div className="home-gradient-footer-container"></div>
        <div className="home-gradient-container"></div>
        <footer className="home-footer">
          <div className="home-container06">
            <div className="home-container07">
              <div className="home-logo1">
                <img
                  alt="logo"
                  src="/playground_assets/stream-pay-logo-dark-200h.png"
                  className="home-logo2"
                />
              </div>
              <span className="home-slogan">
                <span>Payments Infrastructure for the Modern Era</span>
                <br></br>
              </span>
            </div>
            <div className="home-links-container">
              <div className="home-container08">
                <div className="home-product-container">
                  <span className="home-products">Product</span>
                  <span className="home-features3">Features</span>
                  <span className="home-pricing">Pricing</span>
                  <span className="home-developers">Developers</span>
                  <span>Releases</span>
                </div>
                <div className="home-company-container">
                  <span className="home-company">Company</span>
                  <span className="home-about1">About</span>
                  <span className="home-careers">Careers</span>
                  <span className="home-f-a-q1">FAQ</span>
                  <span>Blog</span>
                </div>
              </div>
              <div className="home-container09">
                <div className="home-contact">
                  <span className="home-contact-us">Contact Us</span>
                  <span className="home-email-address">
                    contact@streamprotocol.org
                  </span>
                </div>
                <div className="home-socials">
                  <span className="home-follow-us">Follow Us</span>
                  <div className="home-icon-group1">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-twitter"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-instagram"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-facebook"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-separator"></div>
          <span className="home-copyright">
            © 2022 Stream Protocol. All Rights Reserved.
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Home
