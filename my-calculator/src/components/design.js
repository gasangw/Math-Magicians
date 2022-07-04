import React from 'react';
import './Layout.css';

const layout = (props) => {
    const handleClick = () => {};
return(
    <div className='frame'>
        <div className='calculator'>
            <br></br>
            <div>
            <input type={'text'} readOnly className="screen" style={{textSize: '20px'}} value={99}></input>
            <input type={'text'} readOnly className="screen" style={{textSize: '20px'}} value={100}></input>
        </div>
            <div className='keys'>
                <input type='button' value={'AC'} className='button-clear' onClick={handleClick}></input>
                <input type='button' value={'+/-'} className='button-operator' onClick={handleClick}></input>
                <input type='button' value={'%'} className='button-operator' onClick={handleClick}></input>
                <input type='button' value={'/'} className='button-operator' id="red" onClick={handleClick}></input>

                <input type='button' value={'7'} className='button-operator' onClick={handleClick}></input>
                <input type='button' value={'8'} className='button-operator' onClick={handleClick}></input>
                <input type='button' value={'9'} className='button-operator' onClick={handleClick}></input>
                <input type='button' value={'*'} className='button-operator' id="red" onClick={handleClick}></input>

                <input type='button' value={'4'} className='button-operator' onClick={handleClick}></input>
                <input type='button' value={'5'} className='button-operator' onClick={handleClick}></input>
                <input type='button' value={'6'} className='button-operator' onClick={handleClick}></input>
                <input type='button' value={'-'} className='button-operator' id="red" onClick={handleClick}></input>

                <input type='button' value={'1'} className='button-operator' onClick={handleClick}></input>
                <input type='button' value={'2'} className='button-operator' onClick={handleClick}></input>
                <input type='button' value={'3'} className='button-operator' onClick={handleClick}></input>
                <input type='button' value={'+'} className='button-operator' id="red" onClick={handleClick}></input>

                <input type='button' value={'0'} className='button-operator' id="blue" onClick={handleClick}></input>
                <input type='button' value={'.'} className='button-operator' onClick={handleClick}></input>
                <input type='button' value={'='} className='button-operator' id="red" onClick={handleClick}></input>
            </div>
        </div>    
    </div>
)
}

export default layout;