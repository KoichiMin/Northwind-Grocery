"use strict"

window.onload = () =>{
    const dropdown = document.getElementById("dropdown");
    
    dropdown.addEventListener('change', () => {
        const selectedValue = dropdown.value;
        console.log('Selected value:', selectedValue);
        // console.log(selectedValue == "ViewAll")
        if(selectedValue == "viewAll"){
            displayAllProducts()
        }
    });
}


const displayAllProducts = () =>{
    fetch("http://localhost:8081/api/products")
    .then(res => res.json())
    .then(data =>{
        // console.log(data)
        data.forEach(product =>{
            displaySingleProduct(product)
        })
    })
}


const cardContainer = document.getElementById("cardContainer");
const card = document.createElement("div");

const displaySingleProduct = (product) => {
    const cardContainer = document.getElementById("cardContainer");

    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";
    card.style.marginBottom = "20px"; // Add some margin between cards

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = product.productName;

    const subtitle = document.createElement("h6");
    subtitle.classList.add("card-subtitle", "mb-2", "text-body-secondary");
    subtitle.textContent = `Price: $${product.unitPrice}`;

    const stockInfo = document.createElement("p");
    stockInfo.classList.add("card-text");
    stockInfo.textContent = `Units in Stock: ${product.unitsInStock}`;

    const supplierInfo = document.createElement("p");
    supplierInfo.classList.add("card-text");
    supplierInfo.textContent = `Supplier: ${product.supplier}`;

    const seeDetails = document.createElement("a");
    seeDetails.classList.add("card-link");
    seeDetails.textContent = "See Details";
    seeDetails.href = "details.html"; 
    seeDetails.target = "_blank";

    cardBody.appendChild(title);
    cardBody.appendChild(subtitle);
    cardBody.appendChild(stockInfo);
    cardBody.appendChild(supplierInfo);
    cardBody.appendChild(seeDetails); 

    card.appendChild(cardBody);
    cardContainer.appendChild(card);
};
