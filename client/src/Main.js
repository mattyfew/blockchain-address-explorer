import React from 'react';
import { ScaleLoader } from 'react-spinners';


export default function Main(props) {
    return (
        <div id="main">
            <header>
                <h2>Enter a BTC address to view transaction history</h2>
                <p className="address">Try <strong>1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</strong></p>
            </header>
            <div id="search-bar">
                {props.notValid && <div className="error">There is something wrong with that address</div>}
                {props.loading &&
                    <ScaleLoader
                      margin={'20px 5px 5px 0'}
                      color={'#123abc'}
                      loading={props.loading}
                    />
                }
                <input
                    onChange={props.onAddressChange}
                    id="search-bar-input"
                    placeholder="enter BTC address"
                    autoFocus/>
                <button onClick={props.submitAddress}>Search</button>
            </div>
        </div>
    )
}
