// detail
const renderDetail = async () => {
    const productId = localStorage.getItem("productId");
    const response = await fetch(`https://60b8d463b54b0a0017c048f8.mockapi.io/api/v1/shoes/${productId}`);
    const data = await response.json();
    const productName = document.getElementById("product-name");
    productName.innerHTML = data.name;
    const productColor= document.getElementById("product-color");
    productColor.innerHTML = data.color;
    const productBrand = document.getElementById("product-brand");
    productBrand.innerHTML = data.brand;
    const productPrice = document.getElementById("product-price");
    productPrice.innerHTML = data.price;
    const productDescription = document.getElementById("product-description");
    productDescription.innerHTML = data.description;
    const productReleaseDate = document.getElementById("product-releasedate");
    productReleaseDate.innerHTML = data.releasedate;
    const productImgineShoes = document.getElementById("product-imgineshoes");
    productImgineShoes.src = `.${data.imgineShoes}`;
    const addToCart = document.getElementById("addtocart");
    addToCart.addEventListener ("click", () => {
        if (!localStorage.getItem("productInCart")) {
            localStorage.setItem("productInCart",JSON.stringify([]));
        }
        const currentProductsInCart = JSON.parse(localStorage.getItem("productInCart"));
        const newProductsInCart = [...currentProductsInCart,data];
        localStorage.setItem("productInCart",JSON.stringify(newProductsInCart));
    })
}
renderDetail();