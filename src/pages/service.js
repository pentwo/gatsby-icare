import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/Seo'
import Hero from '../components/Hero'

const Service = () => (
  <Layout>
    <SEO title="Services" />
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
          <h1 className="title">What is Fertility Massage Therapy?</h1>
          <p>
            <strong>Fertility Massage Therapy</strong> is a deep, yet gentle,
            non invasive abdominal and sacral therapy that focus on improving
            circulation to the abdominal organs with an aim to improve blood,
            nerve and lymph flow. The massage also focus on releasing physical
            and emotional tension, helping to loosen debris (that has been
            accumulating in your gut for years) encouraging a natural movement
            and clearing both physical and emotional congestion, leaving you and
            your abdomen feeling lighter and freer.⠀
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

export default Service
