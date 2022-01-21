var data = [
  {
    rupeeSign: "₹",
    MRP: 6499,
    price: 7279,
    name: "Hotel Patliputra Contential",
    Star: 3.7,
    offer: "Book 1 room",
    place: "patna",
    img_url:
      "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/303bb3da.jpg?impolicy=fcrop&w=455&h=235&p=1&q=medium",
  },
  {
    rupeeSign: "₹",
    MRP: 9999,
    price: 7279,
    name: "Oberoi Udaivilas",
    Star: 4.7,
    offer: "20% Off",
    place: "patna",
    img_url:
      "https://images.trvl-media.com/hotels/2000000/1500000/1495200/1495156/478d1b08.jpg?impolicy=fcrop&w=455&h=235&p=1&q=medium",
  },
  {
    rupeeSign: "₹",
    MRP: 6499,
    price: 7279,
    name: "Shiv Niwas Palace",
    Star: 3.7,
    offer: "",
    place: "patna",
    img_url:
      "https://images.trvl-media.com/hotels/2000000/1500000/1495200/1495156/f1dc7646.jpg?impolicy=fcrop&w=455&h=235&p=1&q=medium",
  },
  {
    rupeeSign: "₹",
    MRP: 6499,
    price: 7279,
    name: "Hyatt Regency",
    Star: 3.7,
    offer: "",
    place: "patna",
    img_url:
      "https://images.trvl-media.com/hotels/20000000/19500000/19490300/19490213/db95efc3.jpg?impolicy=fcrop&w=455&h=235&p=1&q=medium",
  },
  {
    rupeeSign: "₹",
    MRP: 6499,
    price: 7279,
    name: "ITC Hotels",
    Star: 3.7,
    offer: "",
    place: "patna",
    img_url:
      "https://images.trvl-media.com/hotels/36000000/35220000/35218300/35218290/c32a3108.jpg?impolicy=fcrop&w=455&h=235&p=1&q=medium",
  },
  {
    rupeeSign: "₹",
    MRP: 9099,
    price: 8979,
    name: "The Taj Mahal Palace",
    Star: 4.0,
    offer: "",
    place: "mumbai",
    img_url:
      "https://images.trvl-media.com/hotels/1000000/870000/860900/860842/8b377bf1.jpg?impolicy=fcrop&w=455&h=235&p=1&q=medium",
  },
  {
    rupeeSign: "₹",
    MRP: 8499,
    price: 7279,
    name: "Hotel Patliputra Contential",
    Star: 3.7,
    offer: "",
    place: "mumbai",
    img_url:
      "https://images.trvl-media.com/hotels/4000000/3030000/3021000/3020992/bd8f1693.jpg?impolicy=fcrop&w=455&h=235&p=1&q=medium",
  },
  {
    rupeeSign: "₹",
    MRP: 4099,
    price: 7279,
    name: "Fernhill Palace",
    Star: 3.7,
    offer: "",
    place: "mumbai",
    img_url:
      "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/303bb3da.jpg?impolicy=fcrop&w=455&h=235&p=1&q=medium",
  },
  {
    rupeeSign: "₹",
    MRP: 5599,
    price: 7279,
    name: "Elite Grand Hotel",
    Star: 3.7,
    offer: "",
    place: "Bangalore",
    img_url:
      "https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/ece34f49.jpg?impolicy=fcrop&w=455&h=235&p=1&q=medium",
  },
  {
    rupeeSign: "₹",
    MRP: 6699,
    price: 7279,
    name: "Radisson Blu",
    Star: 3.7,
    offer: "",
    place: "Bangalore",
    img_url:
      "https://images.trvl-media.com/hotels/7000000/6100000/6097600/6097535/765c57de.jpg?impolicy=fcrop&w=455&h=235&p=1&q=medium",
  },
];
localStorage.setItem("hotelDetail", JSON.stringify(data));
var products = JSON.parse(localStorage.getItem("hotelDetail"));
var cartStorage = [];
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


var topDiv = document.querySelector("#hotellist");

function showHotel(e) {
   e.preventDefault();
  show(products);
}
function show(products) {
  topDiv.innerHTML = "";
  products.map(function (item) {
     var mainDiv = document.createElement("div");
     mainDiv.setAttribute("id", "mainDiv");

    var imageDiv = document.createElement("div");
    imageDiv.setAttribute("id", "imageDiv");
    var img = document.createElement("img");
    img.setAttribute("src", item.img_url);
    img.setAttribute("id", "hotelImage");
    imageDiv.append(img);

    var mrpDiv = document.createElement("div");
    mrpDiv.setAttribute("id", "mrpDiv");
    var btn = document.createElement("button");
    btn.setAttribute("id", "bookingBtn");
    btn.textContent = "Book Hotel";
    btn.addEventListener("click", function () {
      cartData(item);
    });
    var hr = document.createElement("br");
    var price = document.createElement("h1");
    price.textContent = `${item.rupeeSign} ${item.MRP}`;
    mrpDiv.append(btn, hr, price);

    var textDiv = document.createElement("div");
    textDiv.setAttribute("id", "textDiv");
    var name1 = document.createElement("h1");
    name1.textContent = item.name;
    
    var place1 = document.createElement("h3");
    place1.textContent = item.place;
    var p = document.createElement("p");
    p.textContent = "Free self-parking on site";
    var star1 = document.createElement("p");
    star1.textContent = `${item.Star}* /5`
    textDiv.append(name1, place1, p, star1);
  
    mainDiv.append(imageDiv, textDiv, mrpDiv);
    topDiv.append(mainDiv, hr)
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

  if (isThere){
    alert("Already There");
    window.location.href = "checkout.html";
  } 
  else if (!isThere) {
    alert("Product Added");
    cartStorage.push(item);
    localStorage.setItem("cartStorageData", JSON.stringify(cartStorage));
    window.location.href = "checkout.html";
  }
}


