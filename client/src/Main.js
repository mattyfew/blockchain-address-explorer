import React from 'react';
import SearchBar from './SearchBar'


export default class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <h1>This is the main part</h1>
                <SearchBar />
            </div>
        )
    }
}
