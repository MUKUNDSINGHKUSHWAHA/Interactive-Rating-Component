const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.querySelector("#submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

rates.forEach((rate) => {
    rate.addEventListener("click" , ()=>{
        rating.innerHTML = rate.innerHTML;
    })
})


submitButton.addEventListener("click" , ()=>{
    
    mainContainer.classList.add("hidden");
    thanksContainer.classList.remove("hidden");
});

