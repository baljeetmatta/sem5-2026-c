"use strict"
const code = document.querySelector("#code");
const price = document.querySelector("#price");
const qty = document.querySelector("#qty");
const addBtn = document.querySelector("#addBtn");
const items = document.querySelector("#items");
const total = document.querySelector("#total");
const invoiceBtn = document.querySelector("#invoiceBtn");
let order = [];
let invoices=[];
let itemno = 1;
let invoiceNumber=1;
let currentCode = -1;
// localStorage.setItem("temp",10);
// let data=Number(localStorage.getItem("temp"));

// data=data+1;
// console.log(data);

// let arr=[1,2,3,4];
// //document.write(arr);
// localStorage.setItem("temp",arr);
// let data=localStorage.getItem("temp");
// console.log(data[1]);
//"demo,2,3,4"

// let arr=[1,2,3,4]
// localStorage.setItem("temp",JSON.stringify(arr));

// let data=JSON.parse(localStorage.getItem("temp"));
// console.log(data);







const products = [
    { code: 101, name: 'Samosa', price: 10 },
    { code: 102, name: 'one', price: 60 },
    { code: 103, name: 'two', price: 90 },
    { code: 104, name: 'three', price: 100 }


]

code.addEventListener("change", () => {
    let productCode = code.value;

    var selectedProducts = products.filter((item) => {
        if (item.code == productCode)
            return true;

    })
    console.log(selectedProducts);
    if (selectedProducts.length != 0) {
        price.value = selectedProducts[0].price
        code.value = selectedProducts[0].name;
        currentCode = selectedProducts[0].code;


    }
    else {
        price.value = '';
        code.value = ''
        currentCode = -1;
    }

})

addBtn.addEventListener("click", () => {
    console.log("Clicked");
    productAdd();

})

invoiceBtn.addEventListener("click",()=>{
//1. Invoice Generate(Object), Array
//2. LocalStorage, Retrieve
//3. order=[]
//4. UI order items

let invoice={
    invoiceNumber,
    date:new Date(),
    items:order,
    total:total.innerText
}
invoices.push(invoice)
localStorage.setItem("invoices",JSON.stringify(invoices));
order=[];
setLocalStorage();
window.location.reload();






});


function productAdd() {

    //1. OBJECT -> code, name,price,qty,linetotal
    //2. Array of Objects(cart)
    //3. UI Create

    //object
    if (currentCode == -1)
        return;


    let pCode = code.value;//string
    let pPrice = price.value;
    let pQty = qty.value;
    let totalPrice = pPrice * pQty;

    let product = {
        code: currentCode,
        name: pCode,
        price: pPrice,
        qty: pQty,
        totalPrice
    }
    console.log(product);
    order.push(product);
    calculateTotal()
    setLocalStorage();


    addProduct(product);
    code.value = '';
    qty.value = ''
    price.value = ''
    code.focus();

    console.log(order);

}
qty.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') {
        productAdd();
    }




})

function addProduct(product) {

    //console.log(totalPrice);
    //DOM CREATION

    const productRow = document.createElement("tr");

    const productName = document.createElement("td");
    productName.innerText = product.name;

    const productPrice = document.createElement("td");
    productPrice.innerText = product.price;

    const productQty = document.createElement("td");
    productQty.innerText = product.qty;

    const productTotal = document.createElement("td");
    productTotal.innerText = product.totalPrice;

    const operations = document.createElement("td");
    const delButton = document.createElement("button");
    delButton.classList.add("delButton")
    delButton.innerHTML = "X";
    delButton.addEventListener("click",()=>{
        //1. UI
        //2. Array
        //Array remove
        order=order.filter((item)=>{
            if(item.code!=product.code)
                return true;
        })
        console.log(order);
        productRow.remove();
        calculateTotal()
        setLocalStorage();
    


    })
    operations.append(delButton);


    productRow.append(productName);
    productRow.append(productPrice);
    productRow.append(productQty);
    productRow.append(productTotal);
    productRow.append(operations);


    items.append(productRow);






}

// function addProduct() {
//     let pCode = code.value;//string
//     let pPrice = price.value;
//     let pQty = qty.value;
//     let totalPrice = pPrice * pQty;
//     console.log(totalPrice);
//     //DOM CREATION

//     const productRow = document.createElement("tr");

//     const productName = document.createElement("td");
//     productName.innerText = pCode;

//     const productPrice = document.createElement("td");
//     productPrice.innerText = pPrice;

//     const productQty = document.createElement("td");
//     productQty.innerText = pQty;

//     const productTotal = document.createElement("td");
//     productTotal.innerText = totalPrice;

//     productRow.append(productName);
//     productRow.append(productPrice);
//     productRow.append(productQty);
//     productRow.append(productTotal);

//     items.append(productRow);






// }

function setLocalStorage()
{
    localStorage.setItem("order",JSON.stringify(order));
     

}
function getLocalStorage()
{
    //1. LocalStorage Fetch
    //2. Store to order -[]
    //3. UI
    if(localStorage.getItem("order"))
        order=JSON.parse(localStorage.getItem("order"));

    //console.log(order);
    order.forEach((item)=>{
        addProduct(item);


    })
    calculateTotal()
    if(localStorage.getItem("invoices"))
        invoices=JSON.parse(localStorage.getItem("invoices"));



}
function calculateTotal()
{
    let totalPrice=0;
    order.forEach((item)=>{
        totalPrice+=item.totalPrice;
    })
    total.innerText=totalPrice;

}
getLocalStorage();

//1. INVOICE GENERATE
//2. DESIGN
