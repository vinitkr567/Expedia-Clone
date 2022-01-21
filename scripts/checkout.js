var dataArr = [];
document.querySelector("#btn").addEventListener("click", function () {
  var Fullname = document.querySelector("#name1").value;
  var pin = document.querySelector("#pincode").value;
  var cardnum = document.querySelector("#cardnum").value;
  var nameCard = document.querySelector("#nameCard").value;
  var cvv = document.querySelector("#cvv").value;

  if (
    Fullname == "" ||
    pin == "" ||
    cardnum == "" ||
    cardnum == "" ||
    nameCard == "" ||
    cvv == ""
  ) {
    alert("Empty Input fields");
  } else if (cardnum.length < 16) {
    alert(" Please Enter 16 digit Card Number");
  } else if (pin.length != 6) {
    alert(" Please Enter Correct Pin Code");
  } else {
    var dataObj = {
      Fullname,
      pin,
      cardnum,
      nameCard,
      cvv,
    };
    dataArr.push(dataObj);
    localStorage.setItem("cwp1", JSON.stringify(dataArr));
    alert("Order Booked");
    localStorage.removeItem("cartStorageData");
    window.location.href = "index.html";
  }
});
function payment() {
  var pincode = document.getElementById("pin").value;
  var mobile = document.getElementById("phoneno").value;

  var pincode1 = 6;
  var mobile1 = 10;

  if (pincode.length == pincode1 && mobile.length == mobile1) {
    alert("Yo will be now redirected for payment ");
    window.location.href = "logout.html";
  } else {
    alert("Please enter 6 digit pincode and 10 digit mobile number");
  }

  var userArr = JSON.parse(localStorage.getItem("userdata")) || [];
  var fullname = document.getElementById("fullname").value;
  var number = document.getElementById("number").value;
  var pincode = document.getElementById("pincode").value;
  // console.log()
  var userDetails = {
    Fullname: fullname,
    Number: number,
    Pincode: pincode,
  };
  //console.log();
  userArr.push(userDetails);
  //console.log(userArr);
  localStorage.setItem("userData", JSON.stringify(userArr));
  //console.log("userArr:",userArr);
}

//   ------------------------right javascript part-----------------------------------------------------
var noRoom;
function noR() {
  noRoom = document.getElementById("room").value;
  return noRoom;
}
var productItem = JSON.parse(localStorage.getItem("cartStorageData"));
console.log(productItem);
productItem.map(function (item) {
  display(item.name, item.img_url, item.MRP, item.rupeeSign, item.Star);
});

function display(name, image_url, MRP, rupee, star) {
  var div1 = document.getElementById("bookingFinal");
  var div2 = document.getElementById("PriceFinal");
  var Img = document.createElement("img");
  Img.setAttribute("id", "vImg");
  Img.setAttribute("src", image_url);
  var name2 = document.createElement("h2");
  name2.textContent = name;
  var star3 = document.createElement("h3");
  star3.textContent = `${star} */5 Excellent`;

  var pa = document.createElement("p");
  pa.textContent = "Guests rated this property 4.4/5 for cleanliness";

  div1.append(Img, name2, star3, pa);

  var pd = document.createElement("h1");
  pd.textContent = "Price Details";
  var hr = document.createElement("hr");
  var pri1 = document.createElement("h2");
  pri1.textContent = `Price:-    ${rupee} ${MRP}`;
  var taxes = 0.18 * MRP;

  var tax = document.createElement("h2");
  tax.innerText = `Taxes:-    ${rupee} ${taxes}`;

  var total = document.createElement("h1");
  total.innerText = `Total Price:-    ${rupee} ${taxes + MRP}`;

  div2.append(pd, pri1, tax, hr, total);
}
