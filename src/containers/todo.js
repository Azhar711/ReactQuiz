import React from 'react';
import '../styles/base.css';

const Todo =(props)=>{
    return(
            <div className={props.class}>
                {props.data}
                {props.data ? <button className="button" onClick={props.click}>X</button> : null}
            </div>
    )
}

export default Todo;