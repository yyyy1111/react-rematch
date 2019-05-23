import React, { Component } from 'react';
import { Button } from 'antd';
import './App.less';
import RouterDemo from './routerDemos'
// import ToHome from './routes/toHome'
import Hello from './demos/Hello'
import Hellox from './demos/StatefulHello'
import {BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className='titleText'>antd使用</h2>
        <Button type="primary">Button</Button>
        <h2 className='titleText'>react-router-dom使用</h2>
        <BrowserRouter>
          <RouterDemo />
          
        </BrowserRouter>
        <h2 className='titleText'>react-ts使用</h2>
        <Hello name='TS' enthusiasmLevel={10}/>
        <Hellox />
        
      </div>
    );
  }
}

export default App;