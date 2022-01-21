var data = [
  {
    rupeeSign: "₹",
    price: 7279,
    name: "Go First",
    t1: "14:45",
    t1: "16:45",
    avb: "Direct",
    p1: "patna",
    p2: "bangalore",
  },
  {
    rupeeSign: "₹",
    price: 7279,
    name: "Vistara",
    t1: "12:15",
    t1: "16:45",
    avb: "1 Stop",
    p1: "patna",
    p2: "bangalore",
  },
  {
    rupeeSign: "₹",
    price: 7279,
    name: "Indigo",
    t1: "14:45",
    t1: "16:45",
    avb: "Direct",
    p1: "patna",
    p2: "bangalore",
  },
];
localStorage.setItem("hotelDetail", JSON.stringify(data));
var products = JSON.parse(localStorage.getItem("hotelDetail"));
var cartStorage = JSON.parse(localStorage.getItem("cartStorageData")) || [];
function sortBy() {
  var selected = document.getElementById("selectRelevance").value;
  console.log("hi");
  if (selected == "low") {
    products = products.sort(function (a, b) {
      return a.MRP - b.MRP;
    });
  }
  if (selected == "high") {
    products = products.sort(function (a, b) {
      return b.MRP - a.MRP;
    });
  }
  if (selected == "alphabetical") {
    console.log(selected);
    products = products.sort(function (a, b) {
      return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
    });
  }
  show(products);
}
var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "containerProduct");
function showAero() {
  var topDiv = document.querySelector("#aero");
  topDiv.append(mainDiv);
  show(products);
}

function show(products) {
  mainDiv.innerHTML = "";
  products.map(function (item) {
    
    var mrpDiv = document.createElement("div");
    mrpDiv.setAttribute("id", "mrpDivArea");
    var rupeeSign = document.createElement("span");
    rupeeSign.setAttribute("id", "signRupee");
    rupeeSign.textContent = item.rupeeSign;
    var h2 = document.createElement("h2");
    h2.setAttribute("id", "afterDiscount");
    h2.textContent = item.price;
    var textDiv = document.createElement("div");
    textDiv.setAttribute("id", "textDivProducts");
    var h1 = document.createElement("a");
    h1.setAttribute("id", "anchorName");
    h1.setAttribute("href", "#");
    h1.textContent = item.name;
    var btn = document.createElement("button");
    btn.setAttribute("id", "productBtn");
    btn.textContent = "ADD TO CART";
    btn.addEventListener("click", function () {
      cartData(item);
    });
    mrpDiv.append(rupeeSign, h2);
    textDiv.append(h1);
    imageDiv.append(mrpDiv, textDiv, btn);
    //mainDiv.append(imageDiv);
  });
}

function cartData(item) {
  var isThere = false;
  for (var i = 0; i < cartStorage.length; i++) {
    if (item === cartStorage[i]) {
      isThere = true;
    } else if (item !== cartStorage[i]) {
      isThere = false;
    }
  }

  if (isThere) alert("Already There");
  else if (!isThere) {
    alert("Product Added");
    cartStorage.push(item);
    localStorage.setItem("cartStorageData", JSON.stringify(cartStorage));
  }
}

var cartProductsForBasket = JSON.parse(localStorage.getItem("cartStorageData"));

// document.getElementById("btn").addEventListener("click", function () {
//   console.log("hi");
//   if (cartProductsForBasket.length > 0) {
//     console.log("btn");
//     window.location.href = "basket.html";
//   }
// });


