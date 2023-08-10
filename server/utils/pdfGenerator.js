const invoiceComponent = (invoice) => {
    const items = invoice[0].items;

    return(
        <div className="app__invoice">
            <div className="app__invoice-top">
                <h2>Company Name</h2>
                <p>+123-456-7890</p>
            </div>
            <div className="app__invoice-title">
                <h1>INVOICE</h1>
            </div>
            <div className="app__invoice-creds">
                <div className="to">
                    <p>Billed To:</p>
                    <h2>Company Name</h2>
                    <p>+123-456-7890</p>
                </div>
                <div className="invoice-number">
                    <p>Invoice No.: <span>0000001</span></p>
                </div>
            </div>
            <div className="app__invoice-items">
                <table>
                    <tr>
                        <th>Sr no.</th>
                        <th>Item</th>
                        <th>Rate</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    {items.map((data, idx) => (
                        <tr>
                            <td>{idx}</td>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>{data.pieces}</td>
                            <td>Total</td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className="app__payment">
                <div className="app__details">

                </div>
                <h2>{total}</h2>
            </div>
            <div className="app__signature">
                Signature
            </div>
        </div>
    )
}