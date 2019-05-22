import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,withRouter} from 'react-router-dom';
class RouterDemo extends Component<any> {
  constructor(props:any){
    super(props)
  }
  render(){
    return (
      
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
          </ul>
          <hr />
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/topics' component={Topics}/>
        </div>
      </Router>
    )
  }
}

class Home extends Component{
  render(){
    return(
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}
class About extends Component{
  render(){
    return(
      <div>
        <h2>About</h2>
      </div>
    )
  }
}
class Topics extends Component<any>{
  
  render(){
    return(
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/items0`}>items0</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/items1`}>items1</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/items2`}>items2</Link>
          </li>
        </ul>
          <Route path={`${this.props.match.path}/:topicId`} component={Topic}/>
          <Route 
            exact
            path={this.props.match.path}
            render={()=><h3>Please select a items</h3>}
          />
      </div>
    )
  }
}
class Topic extends Component<any>{
  render(){
    return(
      <div>
        <h3>{this.props.match.params.topicId}</h3>
      </div>
    )
  }
}

export default withRouter(RouterDemo);