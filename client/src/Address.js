import React from 'react';
import Moment from 'react-moment';

export default function Address(props) {
    console.log("rendering Address: ", props);

    const { address, final_balance, hash160, n_tx, total_received, total_sent, txs } = props.addressInfo
    return (
        <div>
            Address: {address}
            <section>
                <h3>Total Recieved: {total_received}</h3>
                <h3>Total Sent: {total_sent}</h3>
                <h3>Final Balance: {final_balance}</h3>
            </section>

            <h2>Transactions</h2>
            <section>
                { /* renderTransactions(txs) */ }
                { txs.map(function(tx, i){
                    // var t = new Date(tx.time);
                    // t.setSeconds( tx.time );
                    // console.log(t);
                    console.log(tx.time);
                    return <Moment className="transaction" format="DD-MM-YYYY" unix>{tx.time}</Moment>
                })}
            </section>
        </div>
    )
}
