import React from "react";
import axios from 'axios';
import ColorEnter from './Components/ColorEnter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      allColors: [],
    }
    this.textListener = this.textListener.bind(this);
    this.submit = this.submit.bind(this);
  }

  textListener(event) {
    const currentText = event.target.value;
    this.setState({color: currentText})
  }

  submit() {
    console.log('button clicked')
  }




  render() {
    return (
      <div>
        <ColorEnter listener={this.textListener} colorState={this.state.color} submitButton={this.submit}/>
        Trevor's Party Time Full Stack Play Palace
      </div>
    );
  }
}

export default App;
