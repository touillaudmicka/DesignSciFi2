import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logoWhite.png'

import Layout from '../components/layout'
import Image from '../components/image'
import Card from '../components/card';

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
    <div className="Card">
      <h2>11 collection, more coing</h2>
      <Card 
        title="Collections 2" 
        text="11 collect, more coming"
        image={require('../images/image1.png')} />
    </div>
  </div>

)

export default IndexPage
