import React, { Component } from 'react';
// import { withRouter} from 'react-router-dom';
import styles from './styles/homeDemo.less'
class HomeDemo extends Component<any>{
  
  render(){
    return(
     <div>
       <div className={styles.container}>
        <div className={styles.left}>left</div>
        <div className={styles.right}>right</div>
       </div>
     </div>
    )
  }
}
export default HomeDemo;