import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/FilestWeb.png'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        > 
          <h2 className="major">Who are we?</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Stuff about us and what we do....
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            More stuff...
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            This is an example of our work for the mobile company <a href="https://www.filest.ca" target="_blank">Filest</a>
          </p>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Here will be an example of another website
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Pricing</h2>

          <p>
              <span>$0 Down</span>, for a standard 5 page small business
              website. If you need more than that then we have to do custom
              pricing based on the scope of work.
          </p>

          <div id="pricingRow" class="row">
            <div class="col">
              <div id ="pricingBox" class="box" data-aos="fade-up">
                <h3>Standard</h3>
                <h4> 175 / month</h4>
                <ul>
                  <li>A modern, responsive, mobile-optimized design</li>
                  <li>Up to 3 redesigns</li>
                  <li>Around the clock support</li>
                  <li>Complete end-to-end copywriting services</li>
                  <li class="na">Blog, Ecommerce, CMS</li>
                </ul>
              </div>
            </div>

            <div class="col">
              <div id ="pricingBox" class="box featured" data-aos="fade-up" >
                <h3>Custom</h3>
                <h4>175+ / month</h4>
                <ul>
                  <li>A modern, responsive, mobile-optimized design</li>
                  <li>Up to 3 redesigns</li>
                  <li>Around the clock support</li>
                  <li>Complete end-to-end copywriting services</li>
                  <li>Blog, Ecommerce, CMS</li>
                </ul>
              </div>
            </div>
          </div>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {/* <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
