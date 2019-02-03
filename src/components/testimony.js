import React, { Component } from 'react'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export default class Testimony extends Component {
  state = {
    quotes: {},
    avatar: {},
  }

  setTestimonies = async () => {
    await fetch('/testimony.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          quotes: data,
        })
      })
  }

  componentDidMount() {
    this.setTestimonies()
    // this.setState({
    //   avatar: { ...this.props.avatarInfo },
    // })
  }
  componentDidUpdate() {
    // this.renderQuote()
    // this.timer = setInterval(this.randomRenderQuote(), 3000)
  }

  componentWillUnmount() {
    // clearInterval(this.timer)
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

    console.log('avatarInfo: ', avatarInfo)

    return this.state.quotes.map(quote => {
      console.log('quote.avatar', quote.avatar)
      const image = avatarInfo.filter(i => {
        return i.node.name === quote.avatar ? i.node.name : false
      })
      console.log('image: ', image[0].node)

      return <Quote {...quote} avatarInfo={image[0].node} />
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
  return (
    <div className="column is-4 " id={`testimony-${props.name}`}>
      <figure className="image has-text-centered">
        <Img
          className=""
          alt={props.name}
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

// const avatar = props => {

//   <StaticQuery
//     query={graphql`
//       query {
//         file(relativePath: { regex: regexName }) {
//           childImageSharp {
//             fixed(width: 150) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Img alt={name} fluid={data.file.childImageSharp.fixed} />}
//   />
// }
