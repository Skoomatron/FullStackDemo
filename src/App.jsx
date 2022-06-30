import React from "react";
import axios from 'axios';
import ColorEnter from './Components/ColorEnter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      text: '',
      allColors: [],
    }
    this.textListener = this.textListener.bind(this);
    this.submit = this.submit.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  textListener(event) {
    const currentText = event.target.value;
    this.setState({[event.target.name]: currentText})
  }

  submit(event) {
    const buttonID = event.target.innerText;
    const payload = {
      text: this.state.text,
      color: this.state.color,
    }

    if (buttonID === 'Add Color') {
      axios.post('/addColor', payload)
      .then((success) => {
        this.getData();
      })
      .catch((error) => {
        console.log(error);
      })
    } else if (buttonID === 'Update Color') {
      axios.post('/updateColor', payload)
      .then((success) => {
        this.getData();
      })
      .catch((error) => {
        console.log(error, 'error in update')
      })
    }

  }

  getData() {
    axios.get('/getColors')
    .then((data) => {
      this.setState({allColors: data.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <ColorEnter
          listener={this.textListener}
          colorState={this.state.color}
          textState={this.state.text}
          submitButton={this.submit}
          dataArray={this.state.allColors}/>
        Trevor's Party Time Full Stack Play Palace
      </div>
    );
  }
}

export default App;
