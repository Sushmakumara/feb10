// var cart = [];
// function findAmount() {
//     let qty = parseInt(document.getElementById("qty").value);
//     let price = parseInt(document.getElementById("price").value);
//     let amount = qty * price;
//     document.getElementById("amount").value = amount;
// }
// function addItem() {
//     let name = document.getElementById("name").value;
//     let qty = parseInt(document.getElementById("qty").value);
//     let price = parseInt(document.getElementById("price").value);
//     let amount = parseInt(document.getElementById("amount").value);
//     let product = {name:name,qty:qty, price:price,amount:amount};
//     cart.push(product);
//     // clear boxes
//     document.getElementById("name").value = ""
//     document.getElementById("qty").value = ""
//     document.getElementById("price").value = ""
//     document.getElementById("amount").value = ""
//     // cart html
//     let cart_rows = "";
//     for(let prod of cart) {
//         cart_rows = cart_rows + `<TR><TD>${prod.name}</TD>
//                 <TD>${prod.qty}</TD>
//                 <TD>${prod.price}</TD>
//                 <TD>${prod.amount}</TD>
//                 </TR>`;
//     }
//     let totalAmount = cart.reduce(function(sum,prod){
//         return sum + parseInt(prod.amount);
//     },0)
//     let table = `<TABLE class="table table-border">
//         <TR>    
//             <TH>PRODUCT</TH>
//             <TH>QTY</TH>
//             <TH>PRICE</TH>
//             <TH>AMOUNT</TH>       
//         </TR>
//         ${cart_rows}
//         <TR>    
//             <TH colspan="3">Total</TH>
//             <TH>${totalAmount}</TH>       
//         </TR>
//         </TABLE>`
//     document.getElementById("scart").innerHTML = table;
// }

var cart = [];

function findAmount() {
    let qty = parseInt(document.getElementById("qty").value) || 0;
    let price = parseInt(document.getElementById("price").value) || 0;
    let amount = qty * price;
    document.getElementById("amount").value = amount;
}

function addItem() {
    let name = document.getElementById("name").value.trim();
    let qty = parseInt(document.getElementById("qty").value);
    let price = parseInt(document.getElementById("price").value);
    let amount = parseInt(document.getElementById("amount").value);

    if (!name || isNaN(qty) || isNaN(price) || isNaN(amount) || qty <= 0 || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }

    // Check if the product already exists in the cart
    let existingProduct = cart.find(prod => prod.name.toLowerCase() === name.toLowerCase());

    if (existingProduct) {
        // Update existing product quantity and amount
        existingProduct.qty += qty;
        existingProduct.amount = existingProduct.qty * existingProduct.price;
    } else {
        // Add new product to cart
        let product = { name, qty, price, amount };
        cart.push(product);
    }

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("price").value = "";
    document.getElementById("amount").value = "";

    updateCart();
}

function updateCart() {
    let cart_rows = cart.map(prod => `
        <tr>
            <td>${prod.name}</td>
            <td>${prod.qty}</td>
            <td>${prod.price}</td>
            <td>${prod.amount}</td>
        </tr>
    `).join("");

    let totalAmount = cart.reduce((sum, prod) => sum + prod.amount, 0);

    let table = `
        <table class="table table-bordered">
            <tr>
                <th>PRODUCT</th>
                <th>QTY</th>
                <th>PRICE</th>
                <th>AMOUNT</th>
            </tr>
            ${cart_rows}
            <tr>
                <th colspan="3">Total</th>
                <th>${totalAmount}</th>
            </tr>
        </table>`;

    document.getElementById("scart").innerHTML = table;
}
