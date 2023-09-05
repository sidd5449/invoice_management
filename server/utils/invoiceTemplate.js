export const invoiceTemplate = (invoice, sender) => {
  
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
                
                `<tr>
                <td class = 'No'>${items.indexOf(element) +1}</td>
                <td class='item'>${element.name}</td>
                <td class='price'>${element.price}</td>
                <td class='quant'>${element.pieces}</td>
                <td class='total'>${element.price * element.pieces}</td>
                </tr>`;
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
               * {
                   font-family: 'Poppins', sans-serif;
                   padding: 0;
               }
               html { -webkit-print-color-adjust: exact; }
               .app__invoice{
                   width: 792px;
                   min-height: 1122px;
               }
               p{
                   font-size: 11px;
               }
               tr{
                   display: flex;
               
               }
               .No{
                   width: 50px;
               }
               .item{
                   width: 500px;
               }
               .price, .quant, .total{
                   width: 81px;
               }
               th{
                   font-weight: 500;
                   font-size: 14px;
                   padding: 4px 8px;
               }
               td{
                   font-size: 11px;
                   padding: 4px 8px;
               }
               table, th, td{
                   border: 1px solid #e4e3e3;
               }
           </style>
       </head>
       
       <body>
           <div class="app__invoice" style="background-color: #fff; display: flex; flex-direction: column;;">
               <div class="app__invoice-head" style="display: flex; justify-content: space-between;align-items: center; padding: 37px 24px;">
                   <img src="" alt="Logo">
                   <p>January 12th 2023</p>
               </div>
               <div class="app__invoice-people" style="display: flex; justify-content: space-between;align-items: center; padding: 37px 24px; --webkit-background-color: #e0e4e5;">
                   <div class="app__invoice-from">
                       <p style="font-size: 16px; font-weight: 500; color: #00B6CE;">${sender[0].name}</p>
                       <p>${sender[0].businessName}</p>
                       <p>${sender[0].email}</p>
                       <p>${sender[0].phoneNo}</p>
                   </div>
                   <div class="app__people-icon" style="width: 60px;height: 60px; background-color: #fff; border-radius: 50%; align-items: center; display: flex; justify-content: center;">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>
                   </div>
                   <div class="app__people-client">
                       <p style="font-size: 16px; font-weight: 500; color: #00B6CE;">${invoice[0].to}</p>
                       <p>${invoice[0].clientBusiness}</p>
                       <p>${invoice[0].clientEmail}</p>
                       <p>${invoice[0].clientPhone}</p>
                   </div>
               </div>
               <div class="app__invoice-items" style="margin-top: 10px;">
                   <table style="table-layout: fixed; width: 100%; text-align: left; border-collapse: collapse;">
                       <tr>
                           <th class="No" >Sr No.</th>
                           <th class="item">Item</th>
                           <th class="price">Price</th>
                           <th class="quant">Quantity</th>
                           <th class="total">Total</th>
                       </tr>
                       ${strGen(items)}
                   </table>
       
               </div>
               <p style="margin-left: auto; margin-right: auto;">**This is a computer generated document. No signature is required.**</p>
           </div>
       </body>
       
       </html>`
    )
}