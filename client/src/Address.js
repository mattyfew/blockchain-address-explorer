import React from 'react';

export default class Address extends React.Component {
    // componentDidMount(){
    //     console.log("something");
    //     document.getElementById("search-bar-input").focus();
    // }
    render() {
        return (
            <div>
                <section>
                    <h3>Total Recieved: XXXX</h3>
                    <h3>Total Sent: XXXX</h3>
                    <h3>Final Balance: XXXX</h3>
                </section>

                <h2>Transactions</h2>
                <section>
                    <h4>transaction #1</h4>
                    <h4>transaction #2</h4>
                    <h4>transaction #3</h4>
                </section>
            </div>
        )
    }
}
