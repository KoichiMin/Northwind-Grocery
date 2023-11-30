"use strict"

const categoryDropdown = document.getElementById("categoryDropdown");
let categoryArray = [];
window.onload = () =>{
    const dropdown = document.getElementById("dropdown");
    
    dropdown.addEventListener('change', () => {
        const selectedValue = dropdown.value;
        if(selectedValue == "viewAll"){
            displayAllProducts()
        } 
        else if(selectedValue == "category"){
            displayNewDropdown()
            // console.log(categoryArray)
        }
    
    });

    categoryDropdown.addEventListener('change', () =>{
        const selectedValue = categoryDropdown.value;

        categoryArray[0].forEach(category =>{            
            if(category.name == selectedValue){
                displayCategoryProducts(category.categoryId)
            }
        })
    })
}


const displayNewDropdown = () =>{
    categoryDropdown.style.display = "block";
    fetch("http://localhost:8081/api/categories")
        .then(res => res.json())
        .then(data => {
            categoryArray.push(data)
            data.forEach(category => {
                const option = document.createElement("option");
                
                option.textContent = category.name;
                categoryDropdown.appendChild(option);
            });
        })
        
}

const displayCategoryProducts = (number) =>{
    cardContainer.innerHTML = "";
    fetch("http://localhost:8081/api/products")
    .then(res => res.json())
    .then(data =>{
        data.forEach(product =>{
            if(product.categoryId == number){

                displaySingleProduct(product)
            }
        })
    })
    
}



const displayAllProducts = () =>{
    cardContainer.innerHTML = "";
    categoryDropdown.style.display = "none";
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
// const card = document.createElement("div");


const displaySingleProduct = (product) => {
    const cardContainer = document.getElementById("cardContainer");

    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";
    card.style.marginBottom = "20px"; 

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
    seeDetails.onclick = () => {
        localStorage.setItem("product", JSON.stringify(product));
    };

    cardBody.appendChild(title);
    cardBody.appendChild(subtitle);
    cardBody.appendChild(stockInfo);
    cardBody.appendChild(supplierInfo);
    cardBody.appendChild(seeDetails); 

    card.appendChild(cardBody);
    cardContainer.appendChild(card);
};
