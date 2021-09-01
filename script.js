let total = 0;
let $product = document.getElementById("product");

let $total = document.getElementById("total");
let $quantity = document.getElementById("quantity");

$product.onchange = calcTotal

function calcTotal() {
    let productPrice;

    if ($product.value == "p1") {
        productPrice = 89.99;
    }
    else if ($product.value == "p2") {
        productPrice = 349.99;
    }
    else if ($product.value == "p3") {
        productPrice = 3.99;
    }
    let quantity = $quantity.value;
    let total = quantity * productPrice;
    console.log(productPrice, quantity);
    $total.value = total;

}
