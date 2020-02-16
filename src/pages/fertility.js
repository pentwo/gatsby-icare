import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'

import fertilityVideo from '../videos/fertility.mp4'

const Fertility = ({ data }) => {
  return (
    <Layout>
      <SEO title="Fertility Massage" />
      <Hero title="Fertility Massage Therapy" />
      <main>
        <section className="container">
          <section className="section columns">
            <div className="column">
              <h3 className="title">
                <span role="img" aria-label="writing-hand">
                  ✍️
                </span>
                What is Fertility Massage Therapy?
              </h3>
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
            </div>
            <div className=" column">
              <figure style={{ maxWidth: `960px`, margin: `2rem auto` }}>
                <Img
                  alt="Fertility massage - 1"
                  fluid={data.FertilityImgsQuery_3.childImageSharp.fluid}
                />
              </figure>
            </div>
          </section>
          <section className="section columns">
            <div className="column">
              <h3 className="title">
                <span role="img" aria-label="writing-hand">
                  ✍️
                </span>
                Does man need FMT?
              </h3>
              <p className="content">
                YES. Absolutely YES! Even though male has different reproductive
                organs than female, however, male will still have emotional
                tension store inside physical body.
              </p>
              <p className="content">
                These negative energies are usually presenting as the symptoms
                with central nerve system(CNS) or digestive system such as
                insomnia, IBS, constipation, etc. The results of FMT for male
                will usually be seen as improving sleeping pattern and reduce
                the symptoms of digestive problems.
              </p>
            </div>
            <div className="column">
              <figure style={{ maxWidth: `960px`, margin: `2rem auto` }}>
                <Img
                  alt="Fertility massage - 2"
                  fluid={data.FertilityImgsQuery_1.childImageSharp.fluid}
                />
              </figure>
            </div>
          </section>
          <section className="section columns">
            <div className="column">
              <h3 className="title">
                <span role="img" aria-label="writing-hand">
                  ✍️
                </span>
                Benefits of FMT
              </h3>
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
                    the ovaries, improving egg health and improving circulation
                    to the uterus and surrounding organs.
                  </li>
                  <li>
                    Removing stagnate blood and tissues, clearing congestion{' '}
                  </li>
                  <li>
                    Improving digestive system problems (IBS, constipation,
                    etc.)
                  </li>
                  <li>Improving sleeping pattern </li>
                  <li>Improving mental health</li>
                </ul>
              </div>
            </div>
            {/* <div className="column">
              <figure style={{ maxWidth: `320px`, margin: `2rem auto` }}>
                <Img
                  alt="Fertility massage - 3"
                  fluid={data.FertilityImgsQuery_2.childImageSharp.fluid}
                />
              </figure>
            </div> */}
          </section>
        </section>
      </main>
      <div className="section__video is-hidden-mobile">
        <div className="container">
          <video loop muted autoPlay>
            <source media="(min-width: 320px)" src={fertilityVideo} />
          </video>
        </div>
      </div>
    </Layout>
  )
}

export default Fertility

export const imageQuery = graphql`
  query allFertilityImgsQuery {
    FertilityImgsQuery_1: file(
      relativePath: { eq: "fertility-images/P1002696.JPG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    FertilityImgsQuery_2: file(
      relativePath: { eq: "fertility-images/P1002710.JPG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    FertilityImgsQuery_3: file(
      relativePath: { eq: "fertility-images/fertility-massage-4.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
// allFile(
//   filter: { relativePath: { regex: "/Fertility-Massage-1.jpg/" } }
// ) {
//   edges {
//     node {
//       relativePath
//       name
//       childImageSharp {
//         fluid(maxWidth: 960) {
//           ...GatsbyImageSharpFluid_noBase64
//         }
//       }
//     }
//   }
// }
