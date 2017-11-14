import React from 'react';

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id="main">
                <header>
                    <h2>Enter a BTC address to view transaction history</h2>
                    <p>Try 1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</p>
                </header>
                <div id="search-bar">
                    <input
                        onChange={this.props.onAddressChange}
                        id="search-bar-input"
                        placeholder="enter BTC address"
                        autoFocus/>
                    <button onClick={this.props.submitAddress}>Search</button>
                </div>
            </div>
        )
    }
}

// value="1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
