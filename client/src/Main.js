import React from 'react';

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id="main">
                <h1>This is the main part</h1>
                <div id="search-bar">
                    <input
                        onChange={this.props.onAddressChange}
                        id="search-bar-input"
                        placeholder="enter BTC address"
                        value="1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
                        autoFocus/>
                    <button onClick={this.props.getAddressInfo}>Search</button>
                </div>
            </div>
        )
    }
}
