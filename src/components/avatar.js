import React from 'react'

import { query } from '../pages/index'

console.log('query: ', query)

const Avatar = () => {
  return <h1>Avatar</h1>
}
export default Avatar

/*
query photoQuery {
          file(relativePath: { eq: "avatar/akana.jpg" }) {
            id
            childImageSharp {
              fixed(width: 150) {
                src
              }
            }
          }
        }
*/
