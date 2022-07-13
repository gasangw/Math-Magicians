import React from 'react';
import Structure from './components/Calculator';
import Navbar from './components/navbar';
import Quote from './components/quote';
import Home from './components/Home';
class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="App">
        <Navbar />
        <Home/>
        <Quote/>
    </div>
    )
  }
}
export default App;
