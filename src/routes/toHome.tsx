import React, { Component } from 'react';
import {BrowserRouter as Router, Route,withRouter} from 'react-router-dom';
import HomeDemo from '../pages/Home/homeDemo'
class ToHome extends Component<any>{
  
  render(){
    return(
      <Router>
        <Route path='/homeDemo' component={HomeDemo}/>
      </Router>
    )
  }
}
export default withRouter(ToHome);