export const invoiceTemplate = (invoice) => {
    const items = invoice[0].elements;
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        sum += (items[i].price * items[i].pieces);
    }

    const strGen = (items) => {
        console.log(items)
        var div = "";
        items.forEach(element => {
            div +=
                
                `<div class = 'table-contents'>
                <h2>${items.indexOf(element) +1}</h2>
                <h2 class='row-long'>${element.name}</h2>
                <h2>${element.price}</h2>
                <h2>${element.pieces}</h2>
                <h2>${element.price * element.pieces}</h2>
                </div>`;
        });
        

        return div;
    }
    return (
        `<!DOCTYPE html>
        <html lang='en'>
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>

            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;600;800&display=swap');


            *{
                font-family: 'Poppins', sans-serif;
            }
            a{
                color: #000;
                text-decoration: none;
                font-size: 1vw;
            }
            p{
                font-size: 1vw;
            }
            h1{
                font-weight: 400;
            }
            .app__invoice a,
p {
    font-size: 14px;
}

.app__invoice h2 {
    font-size: 16px;
    font-weight: 600;
}

.app__invoice h1 {
    font-size: 39px;
}

.app__invoice {
    width: 595px !important;
    height: 842px !important;
    display: flex;
    flex-direction: column;
    padding: 37px;
}

.app__invoice-title {
    display: flex;
    justify-content: flex-end;
    margin-top: 43px;
}

.app__invoice-details {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
}

.details {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.details-left {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.app__invoice-items {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
}

.headings,
.table-contents {
    width: 100%;
    margin-top: 8px;
    display: flex;
    gap: 30px;
}

.table-contents h2 {
    font-weight: 400;
}

.row-long {
    width: 60%;
    flex-wrap: wrap;
}

.app__invoice-payments {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

            </style>
        </head>
        
        <body>
            <div class="app__invoice">
                <div class="app__invoice-title">
                    <div class="content">
                        <h2>Company Name</h2>
                        <p>+123-456-7890</p>
                    </div>
        
                </div>
                <div class="app__invoice-details">
                    <h1>INVOICE</h1>
                    <div class="details">
                        <div class="details-left">
                            <p>Billed To: </p>
                            <h2>CompanyName</h2>
                            <p>+123-456-7890</p>
                        </div>
                        <div class="details-right">
                            <p style={{ fontWeight: 600 }}>Invoice No.:</p>
                            <p>0000001</p>
                        </div>
                    </div>
                </div>
                <div class="app__invoice-items">
                    <div class="headings">
                        <h2 class='row'>Sr No.</h2>
                        <h2 class='row-long'>Item</h2>
                        <h2>Price</h2>
                        <h2>Quantity</h2>
                        <h2>Total</h2>
                    </div>
                    ${strGen(items)}
                </div>
                <div class="app__invoice-payments">
                    <div class="details-left">
                    </div>
                    <div class="details-right">
                        <h1>${sum} USD</h1>
                    </div>
                </div>
            </div>
        </body>
        
        </html>`
    )
}