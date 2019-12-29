import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'

const Fertility = ({ data }) => {
  return (
    <Layout>
      <SEO title="Fertility Massage" />
      <Hero />
      <figure className="section">
        <div className="container">
          <h1 className="title">Fertility Massage Therapy</h1>
          <section className="section">
            <h1 className="title">
              <span role="img" aria-label="writing-hand">
                ✍️
              </span>
              What is Fertility Massage Therapy?
            </h1>
            <p className="content">
              Fertility Massage Therapy is a deep, yet gentle, non invasive
              abdominal and sacral therapy that focus on improving circulation
              to the abdominal organs with an aim to improve blood, nerve and
              lymph flow.
            </p>
            <p className="content">
              The massage also focus on releasing physical and emotional
              tension, helping to loosen debris (that has been accumulating in
              your gut for years) encouraging a natural movement and clearing
              both physical and emotional congestion, leaving you and your
              abdomen feeling lighter and freer.⠀
            </p>
            <figure style={{ maxWidth: `960px`, margin: `2rem auto` }}>
              <Img
                alt="Fertility massage - 1"
                fluid={
                  data.allFertilityImgsQuery.edges[2].node.childImageSharp.fluid
                }
              />
            </figure>
          </section>
          <section className="section">
            <h1 className="title">
              <span role="img" aria-label="writing-hand">
                ✍️
              </span>
              Does man need FMT?
            </h1>
            <p className="content">
              YES. Absolutely YES! Even though male has different reproductive
              organs than female, however, male will still have emotional
              tension store inside physical body.
            </p>
            <p className="content">
              These negative energies are usually presenting as the symptoms
              with central nerve system(CNS) or digestive system such as
              insomnia, IBS, constipation, etc. The results of FMT for male will
              usually be seen as improving sleeping pattern and reduce the
              symptoms of digestive problems.
            </p>
          </section>

          <figure style={{ maxWidth: `600px`, margin: `2rem auto` }}>
            <Img
              alt="Fertility massage - 1"
              fluid={
                data.allFertilityImgsQuery.edges[0].node.childImageSharp.fluid
              }
            />
          </figure>
          <section className="section">
            <h1 className="title">
              <span role="img" aria-label="writing-hand">
                ✍️
              </span>
              Benefits of FMT
            </h1>
            <div className="content">
              <ul>
                <li>Unleash both physical and emotional tension </li>
                <li>Reduce pain and discomfort during menstrual period </li>
                <li>Regulating menstrual circle </li>
                <li>
                  Hormonal Balance: soothing the symptoms that caused by
                  imbalance hormone during postnatal stage or menopause.
                </li>
                <li>
                  Helping to break up scar tissue and adhesion from
                  Caesarian,pelvic issues and abdominal surgery.
                </li>
                <li>
                  Oxygenated Blood: helps to bring fresh, oxygenated blood to
                  the ovaries, improving egg health and improving circulation to
                  the uterus and surrounding organs.
                </li>
                <li>
                  Removing stagnate blood and tissues, clearing congestion{' '}
                </li>
                <li>
                  Improving digestive system problems (IBS, constipation, etc.)
                </li>
                <li>Improving sleeping pattern </li>
                <li>Improving mental health</li>
              </ul>
            </div>
            <figure style={{ maxWidth: `300px`, margin: `2rem auto` }}>
              <Img
                alt="Fertility massage - 1"
                fluid={
                  data.allFertilityImgsQuery.edges[1].node.childImageSharp.fluid
                }
              />
            </figure>
          </section>
        </div>
      </figure>
    </Layout>
  )
}

export default Fertility

export const imageQuery = graphql`
  query allFertilityImgsQuery {
    allFertilityImgsQuery: allFile(
      filter: { relativePath: { regex: "/Fertility-Massage-[0-9].jpg/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
