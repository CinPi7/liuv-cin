let faq = document.getElementById("restaurant-faqs");
let faq2 = document.getElementById("client-faqs");

const FAQsRestaurant = () => {
    if(faq.style.display === "none"){
        faq.style.display = "block";
        faq2.style.display = "none";

    } else {
        faq.style.display = "none";
    }
}

const FAQsClient = () => {
    if(faq2.style.display === "none"){
        faq2.style.display = "block";
        faq.style.display = "none";
    } else {
        faq2.style.display = "none";
    }
}