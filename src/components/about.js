import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Who am I?</h1>

        <figure
          className="image"
          alt="jenny Portrait"
          style={{
            maxWidth: `520px`,
            margin: `0 auto`,
          }}
        >
          <ImageJennyPortrait />
        </figure>

        <h2 className="subtitle has-text-centered">Jenny YEH</h2>
        <div className="columns">
          <div className="content">
            <div className="column is-10 is-offset-1">
              <p>My name is Jenny.</p>
              <p>
                I am a 8-years-experienced massage therapist. Qualified Diploma
                of remedial massage and practitioner of pregnancy massage.
              </p>
              <p>
                I completed my Bachelor of Education and worked as a teacher in
                child cares and kindergarten in Taiwan. I LOVE to work with
                children and families. When I moved to Australia in 2010, I
                started to learn Swedish massage and completed my diploma of
                Remedial Massage in 2014. Then, I started to think how to
                combine these professional skills together. Therefore I choose
                to be a specialist of Pregnancy Massage. However, that doesn’t
                mean I only work with pregnancy ladies. I am more than happy to
                provide my support to every members in the family, Fathers,
                Mothers, Grandparents, Sons, Daughters, etc. with 8 years in the
                field of Remedial Massage, I have wealth of experience that will
                ensure that you obtain the best result of your care, I am
                dedicated to work with you and your family to obtain reach your
                health goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const ImageJennyPortrait = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "portrait.jpg" }) {
          childImageSharp {
            fixed(width: 520) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        alt="jenny's Portrait"
        imgStyle={{ borderRadius: '50%' }}
        fixed={data.file.childImageSharp.fixed}
      />
    )}
  />
)
