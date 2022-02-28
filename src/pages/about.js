import React from 'react'

import Hero from '../components/Hero'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import About from '../components/About'

const about = () => {
  return (
    <Layout>
      <Seo title="About" />
      <Hero />
      <div className="section">
        <About />
      </div>
    </Layout>
  )
}

export default about
