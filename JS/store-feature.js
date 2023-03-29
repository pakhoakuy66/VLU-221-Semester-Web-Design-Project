//Cart
let toggleCartButton = document.getElementsByClassName("toggle-cart")[0];
let exitCartButton = document.getElementsByClassName("exit")[0];
let cart = document.getElementsByClassName("cart")[0];
let remove = document.getElementsByClassName("remove");
let quantityInput = document.getElementsByClassName("quantity-value");
let addToCartButton = document.getElementsByClassName("to-cart");
let purchaseButton = document
    .getElementsByClassName("purchase")[0]
    .addEventListener("click", purchaseClicked);

toggleCartButton.addEventListener("click", toggleCart);
exitCartButton.addEventListener("click", toggleCart);

for (let i = 0; i < quantityInput.length; i++) {
    let input = quantityInput[i];
    input.addEventListener("change", quantityChange);
}

for (let i = 0; i < remove.length; i++) {
    let button = remove[i];
    button.addEventListener("click", removeCartItem);
}

for (let i = 0; i < addToCartButton.length; i++) {
    let button = addToCartButton[i];
    button.addEventListener("click", addToCartClicked);
}

function toggleCart() {
    toggleCartButton.classList.toggle("toggle");
    cart.classList.toggle("toggle");
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
    updateAmount();
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName("in-cart")[0];
    let items = cartItemContainer.getElementsByClassName("cart-item");
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let priceElement = item.getElementsByClassName("price-value")[0];
        let quantityElement = item.getElementsByClassName("quantity-value")[0];
        let priceValue = parseFloat(priceElement.innerText.replace("$", ""));
        let quantityValue = quantityElement.value;
        total += priceValue * quantityValue;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total")[0].innerText = "$" + total;
}

function quantityChange(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    input.value = parseInt(input.value);
    updateCartTotal();
}

function addToCartClicked(event) {
    let button = event.target;
    let shopItem = button.parentElement;
    let title = shopItem.getElementsByClassName("title")[0].innerText;
    let price = shopItem.getElementsByClassName("price")[0].innerText;
    let imageSrc = shopItem.getElementsByTagName("img")[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
    updateAmount();
}

function addItemToCart(title, price, imageSrc) {
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    let cart = document.getElementsByClassName("in-cart")[0];
    let itemName = cart.getElementsByClassName("title");
    for (let i = 0; i < itemName.length; i++) {
        if (itemName[i].innerText == title) {
            alert("This item is already added to the cart");
            return;
        }
    }
    let cartItemContent = `
        <div class="image">
            <img src="${imageSrc}" alt="" />
        </div>
        <div class="title">
            <span>
                ${title}
            </span>
        </div>
        <div class="quantity">
            <input type="number" value="1" class="quantity-value" />
        </div>
        <div class="price">
            <span class="price-value">${price}</span>
            <span class="remove">Remove</span>
        </div>`;
    cartItem.innerHTML = cartItemContent;
    cart.append(cartItem);
    cartItem
        .getElementsByClassName("remove")[0]
        .addEventListener("click", removeCartItem);
    cartItem
        .getElementsByClassName("quantity-value")[0]
        .addEventListener("change", quantityChange);
}

function purchaseClicked() {
    let cart = document.getElementsByClassName("in-cart")[0];
    if (!cart.hasChildNodes()) {
        alert("Please add at least 1 item to the cart before purchase");
        return;
    }
    while (cart.hasChildNodes()) cart.removeChild(cart.firstChild);
    updateCartTotal();
    updateAmount();
    alert("Thank you for your purchase");
}

function updateAmount() {
    let item = document.getElementsByClassName("cart-item");
    let amount = document.getElementsByClassName("amount")[0];
    amount.innerText = item.length;
}

//Color selection
let color = document.getElementsByClassName("color");

for (let i = 0; i < color.length; i++) {
    let currentColor = color[i];
    currentColor.addEventListener("click", isTargeted);
}

function isTargeted(event) {
    let thisColor = event.target;
    let thisColorParent = thisColor.parentElement.parentElement;
    let thatColor = thisColorParent.getElementsByClassName("color");
    for (let i = 0; i < thatColor.length; i++)
        thatColor[i].classList.remove("active");
    thisColor.classList.add("active");
}

//Sort
let sortSelector = document.getElementById("sort");
let Default = document.getElementsByClassName("items")[0].innerHTML;

sortSelector.addEventListener("change", setLayout);

function setLayout(event) {
    let thisLayout = event.target;
    if (thisLayout.value == "default") defaultLayout();
    else if (thisLayout.value == "A-Z") AZLayout(1);
    else if (thisLayout.value == "Z-A") AZLayout(-1);
    for (let i = 0; i < addToCartButton.length; i++) {
        let button = addToCartButton[i];
        button.addEventListener("click", addToCartClicked);
    }
    for (let i = 0; i < color.length; i++) {
        let currentColor = color[i];
        currentColor.addEventListener("click", isTargeted);
    }
}

function defaultLayout() {
    let shopItems = document.getElementsByClassName("items")[0];
    shopItems.innerHTML = Default;
}

function AZLayout(dir) {
    let card = document.getElementsByClassName("card");
    for (let i = 0; i < card.length - 1; i++)
        for (let j = i + 1; j < card.length; j++) {
            let titleBefore =
                card[i].getElementsByClassName("title")[0].innerText;
            let titleAfter =
                card[j].getElementsByClassName("title")[0].innerText;
            if (titleBefore.localeCompare(titleAfter) == dir) {
                let placeHolder = card[i].innerHTML;
                card[i].innerHTML = card[j].innerHTML;
                card[j].innerHTML = placeHolder;
            }
        }
}
