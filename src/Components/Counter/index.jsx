import React, { Component } from "react";

class Counter extends Component {
    state = {
        counterCount: 0,
    };

    increaseCount = () => {
        let countUp = this.state.counterCount + 1;
        this.setState({
            counterCount: countUp,
        });
    }

    decreaseCount = () => {
        let countDown = this.state.counterCount - 1;
        this.setState({
            counterCount: countDown,
        })
    }

    render() {
        return (
            <div className="Counter">
                <p>Counter: {this.state.counterCount}</p>
                <button onClick={this.decreaseCount}>
                    Decrement
                </button>
                <button onClick={this.increaseCount}>
                    Increment
                </button>
            </div>
        )
    }
}

export default Counter;