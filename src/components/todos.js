import React, { Component } from 'react';
import '../styles/base.css';
import Todo from '../containers/todo';

class TodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            count: null,
            inputValue: ''
        }
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    inputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    removeHandler = (i, event) => {
        this.state.list.splice(i, 1);
        var trimmedData = this.state.list;
        console.log(this.state.list);
        this.setState({
            list: trimmedData
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        const input = this.state.inputValue;
        if(input){
            this.setState({
                list: [...this.state.list, input],
                inputValue: ''
            });
        }
    }

    render() {
        return (
            <div>
                <h1 >To-DO</h1>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="New"
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                        ref={(input) => { this.nameInput = input; }}
                    />
                    <button><b>+</b></button>
                </form>
                <span>Active To-Dos: <strong>{this.state.list.length}{this.state.list.length ===1 ? ' Item' :' Items'} left</strong></span>

                <div className={this.state.list.length > 0 ? "border1" : null}>
                    {
                        this.state.list.length > 0 ? this.state.list.map((data, i) => {
                            return <div key={i}>
                                <Todo data={data} 
                                class={data ? "border2": null}
                                click={this.removeHandler.bind(this, i)}
                                />
                            </div>;
                        }) : null
                    }
                </div>
                <Todo />
            </div>
        )
    }
}

export default TodosComponent;