import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    getAddressInfo(addr) {
        axios.get('http://52.212.29.223/proxy/https://blockchain.info/rawaddr/1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX')
            .then((result) => {
                console.log(result.data);
            })
    }
    render() {
        console.log("rendering app");
        return (
            <div >
                <h1>My Blockchain Explorer</h1>
                {this.props.children}
            </div>
        )
    }
}
