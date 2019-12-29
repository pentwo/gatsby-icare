import React, { Component } from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default class footer extends Component {
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
                    {' '}
                    Made by <Link to="/">Code by Pen</Link>{' '}
                  </small>
                </div>
                <div>
                  <a href="http://bulma.io">
                    <Image alt="Made with Bulma" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "made-with-bulma.png" }) {
          childImageSharp {
            fixed(width: 128) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.file.childImageSharp.fixed} />}
  />
)
