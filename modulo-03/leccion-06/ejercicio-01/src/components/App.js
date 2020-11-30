import '../stylesheets/App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
    this.handlekeyup = this.handlekeyup.bind(this);
  }
  handlekeyup(ev) {
    this.setState({
      inputText: ev.currentTarget.value,
    });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onKeyUp={this.handlekeyup} />
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}

export default App;
