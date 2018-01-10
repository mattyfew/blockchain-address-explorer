import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import btcAddress from 'bitcoin-address';


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            addressInfo: {},
            notValid: false,
            loading: false
        }
        this.submitAddress = this.submitAddress.bind(this)
    }

    componentDidMount() {
        const { location } = this.props
        const { addressInfo } = this.state

        if (location.pathname.includes('/address/') && Object.keys(addressInfo).length === 0) {
            this.setState({
                address: location.pathname.substring(9)
            }, () => {
                this.submitAddress(this.state.address)
            })
        }
    }

    submitAddress(addr) {
        if (!btcAddress.validate(addr)) {
            this.setState({ notValid: true })
            return
        } else {
            this.setState({ notValid: false, loading: true })
            axios.get(`https://cors-anywhere.herokuapp.com/https://blockchain.info/rawaddr/${addr}` )
            .then((result) => {
                this.setState({ loading: false, addressInfo: result.data }, () => {
                    this.props.router.push(`/address/${addr}`)
                })
            })
        }
    }

    render() {
        const children = React.cloneElement(this.props.children, {
            address: this.state.address,
            addressInfo: this.state.addressInfo,
            notValid: this.state.notValid,
            loading: this.state.loading,
            onAddressChange: (e) => {
                let address = e.target.value
                this.setState({ address })
            },
            clickAddress: (address) => {
                this.setState({ address }, () => {
                    this.submitAddress(this.state.address)
                })
            },
            submitAddress: () => {
                this.submitAddress(this.state.address)
            }
        })

        return (
            <div id="app">

                <h1><Link to="/">My Blockchain Explorer</Link></h1>
                <div id="children-container">
                    {children}
                </div>
            </div>
        )
    }
}
