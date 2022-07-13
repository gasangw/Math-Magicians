import React from 'react';
import Structure from './components/Calculator';
import Navbar from './components/navbar';
import Quote from './components/quote';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/structure" element={<Structure/>}/>
          <Route path="/quote" element={<Quote/>}/>
          </Routes>
    </div>
    )
  }
}
export default App;
