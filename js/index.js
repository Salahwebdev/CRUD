var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCat");
var productDesc = document.getElementById("productDesc");
var productImg = document.getElementById("productImg");
var rowData = document.getElementById("rowData");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");
var searchInput=document.getElementById('search')
var list = [];

if (localStorage.getItem("list") != null) {
  list = JSON.parse(localStorage.getItem("list"));
  displayProduct(list);
}
function addProducts() {
  var product = {
    name: productName.value,
    price: productPrice.value,
    catogriey: productCat.value,
    descreption: productDesc.value,
    img: "imgs/" + productImg.files[0].name,
  };
  list.push(product);
  console.log(list);
  clrForm();
  displayProduct();
  localStorage.setItem("list", JSON.stringify(list));
}
function clrForm() {
  productName.value = "";
  productPrice.value = "";
  productCat.value = "";
  productDesc.value = "";
  productImg.value = "";
}
function displayProduct() {
  var data = "";
  for (var i = 0; i < list.length; i++) {
    data += `<div class="col-lg-3 py-3">
    <div class="card border-0 p-3">
        <img src="${list[i].img}" alt="" class="rounded-3">
        <div class="card-body">
            <h3 class="h6"> Name : ${list[i].name}</h3>
            <h3 class="h6"> Price : ${list[i].price}</h3>
            <h3 class="h6"> Cat  : ${list[i].catogriey}</h3>
            <h3 class="h6"> Desc :${list[i].descreption}</h3>
        </div>
        <button onclick="deleteProduct(${i})" class="btn btn-outline-danger bt-sm w-100 my-2">Delete <i class="fas fa-trash-alt"></i></button>
        <button onclick="setFormForUpdate(${i})" class="btn btn-outline-secondary bt-sm w-100 my-2">Update <i class="fas fa-pen"></i></button>
    </div>
</div>`;
  }
  rowData.innerHTML = data;
}
function deleteProduct(deleIindex) {
  list.splice(deleIindex, 1);
  console.log(list);
  displayProduct();
  localStorage.setItem("list", JSON.stringify(list));
}
var updateIndex;
function setFormForUpdate(i) {
  updateIndex = i;
  addBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");
  productName.value = list[i].name;
  productPrice.value = list[i].price;
  productCat.value = list[i].catogriey;
  productDesc.value = list[i].descreption;

  console.log("hellow");
}

function search(){

  var data = "";
  for (var i = 0; i < list.length; i++) {
    if (list[i].name.toLowerCase().includes(searchInput.value.toLowerCase())==true ) {
      data += `<div class="col-lg-3 py-3">
    <div class="card border-0 p-3">
        <img src="${list[i].img}" alt="" class="rounded-3">
        <div class="card-body">
            <h3 class="h6"> Name : ${list[i].name}</h3>
            <h3 class="h6"> Price : ${list[i].price}</h3>
            <h3 class="h6"> Cat  : ${list[i].catogriey}</h3>
            <h3 class="h6"> Desc :${list[i].descreption}</h3>
        </div>
        <button onclick="deleteProduct(${i})" class="btn btn-outline-danger bt-sm w-100 my-2">Delete <i class="fas fa-trash-alt"></i></button>
        <button onclick="setFormForUpdate(${i})" class="btn btn-outline-secondary bt-sm w-100 my-2">Update <i class="fas fa-pen"></i></button>
    </div>
</div>`;
  }
  rowData.innerHTML = data;
    }
    
console.log(searchInput.value);
}

function updateProdssucts() {
  list[updateIndex].name = productName.value;
  list[updateIndex].price = productPrice.value;
  list[updateIndex].descreption = productDesc.value;
  list[updateIndex].catogriey = productCat.value;
  localStorage.setItem("list", JSON.stringify(list));
  addBtn.classList.remove("d-none");
  updateBtn.classList.add("d-none");
  displayProduct();
  clrForm();
}

var alert = document.getElementById("alert");

function validateInputs(element) {
  var regex = {
    productName: /^[A-Z]\w{3,10}\s?\w{0,5}$/,
    productPrice: /^[1-9][0-9][0-9][0-9][0-9]?$/,
    productDesc: /^.{4,300}$/,
  };
  if (regex[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.remove("d-none");
  }
}
