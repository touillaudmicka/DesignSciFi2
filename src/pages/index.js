import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logoWhite.png'

import Layout from '../components/layout'
import Image from '../components/image'
import Card from '../components/Card';

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
    <div className="Cards">
      <h2>Oblivion</h2>
      <div className="CardGroup">
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image1.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image2.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image3.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image4.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image5.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image6.png')} />
      </div>
    </div>
    <div className="Cards">
      <h2>Oblivion</h2>
      <div className="CardGroup">
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image1.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image2.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image3.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image4.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image5.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image6.png')} />
      </div>
    </div>
    <div className="Cards">
      <h2>Oblivion</h2>
      <div className="CardGroup">
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image1.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image2.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image3.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image4.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image5.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image6.png')} />
      </div>
    </div>
    <div className="Cards">
      <h2>Oblivion</h2>
      <div className="CardGroup">
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image1.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image2.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image3.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image4.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image5.png')} />
        <Card 
          title="Oblivion" 
          text="Helicopter"
          image={require('../images/image6.png')} />
      </div>
    </div>
  </div>

)

export default IndexPage
