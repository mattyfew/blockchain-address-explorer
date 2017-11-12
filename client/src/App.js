import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            addressInfo: {}
        }
        this.getAddressInfo = this.getAddressInfo.bind(this)

    }
    getAddressInfo(addr) {
        axios.get(`http://52.212.29.223/proxy/https://blockchain.info/rawaddr/${addr}`)
            .then((result) => {
                this.setState({ addressInfo: result.data }, () => {
                    this.props.router.push('/address')
                })
            })
    }
    render() {
        const children = React.cloneElement(this.props.children, {
            addressInfo: this.state.addressInfo,
            onAddressChange: (e) => {
                let address = e.target.value
                this.setState({ address }, () => console.log("current state: ", this.state) )
            },
            getAddressInfo: () => {
                // this.getAddressInfo(this.state.address)
                this.getAddressInfo("1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX")
            }
        })

        return (
            <div >
                <h1>My Blockchain Explorer</h1>
                {children}
            </div>
        )
    }
}
