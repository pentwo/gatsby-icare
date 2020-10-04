import React, { Component } from 'react'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import testimony from '../data/testimony.json'

export default class Testimony extends Component {
  state = {
    quotes: {},
    avatar: {},
  }

  setTestimonies = async () => {
    this.setState({
      quotes: testimony,
    })
  }

  componentDidMount() {
    this.setTestimonies()
  }

  randomRenderQuote = () => {
    let randomNum = (Math.random() * 4) | 0

    if (this.state.quotes[randomNum] === undefined) return

    const { name, date, testimony } = this.state.quotes[randomNum]
    return <Quote name={name} date={date} testimony={testimony} key={name} />
  }

  renderQuote = () => {
    if (!Array.isArray(this.state.quotes)) return

    const { avatarInfo } = this.props
    return this.state.quotes.map(quote => {
      const image = avatarInfo.filter(i => {
        return i.node.name === quote.avatar ? i.node.name : false
      })

      return <Quote {...quote} avatarInfo={image[0].node} key={quote.avatar} />
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Testimonies</h1>
        <div className="quotes columns is-multiline is-centered">
          {this.renderQuote()}
        </div>
      </div>
    )
  }
}

const Quote = props => {
  const name = props.name.split(' ').join('-')
  return (
    <div className="column is-4 " id={`testimony-${name}`}>
      <figure className="image has-text-centered">
        <Img
          className=""
          alt={name}
          fixed={props.avatarInfo.childImageSharp.fixed}
          imgStyle={{ borderRadius: '50%' }}
          backgroundColor="true"
        />
      </figure>
      <p className="has-text-left">
        <i className="fas fa-quote-left" />
      </p>
      <FontAwesomeIcon icon={faQuoteLeft} />
      <blockquote className="quote" id="">
        {props.testimony}
      </blockquote>
      <p className="has-text-right">
        <FontAwesomeIcon icon={faQuoteRight} />
      </p>

      <p className="has-text-centered subtitle" id="">
        {props.name}
      </p>
    </div>
  )
}
