import React from 'react';

function renderTransactions (txs) {
    console.log("renderTransactions", txs);

    // let html = '<div id="transactions">'
    //
    // for (var i = 0; i < txs.length; i++) {
    //     html += `${txs[i].}`
    // }

}

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
                {renderTransactions(txs)}
            </section>
        </div>
    )
}
