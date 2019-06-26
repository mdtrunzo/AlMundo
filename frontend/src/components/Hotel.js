import React, { Component } from 'react';


export class Hotel extends Component {

  cardStyle = () => {
    return {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '15px',
      padding: '10px',
      background: 'white',
      boxShadow: '1px -1px 10px -2px rgba(204,204,204,0.75)'
    }

  }

  infoStyle = () => {
    return {
      display: 'flex',
      flexDirection: 'column',
    }
  }
  precioStyle = () => {
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }
  buttonStyle = () => {
    return {
      background: '#002C77',
      color: 'white',
      fontWeight: 'bold',
      padding: '5px 20px',
      borderRadius: '5px'
    }
  }


  render() {
    return (
      <div>
        <div style={this.cardStyle()} className="cardStyle">
          <span>
            <img src={this.props.hotel.image} width="250px" height="200px" alt="" />
          </span>
          <div className="info" syle={this.infoStyle()}>
            <h5 style={{ color: '#157AB1' }}>{this.props.hotel.name}</h5>
            <div className="stars">
              <span>
                {this.props.hotel.stars}
              </span>
            </div>
            <div className="amenities">
              <span>{this.props.hotel.amenities}</span>
            </div>
          </div>
          <div className="precio" style={this.precioStyle()}>
            <h6 style={{ color: 'grey' }}>Precio por noche por persona</h6>
            <span style={{ color: '#DF6800', fontWeight: 'bold' }}>ARS <span style={{ fontSize: '30px' }}>{this.props.hotel.price}</span></span>
            <button variant="primary" style={this.buttonStyle()}>Ver Hotel</button>
          </div>
        </div>
      </div >
    )
  }
}

export default Hotel
