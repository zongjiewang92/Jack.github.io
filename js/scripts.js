/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function redirectToClassPage() {
    window.location.href = "class.html";
}

function redirectToIndexPage() {
    window.location.href = "index.html";
}



document.getElementById("downloadBtn").addEventListener("click", function () {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    var pdfUrl = "Document/CV-Zongjie Wang.pdf";

    // Create a link element
    var link = document.createElement("a");
    link.href = pdfUrl;

    // Set the download attribute and filename
    link.download = "CV-Zongjie Wang.pdf";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
});



document.getElementById("downloadBtn1").addEventListener("click", function () {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    var pdfUrl = "Document/1-100.pdf";

    // Create a link element
    var link = document.createElement("a");
    link.href = pdfUrl;

    // Set the download attribute and filename
    link.download = "1-100.pdf";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
});

document.getElementById("downloadBtn2").addEventListener("click", function () {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    var pdfUrl = "Document/101-200.pdf";

    // Create a link element
    var link = document.createElement("a");
    link.href = pdfUrl;

    // Set the download attribute and filename
    link.download = "101-200.pdf";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
});



