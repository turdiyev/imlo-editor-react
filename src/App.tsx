import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeContainer />
        <ToastContainer position="bottom-left"/>

      </div>
    );
  }
}

export default App;
