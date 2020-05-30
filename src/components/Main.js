import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pictureURL: []
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

  render() {
    const fotos = this.state.pictureURL
    return (
        <>
          <div>
            {fotos.map((element, index) => {
                return <img style={{width: 250, height: 250}} src={element} alt="imagen de perritos" key={index} />
              })
            }
          </div>
          <button>Actualizar</button>
        </>
    );
  }
}

export default Main;
