import React from 'react';
import Structure from './components/Calculator';
class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="App">
      <Structure />
    </div>
    )
  }
}
export default App;
