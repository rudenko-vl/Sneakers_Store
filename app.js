const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

let listProducts = []
let choosenProduct = listProducts[0];


const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = listProducts[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


const payButton = document.querySelector('.payButton');
const nameInput = document.getElementById('nameInput');
const addressInput = document.getElementById('addressInput');
const phoneImput = document.getElementById('phoneImput');
const cardNumber = document.getElementById('cardNumber');
const cardMounth = document.getElementById('cardMounth');
const cardYear = document.getElementById('cardYear');
const cardCvv = document.getElementById('cardCvv');
const usersInfo = [];

const resetForm = () => {
  nameInput.value = ''
  addressInput.value = ''
  phoneImput.value = ''
  cardNumber.value = ''
  cardMounth.value = ''
  cardYear.value = ''
  cardCvv.value = ''
}

payButton.onclick = (ev) => {
  ev.preventDefault();
  const payInfo = {
    "name": nameInput.value,
    "address": addressInput.value,
    "phone": phoneImput.value,
    "card": cardNumber.value,
    "mounth": cardMounth.value,
    "year": cardYear.value,
    "cvv": cardCvv.value,
  }
  const allInputs = payInfo.name && payInfo.address && payInfo.phone && payInfo.card && payInfo.mounth && payInfo.year && payInfo.cvv;

  if (!allInputs) {
    alert('Fill in all information')
  } else {
    usersInfo.push(payInfo)
    console.log(usersInfo)
    resetForm()
  }
}

const initApp = () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      listProducts = data;
    });
};
initApp();