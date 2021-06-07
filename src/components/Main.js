import PropTypes from 'prop-types'
import Alert from 'react-bootstrap/Alert'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/FilestWeb.png'
import pic03 from '../images/pic03.jpg'


function alertMessage(success){
  let message, class_name;
  if(success){
    message = "thank you"
    class_name= "success";
  }
  else {
    message = "wtf"
    class_name= "fail";
  }
  return(<div className={class_name} >
      {message}
  </div>);
}


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
          {/* <span className="image main">
            <img src={pic01} alt="" />
          </span> */}
          {/* <p>
            Stuff about us and what we do....
            By the way, check out my <a href="#work">awesome work</a>.
          </p> */}
          <p>
          We are a brother duo web agency making it affordable and easy for small businesses to have professional websites. 
          With over a decade of experience building websites, we started Ruby Labs with the mission of making it accessible 
          for people to get more clients and serve their community with a modern web presence. While other large-scale agencies 
          will ask you for thousands of dollars, we bring the same quality of work with greater attention to your needs and a pricing 
          model that won't break the bank. If you've wanted to establish a greater presence for your business online and you want to 
          work with people who will listen and take your needs seriously, call us today.
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
          <h2 className="major">Our Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            This is an example of our work for the mobile company <a href="https://www.filest.ca" target="_blank">Filest</a>
          </p>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Here will be an example of another website
          </p> */}
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

          <p> We created our pricing model because of our high degree of confidence in our ability to provide value for small businesses.
          These days you need a modern and highly converting website before you can even take your business's online presence off the ground. 
          We are so confident in our ability to partner businesses just like yours that we work with all of our clients on a month to month cancel any time
          for any reason agreement. For any questions about our pricing 
          <button
            onClick={() => {
             // this.props.onCloseArticle()

              this.props.onOpenArticle('contact',true)
            }}
          >
            <span>give us a call today.</span>
          </button>
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
          <p>Contact at us at (647) - 409 - 8631 or email us at rubylabsmedia@gmail.com</p>
          {/* <div className="contact">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" value={this.props.contactName} onChange={(e)=>this.props.handleInput(e)} />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" value={this.props.contactEmail} onChange={(e)=>this.props.handleInput(e)} />
            </div>
            <div className="field">
              <label htmlFor="email">Phone Number</label>
              <input type="text" name="number" id="number" value={this.props.contactNumber} onChange={(e)=>this.props.handleInput(e)} />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" value={this.props.contactMessage} onChange={(e)=>this.props.handleInput(e)} ></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" 
                  onClick={() => {
                    this.props.onSubmit()
                  }}
                />
              </li>
              <li>
                <input type="reset" value="Reset" 
                  onClick={() => {
                    this.props.onReset()
                  }}/>
              </li>
            </ul> */}

          

            {/* </div> */}
          
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  contactName: PropTypes.string,
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onOpenArticle: PropTypes.func,
  onCloseArticle: PropTypes.func,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
  handleInput: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
