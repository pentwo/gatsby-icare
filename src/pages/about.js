import React from 'react'

import Hero from '../components/Hero'
import SEO from '../components/Seo'
import Layout from '../components/layout'
import About from '../components/About'

const about = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Hero />
      <div className="section">
        <About />
      </div>
    </Layout>
  )
}

export default about
