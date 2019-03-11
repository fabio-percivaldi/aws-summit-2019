import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import MyCalendar from './components/myCalendar';
import Body from './components/body';

class App extends Component {
  state = {
    selectedRoomID: 1
  }
  onClick = (id) => {
    this.setState({ selectedRoomID: id });
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body onClick={this.onClick}>
          <div className="App">
            <MyCalendar room={this.state.selectedRoomID}/>
          </div>
        </Body>
      </React.Fragment>
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>

    );
  }
}

export default App;
