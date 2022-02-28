import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from '../components/layout'
import SEO from '../components/Seo'
import Hero from '../components/Hero'

import fertilityVideo from '../videos/fertility.mp4'

const Fertility = ({ data }) => {
  return (
    <Layout>
      <SEO title="Fertility Massage" />
      <Hero title="Fertility Massage Therapy" />
      <main>
        <section className="container">
          <section className="section columns">
            <div className="column column-justified">
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
                <GatsbyImage
                  image={data.FertilityImgsQuery_3.childImageSharp.gatsbyImageData}
                  alt="Fertility massage - 1" />
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
            <div className="column">
              <figure style={{ maxWidth: `960px`, margin: `2rem auto` }}>
                <GatsbyImage
                  image={data.FertilityImgsQuery_2.childImageSharp.gatsbyImageData}
                  alt="Fertility massage - 3" />
              </figure>
            </div>
          </section>
        </section>

        <div className="section__video is-hidden-mobile">
          <div className="container has-text-centered">
            <video loop muted autoPlay>
              <source media="(min-width: 320px)" src={fertilityVideo} />
            </video>
          </div>
        </div>
        <section className="section columns">
          <div className="column  is-8 is-offset-2">
            <p className="content">
              Fertility Massage Therapy does not claim to cure or diagnose any
              medical conditions, nor does it replace any medical care that you
              are under. If you have any medical concerns, please consult with
              your Doctor or Health Care Professional.
            </p>
            <p className="content">
              Fertility Massage Therapy is a complementary therapy that supports
              women during all stages of their reproductive life. There are no
              pregnancy guarantees from receiving Fertility Massage Therapy.
            </p>
          </div>
          {/* <div className="column">
              <figure style={{ maxWidth: `960px`, margin: `2rem auto` }}>
                <Img
                  alt="Fertility massage - 2"
                  fluid={data.FertilityImgsQuery_1.childImageSharp.fluid}
                />
              </figure>
            </div> */}
        </section>
      </main>
    </Layout>
  );
}

export default Fertility

export const imageQuery = graphql`query allFertilityImgsQuery {
  FertilityImgsQuery_1: file(relativePath: {eq: "fertility-images/P1002696.JPG"}) {
    childImageSharp {
      gatsbyImageData(width: 960, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  FertilityImgsQuery_2: file(relativePath: {eq: "fertility-images/P1002710.JPG"}) {
    childImageSharp {
      gatsbyImageData(width: 960, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  FertilityImgsQuery_3: file(
    relativePath: {eq: "fertility-images/fertility-massage-4.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 960, placeholder: NONE, layout: CONSTRAINED)
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
