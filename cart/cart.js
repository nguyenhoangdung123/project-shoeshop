const renderCartContent = async () => {
    const productInCart = JSON.parse(localStorage.getItem("productInCart"));
    console.log("productInCart");
    const cartEmpty = document.getElementById("cart-empty")
    const cartContent = document.getElementById("cart-content");
    if (productInCart.length > 0) {
        cartEmpty.style.display = "none";
        cartContent.style.display = "flex";
        cartContent.innerHTML +=   `
            <div>
                your cart
            </div>
        `
        let totalPrice = 0;
        for (let product of productInCart) {
            cartContent.innerHTML += `
                <div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">đ ${product.price}</div>
                </div>
            `
            let productPrice = product.price;
            productPrice = productPrice.replace(",","");
            productPrice = productPrice.replace(",","");
            totalPrice += Number(productPrice);
        }
        const reverseString = (str) => {
            let reversedString = "";
            for (let i = str.length - 1; i >= 0; i--) {
                reversedString += str[i];
            }
            return(reversedString)
        }
        const numberToMoney = (num) => {
            const moneyPart = [];
            const numString = String(num);
            let count = 0;
            let onePart = "";
            for (let i = numString.length - 1; i >= 0; i--) {
                onePart += numString[i];
                console.log(numString[i]);
                count ++;
                if (count === 3 || i === 0) {
                    moneyPart.push(reverseString(onePart));
                    onePart = "";
                    count = 0;
                }
            }
            let moneyString = "";
            for (let i = moneyPart.length - 1; i >= 0; i--) {
                moneyString += moneyPart[i];
                if (i != 0) {
                    moneyString += ","
                }
            }
            return(moneyString);
        }
        cartContent.innerHTML += `
            <div>
                total:đ ${numberToMoney(totalPrice)}
            </div>
        `
    }
    else {
        cartEmpty.style.display = "block";
        cartContent.style.display = "none";
    }
}
renderCartContent();