import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router';

export default class Address extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            address: '',
            addressInfo: {}
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        this.setState({
            addressInfo: this.props.addressInfo,
            address: this.props.address
        })
    }

    componentWillReceiveProps({ address, addressInfo}) {
        this.setState({ address, addressInfo })
    }

    handleClick(e) {
        e.preventDefault()
        this.props.clickAddress(e.target.innerHTML)
    }

    render(){
        if (Object.keys(this.state.addressInfo).length === 0){
            return (
                <main>Loading...</main>
            )
        }

        const { address, final_balance, hash160, n_tx, total_received, total_sent, txs } = this.state.addressInfo
        const self = this

        return (
            <main>
                <header id="address-header">
                    <h3 className="address">Address: {address}</h3>
                    <h3>Total Recieved: {total_received / 100000000} BTC</h3>
                    <h3>Total Sent: {total_sent / 100000000} BTC</h3>
                    <h3>Final Balance: {final_balance / 100000000} BTC</h3>
                </header>

                <h2 id="transactions">Transactions</h2>
                <section>
                    { txs.map(function(tx, i){
                        return (
                            <div key={i} className="transaction">
                                <p>Date: <Moment format="DD-MM-YYYY" unix>{tx.time}</Moment></p>
                                <p>Amount: {tx.out[0].value / 100000000} BTC</p>
                                <p className="address">To: <span className="address-cursor" onClick={self.handleClick}>{tx.out[0].addr}</span></p>
                            </div>
                        )
                    })}
                </section>
            </main>
        )
    }
}
