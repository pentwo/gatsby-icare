import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer has-text-centered">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <div className="container">
            <div className="columns">
              <div className="column is-8-desktop is-offset-2-desktop">
                <div>
                  <small>
                    Source code licensed
                    <a href="http://opensource.org/licenses/mit-license.php">
                      {' '}
                      MIT
                    </a>
                  </small>
                </div>
                <div>
                  <small>
                    Made by{' '}
                    <a href="https://www.stevenpeng.com.au">Steven Peng</a>
                  </small>
                </div>
                <div>
                  <small>
                    <a href="http://bulma.io">
                      <Image alt="Made with Bulma" />
                    </a>
                  </small>
                </div>
                <div>
                  <small>
                    Icons made by{' '}
                    <a
                      href="https://www.flaticon.com/authors/vitaly-gorbachev"
                      title="Vitaly Gorbachev"
                    >
                      Vitaly Gorbachev
                    </a>{' '}
                    from{' '}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      {' '}
                      www.flaticon.com
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

const Image = ({alt}) => (
  <StaticQuery
    query={graphql`{
  file(relativePath: {eq: "made-with-bulma.png"}) {
    childImageSharp {
      gatsbyImageData(width: 128, layout: FIXED)
    }
  }
}
`}
    render={data => <GatsbyImage alt={alt} image={data.file.childImageSharp.gatsbyImageData} />}
  />
)
