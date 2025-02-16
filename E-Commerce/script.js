// profile
function profile(){
    document.querySelector(".profile_svg").addEventListener("click",function(){
            let profile_bar=document.querySelector(".profile_bar");
            profile_bar.classList.toggle("profile_bar2");
        })
    }
    profile();


let productsData = []; // Store products globally

function search() {
    document.querySelector("#search").addEventListener("input", function() {
        let searchValue = this.value.toLowerCase();
        
        // Filter cards based on search input
        let filteredData = productsData.filter(product => 
            product.category.toLowerCase().includes(searchValue)
        );
        
        // Update displayed cards based on filtered data
        displayCards(filteredData);
    });
}

function dropdown(){
    
}

function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
        .then((result) => result.json())
        .then((data) => {
            productsData = data;  // Store the fetched data to array
            displayCards(productsData);  // Display all cards in product data
        })
        .catch((error) => console.log(error));
}

function displayCards(data) {
    let card_row1 = document.querySelector(".card_row1");
    card_row1.innerHTML = ""; // Clear existing cards

    // Loop through the filtered or all products
    data.forEach(product => {
        let container = document.createElement("div");
        container.classList.add("container_row1");

        let img_box = document.createElement("div");
        img_box.classList.add("imgbox_row1");

        let img = document.createElement("img");
        img.setAttribute("src", product.image);
        img.classList.add("img_row1");

        let bottom = document.createElement("div");
        bottom.classList.add("bottom_row1");

        let title = document.createElement("p");
        title.innerHTML = product.title;
        title.classList.add("title_row1");

        let price = document.createElement("span");
        price.innerHTML = "₹" + product.price;
        price.classList.add("price_row1");

        let buttons = document.createElement("div");
        buttons.classList.add("buttons");

        let cart = document.createElement("button");
        cart.innerHTML = "Cart";
        cart.classList.add("cart_row1");

        let buy = document.createElement("button");
        buy.innerHTML = "Buy";
        buy.classList.add("buy_row1");

        // Append elements to the card
        card_row1.append(container);
        container.append(img_box);
        img_box.append(img);
        container.append(bottom);
        bottom.append(title);
        bottom.append(price);
        bottom.append(buttons);
        buttons.append(cart);
        buttons.append(buy);
    });
}

fetchProducts(); // Fetch products on page load
search(); // Initialize the search functionality
