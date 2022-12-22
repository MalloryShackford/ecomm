const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "assets/images/air.png"
            },
            {
                code: "darkblue",
                img: "assets/images/air2.png"
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "assets/images/jordan.png"
            },
            {
                code: "green",
                img: "assets/images/jordan2.png"
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "black",
                img: "assets/images/blazer.png"
            },
            {
                code: "green",
                img: "assets/images/blazer2.png"
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "assets/images/crater.png"
            },
            {
                code: "lightgray",
                img: "assets/images/crater2.png"
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "assets/images/hippie.png"
            },
            {
                code: "black",
                img: "assets/images/hippie2.png"
            },
        ],
    },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item, index) =>{
    item.addEventListener("click", () => {
        //change current slide 
       wrapper.style.transform = `translate(${-100 * index}vw)`;
       //change the chosen product
       chosenProduct = products[index];
       //change texts of currentProduct
       currentProductTitle.textContent = chosenProduct.title;
       currentProductPrice.textContent = "$" + chosenProduct.price;
       currentProductImg.src = chosenProduct.colors[0].img;
       currentProductColors.forEach((color, index) => {
        //assign new colors
        color.style.backgroundColor = chosenProduct.colors[index].code;
       })    
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", ( )=> {
        currentProductImg.src = chosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
        size.style.background = "white";
        size.style.color = "black";
        });
        size.style.background = "black";
        size.style.color = "white";
        });
    });

    const productButton = document.querySelector(".productButton");
    const payment = document.querySelector(".payment");
    const close = document.querySelector(".close");

    productButton.addEventListener("click", () => {
        payment.style.display = "flex";
    })
    close.addEventListener("click", () => {
        payment.style.display = "none";
    });

const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'nike.com';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);