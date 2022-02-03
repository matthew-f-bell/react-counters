import React, { Component } from "react";
import Counter from "../Counter";

class CounterList extends Component {
    render() {
        let counters= [];
        for ( let i = 0 ; i < this.props.counters ; i++ ) {
            counters.push(<Counter />)
        }
        return ( <div className="Counter-row">{counters}</div> )
    }    
}

export default CounterList;
