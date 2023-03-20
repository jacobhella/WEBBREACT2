import React, { Component }  from 'react';

class ButtonCounter extends Component{

    constructor(){
        super()
        this.state = {
            counter: 0,
        }
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    decrement() {

        if(this.state.counter !== 0){
        this.setState({
            counter: this.state.counter - 1,
        })}
    }

    render(){
        return(
            <div>
                <p>Antal: {this.state.counter}</p>
                <button onClick={() => this.increment()}>Lägg till</button>
                <button onClick={() => this.decrement()}>Ta bort</button>
            </div>
        )
    }
}

export default ButtonCounter;