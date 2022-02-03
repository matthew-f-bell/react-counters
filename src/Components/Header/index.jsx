import React, { Component } from "react";
import CounterList from "../CounterList";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: 0,
        }
    }

    increaseCounters = () => {
        let counterPlus = this.state.counters + 1;
        this.setState({
            counters: counterPlus,
        });
    }

    decreaseCounters = () => {
        let counterMinus = this.state.counters - 1;
        this.setState({
            counters: counterMinus,
        });
    }

    render() {
        return (
            <div>
                <h1>React Counters</h1>
                <button className="button" onClick={this.increaseCounters}>+</button>
                <button className="button" onClick={this.decreaseCounters}>-</button>
                <CounterList counters={this.state.counters} />
            </div>
        )
    }
}

export default Header;