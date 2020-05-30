import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pictureURL: '',
      raza: ''
    }
  }

  componentDidMount() {
    this.obtenerImagen('https://dog.ceo/api/breeds/image/random/3')
  }

  obtenerImagen = async url => {
    const response = await axios.get(url)
    this.setState({
      pictureURL: response.data.message
    })
  }

  handleChange = event => {
    this.setState({
      raza: event.target.value
    })
  }

  render() {
    return (
        <>
          <div>
            <img style={{width: 250, margin: 15}} src={this.state.pictureURL} alt="imagen de perritos" />
          </div>

          <input value={this.state.raza} onChange={this.handleChange} />
          <button onClick={() => this.obtenerImagen(`https://dog.ceo/api/breed/${this.state.raza}/images/random`)}>Actualizar</button>
        </>
    );
  }
}

export default Main;
