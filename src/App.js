import React, {Component} from 'react';

import './App.css';




import data2 from './Components/data2.js'
/*import Register from './Register/Register.js'; */ 
import Log from './Components/Log.js'; 
class App extends Component {
  render() {
    return (
      <Log data2={data2} />
    
    );  
  }
}



export default App;
