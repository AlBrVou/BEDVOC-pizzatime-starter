let orderPizzas = []
let pizzaSize = document.getElementById("pizza-Size");
let pizzaType = document.getElementById("pizza-Type");
let quantity = document.getElementById("Quantity");
function price(inputValue) {
    if (!isNaN(inputValue)) return Number(inputValue);
    const priceArray = inputValue.split("-").filter(x => !isNaN(x)).map(Number);
    return priceArray[0];
}
function pName(inputValue) {
    const nameArray = inputValue.split("-").filter(x => isNaN(x))
    return nameArray[0];
}

function resetForm()  {
    submitPizza.reset()
}

let orderTotal = 0
const submitPizza = document.getElementById("pizza-form")
submitPizza.addEventListener("submit", (e) => {
    e.preventDefault();
    let toppingList = document.querySelectorAll('input[name="topping"]:checked');
    let toppingArray = Array.from(toppingList).map(x => x.value);
    const pType= pName(pizzaType.value)
    const pPrice = price(pizzaType.value)
    const pSize = pName(pizzaSize.value)
    const pSizePrice = price(pizzaSize.value)
    const tNames = toppingArray.map(topping => pName(topping));
    const tPrice = toppingArray.reduce((acc, topping) => acc + price(topping), 0)
    const pQuantity = Number(quantity.value)
    pTotalPrice = (pPrice+pSizePrice+tPrice) * pQuantity
    orderTotal += (pPrice+pSizePrice+tPrice) * pQuantity

    const order = {
        pizzaName: pType,
        pizzaPrice: pPrice,
        size: pSize,
        sizePrice: pTotalPrice,
        toppings: tNames,
        toppingsPrice: tPrice,
        quantity: pQuantity,
        pizzaTotalPrice: orderTotal

    }
    // orderPizzas.push(...order)
    orderPizzas.push(order);

    // order.forEach(element => {
    //     orderPizzas.push[element]
    // });

    console.log(pType);
    console.log(pPrice);
    console.log(pSize);
    console.log(pSizePrice);
    console.log(tPrice);
    console.log(tNames);
    
    console.log(orderTotal);
    console.log(order);
    console.log(orderPizzas);
    

    const ul = document.getElementById("order-list"); // or document.querySelector("ul")
    orderPizzas.push(order);
    const li = document.createElement("li");
    const text = document.createTextNode(order.quantity+ " x " + order.pizzaName+" - "+ order.sizePrice + " NOK" );
    ul.appendChild(li);
    li.appendChild(text);

    document.getElementById("order-total").textContent = orderTotal
})

