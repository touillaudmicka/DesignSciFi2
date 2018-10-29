import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logoWhite.png'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <img src={Logo} width="150" />
        <h1>Design what’s next</h1>
        <p>Browse Science Fiction and find inspiration</p>
        <Link to="/page-2/">Get Early access</Link>
        </div>
    </div>
  </div>
)

export default IndexPage
