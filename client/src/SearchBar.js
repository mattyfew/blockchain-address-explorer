import React from 'react';

export default class SearchBar extends React.Component {
    // componentDidMount(){
    //     console.log("something");
    //     document.getElementById("search-bar-input").focus();
    // }
    render() {
        return (
            <div id="search-bar">
                <input id="search-bar-input" placeholder="enter BTC address" autoFocus/>
            </div>
        )
    }
}
