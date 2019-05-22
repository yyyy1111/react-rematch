import React, { Component } from 'react';
import { Button } from 'antd';
import './App.less';
import RouterDemo from './routerDemos'
import {BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <BrowserRouter>
          <RouterDemo />
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;