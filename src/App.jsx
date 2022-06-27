import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      allColors: [],
    }
  }
  render() {
    return (
      <div>
        Trevor's Party Time Full Stack Play Palace
      </div>
    );
  }
}

export default App;
