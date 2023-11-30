" use strict"

let product;
window.onload = () =>{
        product =  JSON.parse(localStorage.getItem("product"));
        console.log(product)


            const productDetailsDiv = document.getElementById('productDetails');
            let content = '<p><strong>Product ID:</strong> ' + product.productId + '</p>';
            content += '<p><strong>Product Name:</strong> ' + product.productName + '</p>';
            content += '<p><strong>Unit Price:</strong> ' + product.unitPrice + '</p>';
            content += '<p><strong>Units in Stock:</strong> ' + product.unitsInStock + '</p>';
            content += '<p><strong>Category ID:</strong> ' + product.categoryId + '</p>';
            content += '<p><strong>Supplier:</strong> ' + product.supplier + '</p>';
            content += '<p><strong>Discontinued:</strong> ' + product.discontinued + '</p>';
    
            productDetailsDiv.innerHTML = content;
}