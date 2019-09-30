import React from 'react'

import Hero from '../components/hero'
import SEO from '../components/seo'
import Layout from '../components/layout'
import About from '../components/about'

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
