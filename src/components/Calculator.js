import React, {useState} from "react";
import "./Layout.css"
import calculate from '../logic/calculate';
const Structure = () => {
  const [state, setState] = useState(0);
  
  function handleClick(event) {
    const buttonName = event.target.value;
    setState((prevState) => calculate(prevState, buttonName));
    
  }
  return (
    <div className="frame">
      <h3 className="math">Let's do some Math!</h3>
      <div className="calculator">
        <br />
        <div> 
        <button className="screen">{state.total}{state.operation}{state.next}</button>      
        </div>
        <div className="keys">
          <input
            type="button"
            value="AC"
            className="button-clear"
            onClick={handleClick}
          />
          <input
            type="button"
            value="+/-"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="%"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="&#247;"
            className="button-operator"
            id="red"
            onClick={handleClick}
          />
          <input
            type="button"
            value="7"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="8"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="9"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="x"
            className="button-operator"
            id="red"
            onClick={handleClick}
          />
          <input
            type="button"
            value="4"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="5"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="6"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="-"
            className="button-operator"
            id="red"
            onClick={handleClick}
          />
          <input
            type="button"
            value="1"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="2"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="3"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="+"
            className="button-operator"
            id="red"
            onClick={handleClick}
          />

          <input
            type="button"
            value="0"
            className="button-operator"
            id="blue"
            onClick={handleClick}
          />
          <input
            type="button"
            value="."
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="="
            className="button-operator"
            id="red"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
  };

export default Structure;
