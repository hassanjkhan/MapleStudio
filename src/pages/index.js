import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
// import firebase from "gatsby-plugin-firebase"
import firebase from "firebase"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      contact_name: '',
      contact_email: '',
      contact_number: '',
      contact_message: '',
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.openArticle = this.openArticle.bind(this);
    const firebaseConfig = {
      apiKey: "AIzaSyAU3hCvBAwKyZ7lULDKOOn0XraBnkQuCaQ",
      authDomain: "maplestudio-4f0fd.firebaseapp.com",
      projectId: "maplestudio-4f0fd",
      storageBucket: "maplestudio-4f0fd.appspot.com",
      messagingSenderId: "485345047309",
      appId: "1:485345047309:web:dcdbfd55c4891f41bab644",
      measurementId: "G-4Q43LVNTEL"
    };
    
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  openArticle(article){
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)
  }
  handleOpenArticle(article, transition) {
    if(transition){
      this.handleCloseArticle();
      setTimeout(() => {
           this.openArticle(article) 

      }, 350);
    } else {
      this.openArticle(article)
    }
  

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }
  handleInput(e){
/**
    switch(e.target.name){
      case "name":
        this.
        break;
      case "email":
        break;
      case "number":
        break;
      case "message":
        break;
    }
       */
    let newState = {};
    newState["contact_" + e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleReset(){
    this.setState(
    {
      contact_name: '',
      contact_email: '',
      contact_number: '',
      contact_message: '',
    })
  }
  handleSubmit(){

    
    let text = this.state.contact_message 
      text+= "\nPhone Number: " + this.state.contact_number;
      text+= "\nName: " + this.state.contact_name;
      text+= "\nEmail: " + this.state.contact_email;
      
    const to = "rubylabsmedia@gmail.com"
    const subject = "Customer Contact: " + this.state.contact_name + " " + this.state.contact_number
    const email = firebase.functions().httpsCallable("contactEmailTrigger");
    email({
        to,
        subject,
        text,
      }).then((result) => {
        console.log(result.data.output);
      }).catch((error) => {
        console.log(`error: ${JSON.stringify(error)}`);
      });
    this.handleCloseArticle();
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onOpenArticle={this.handleOpenArticle}
              onCloseArticle={this.handleCloseArticle}
              contactEmail={this.state.contact_email}
              contactName={this.state.contact_name}
              contactNumber={this.state.contact_number}
              contactMessage={this.state.contact_message}
              onSubmit={this.handleSubmit}
              onReset={this.handleReset}
              handleInput={this.handleInput}
              setWrapperRef={this.setWrapperRef}
            />
            
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
