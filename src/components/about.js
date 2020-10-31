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
            display: `flex`,
            maxWidth: `520px`,
            margin: `2rem auto`,
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
                I am a 10-years-experienced massage therapist. Qualified Diploma
                of remedial massage and practitioner of pregnancy massage.
              </p>
              <p>
                I completed my Bachelor of Education and worked as a teacher in
                child cares and kindergarten in Taiwan. I LOVE to work with
                children and families. When I moved to Australia in 2010, I
                started to learn Swedish massage and completed my Diploma of
                Remedial Massage in 2014. Then, I started to think about how to
                combine these professional skills together. Therefore I choose
                to be a specialist in Pregnancy Massage. However, that doesn’t
                mean I only work with pregnant ladies.
              </p>
              <p>
                In 2019, I did Fertility massage Therapy training. Therefore, I
                am extending my service to support the ladies who are struggling
                in infertility, irregular menstrual cycle, imbalance hormones
                during menopause, heavy period pain ...etc. Also I am more than
                happy to provide my support to every member in the family,
                Fathers, Mothers, Grandparents, Sons, Daughters, etc. with 9
                years in the field of Remedial Massage, I have wealth of
                experience that will ensure that you obtain the best result of
                your care, I am dedicated to working with you and your family to
                obtain reach your health goals.
              </p>
              <p>As part of Diploma of Remedial massage, I studied</p>
              <ul>
                <li>Deep Tissue</li>
                <li>Swedish</li>
                <li>Trigger Point</li>
                <li>Japanese Shiatsu</li>
                <li>Sport Massage</li>
                <li>Myofascial Release</li>
                <li>Positional Release</li>
                <li>Trager</li>
                <li>Postual Massage</li>
                <li>Reflexology</li>
                <li>Manual Lymphtic Drainage</li>
              </ul>
              <p>Modalities I have learnt on top of my Remedial massage</p>
              <ul>
                <li>Pregnancy Massage</li>
                <li>Kinesiotaping</li>
                <li>Craniosacral Therapy</li>
                <li>Fertility Massage Therapy</li>
              </ul>
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
