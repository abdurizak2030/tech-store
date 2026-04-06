const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

// OPEN
openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

// CLOSE
function closeNav(){
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
}

closeMenu.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);

// DROPDOWN FIX
document.querySelectorAll(".dropdown").forEach(item => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();

    const submenu = item.querySelector(".submenu");

    // close others
    document.querySelectorAll(".submenu").forEach(s => {
      if(s !== submenu) s.style.display = "none";
    });

    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block";
  });
});
let cart = [];
let wishlist = [];
let total = 0;

// 1. Shaqada lagu muujinayo/qarinayo Dropdown-ka
function toggleDropdown(id) {
    document.getElementById(id).classList.toggle('show');
}

// 2. Shaqada Add to Cart
function addToCart(name, price, image) {
    cart.push({ name, price, image });
    total += price;
    updateUI();
}

// 3. Shaqada Add to Wishlist
function addToWishlist(name, image) {
    wishlist.push({ name, image });
    updateUI();
}

// 4. Shaqada Cusboonaysiinta Muuqaalka (UI)
function updateUI() {
    // Cusboonaysii Badges-ka (Tirada sare)
    document.getElementById('cart-badge').innerText = cart.length;
    document.getElementById('wishlist-badge').innerText = wishlist.length;

    // Cusboonaysii Liiska Dambiisha (Cart List)
    const cartList = document.getElementById('cart-items-list');
    cartList.innerHTML = ""; // Nadiifi marka hore
    cart.forEach(item => {
        cartList.innerHTML += `
            <div class="cart-item-row">
                <img src="${item.image}">
                <div>
                    <p style="margin:0; font-weight:bold;">${item.name}</p>
                    <small>$${item.price}</small>
                </div>
            </div>
        `;
    });

    // Cusboonaysii Liiska Jaceylka (Wishlist List)
    const wishList = document.getElementById('wishlist-items-list');
    wishList.innerHTML = "";
    wishlist.forEach(item => {
        wishList.innerHTML += `
            <div class="cart-item-row">
                <img src="${item.image}">
                <p style="margin:0;">${item.name}</p>
            </div>
        `;
    });

    // Cusboonaysii Wadarta Lacagta (Total)
    document.getElementById('total-price').innerText = total;
}

// Xir dropdown-ka hadii meel bannaanka ah la riixo
window.onclick = function(event) {
    if (!event.target.matches('.fa-cart-shopping') && !event.target.matches('.fa-heart')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
}
// SEARCH FUNCTION
const searchInput = document.querySelector(".search-box input");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function () {
  const searchValue = searchInput.value.toLowerCase();

  products.forEach(function (product) {
    const productName = product.querySelector("h4").textContent.toLowerCase();

    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});