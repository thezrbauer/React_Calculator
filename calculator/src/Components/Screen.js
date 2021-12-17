import React, { Component } from 'react'

export class Screen extends Component {
    render() {
        let {result} = this.props;
        return (
            <form className="result">
                <h2>{result}</h2>
        </form>
        )
    }
}

export default Screen
