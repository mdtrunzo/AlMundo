import React, { Component } from 'react'
import Hotel from './Hotel'


export class Home extends Component {

  render() {
    return this.props.hotels.map((hotel) => (
      <Hotel key={hotel.id} hotel={hotel} />
    ))
  }
}

export default Home
