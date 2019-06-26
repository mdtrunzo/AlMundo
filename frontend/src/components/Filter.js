import React, { Component } from 'react';
import { Card, Button, FormControl, Form } from 'react-bootstrap';
import search from './../img/search.svg';




export class Filter extends Component {


  buttonStyle = () => {
    return {
      background: '#002C77',
      color: 'white',
      marginTop: '5px',
      fontWeight: 'bold',
      padding: '5px 20px',
      borderRadius: '5px'
    }
  }

  arrow = () => {
    console.log('baja')
  }


  render() {

    return (
      <div>
        <Card style={{ width: '20rem', margin: '8px' }}>
          <Card.Title style={{ fontSize: '15px', padding: '8px' }}>Filtros</Card.Title>
        </Card>
        <Card style={{ width: '20rem', margin: '8px' }}>
          <Card.Body>
            <Form inline >
              <i className="ion-ios-search-strong"></i>
              <h6 style={{ color: '#157AB1' }}>Nombre del hotel</h6>
            </Form>
            <Form inline action="/hoteles/search" >
              <FormControl type="text" name="term" placeholder="Ingrese el nombre del hotel" className="mr-sm-2" style={{ margin: '8px' }} />
              <Button variant="outline-primary" style={this.buttonStyle()} type="submit">Aceptar</Button>
            </Form>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem', margin: '8px' }}>
          <Card.Title>
            <Form inline>
              <i className="ion-android-star"></i>
              <h6 style={{ color: '#157AB1' }}>Estrellas</h6>
            </Form>
            <div className="ranking">
              <input type="checkbox">
              </input>
              <i className="ion-android-star"></i>
              <i className="ion-android-star"></i>
              <i className="ion-android-star"></i>
              <i className="ion-android-star"></i>
              <i className="ion-android-star"></i>
            </div>
            <div className="ranking">
              <input type="checkbox">
              </input>
              <i className="ion-android-star"></i>
              <i className="ion-android-star"></i>
              <i className="ion-android-star"></i>
              <i className="ion-android-star"></i>
            </div>
            <div className="ranking">
              <input type="checkbox">
              </input>
              <i className="ion-android-star"></i>
              <i className="ion-android-star"></i>
              <i className="ion-android-star"></i>
            </div>
            <div className="ranking">
              <input type="checkbox">
              </input>
              <i className="ion-android-star"></i>
              <i className="ion-android-star"></i>
            </div>
            <div className="ranking">
              <input type="checkbox">
              </input>
              <i className="ion-android-star"></i>
            </div>

          </Card.Title>
        </Card>
      </div>
    )
  }
}

export default Filter
