import React from "react";
import "./Layout.css"
import calculate from '../logic/calculate';
class Structure extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      total: 0,
      next: '',
      operation: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (event) => {
    const buttonName = event.target.value;
    this.setState((prevState) => calculate(prevState, buttonName));
  }

  render(){
  return (
    <div className="frame">
      <div className="calculator">
        <br />
        <div> 
        <button className="screen">{this.state.total}{this.state.operation}{this.state.next}</button>      
        </div>
        <div className="keys">
          <input
            type="button"
            value="AC"
            className="button-clear"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="+/-"
            className="button-operator"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="%"
            className="button-operator"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="&#247;"
            className="button-operator"
            id="red"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="7"
            className="button-operator"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="8"
            className="button-operator"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="9"
            className="button-operator"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="x"
            className="button-operator"
            id="red"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="4"
            className="button-operator"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="5"
            className="button-operator"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="6"
            className="button-operator"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="-"
            className="button-operator"
            id="red"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="1"
            className="button-operator"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="2"
            className="button-operator"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="3"
            className="button-operator"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="+"
            className="button-operator"
            id="red"
            onClick={this.handleClick}
          />

          <input
            type="button"
            value="0"
            className="button-operator"
            id="blue"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="."
            className="button-operator"
            onClick={this.handleClick}
          />
          <input
            type="button"
            value="="
            className="button-operator"
            id="red"
            onClick={this.handleClick}
          />
        </div>
      </div>
    </div>
  );
  }
};

export default Structure;
