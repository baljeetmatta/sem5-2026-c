const code = document.querySelector("#code");
const price = document.querySelector("#price");
const qty = document.querySelector("#qty");
const addBtn = document.querySelector("#addBtn");
const items = document.querySelector("#items");
let order = [];
let itemno = 1;


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

    }

})

addBtn.addEventListener("click", () => {
    console.log("Clicked");
    productAdd();

})

function productAdd() {

    //object
    addProduct();
    code.value = '';
    qty.value = ''
    price.value = ''
}
qty.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') {
        productAdd();
    }




})

function addProduct() {
    let pCode = code.value;//string
    let pPrice = price.value;
    let pQty = qty.value;
    let totalPrice = pPrice * pQty;
    console.log(totalPrice);
    //DOM CREATION

    const productRow = document.createElement("tr");

    const productName = document.createElement("td");
    productName.innerText = pCode;

    const productPrice = document.createElement("td");
    productPrice.innerText = pPrice;

    const productQty = document.createElement("td");
    productQty.innerText = pQty;

    const productTotal = document.createElement("td");
    productTotal.innerText = totalPrice;

    productRow.append(productName);
    productRow.append(productPrice);
    productRow.append(productQty);
    productRow.append(productTotal);

    items.append(productRow);






}