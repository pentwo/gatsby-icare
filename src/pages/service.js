import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'

const SecondPage = () => (
  <Layout>
    <SEO title="Price" />
    <Hero />
    <section className="section services">
      <section className="section service">
        <div className="container">
          <h1 className="title">What is Remedial/Sports Massage?</h1>
          <p>
            <strong>Remedial/Sports Massage</strong> is also known as injury
            treatment massage. Unlike relaxation massage, remedial massage is
            designed to deal with specific pain points or musculoskeletal
            discomfort. Remedial massage is including multiple techniques such
            as Swedish, Deep tissue, Shiatsu, Myofascial release, Manual
            lymphatic drainage, etc.
          </p>
        </div>
      </section>
      <section className="section service">
        <div className="container">
          <h1 className="title">What is Aromatherapy Massage?</h1>
          <p>
            <strong>Aromatherapy massage</strong> is Swedish massage therapy
            using massage oil mix with herbal essential oils, such us lemon,
            peppermint, lavender, etc. During an aromatherapy massage, you
            inhale these essential oil molecules or absorb them through your
            skin. They thought to promote beneficial changes in your mind and
            body by affecting the lambic system, a range of brain known to
            influence the nervous system.
          </p>
        </div>
      </section>
      <section className="section service">
        <div className="container">
          <h1 className="title">What is Pregnancy/Prenatal Massage?</h1>
          <p>
            <strong>Pregnancy massage</strong> is the prenatal use of massage
            therapy to support the physiologic, structural and emotional well
            being of both the mother and the foetus.
          </p>
        </div>
      </section>
    </section>
  </Layout>
)

export default SecondPage
