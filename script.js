


const hamburger= document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const closeButton = document.querySelector(".close-button");
const OpenProject = document.querySelector(".project-button");
const modalContainer = document.querySelector(".container-2");
const closeProject = document.querySelector(".modal-image")
const bodyContainer = document.querySelector(".container")
const bookmarked = document.querySelector('.project-bookmarked')
const bookmarkedCta = document.querySelector(".project-bookmarked-cta")
const bookmarkSvg = document.querySelector(".bookmark-image")
const bookmarkedText = document.querySelector(".project-bookmarked-cta-text");
const modalProducts =  document.querySelectorAll(".modal-products");
const inputBox = document.querySelector(".input-box");
const rewardButton = document.querySelectorAll(".product-cta");
const ctaButton = document.querySelectorAll(".input-button");
let moneyValue = document.querySelector(".money-amount");
let totalBackers = document.querySelector(".total-amount");
const progressLine = document.querySelector(".progress-line");

let feedbackButton = document.querySelector(".feedback-button");
const feedbackContainer = document.querySelector(".container-3");



const inputBox1 = document.querySelector(".first-input");
const inputBox2 = document.querySelector(".second-input");
const inputBox3 = document.querySelector(".third-input");

let result;
let total = 100000


ctaButton.forEach(button => {
    button.addEventListener("click", () => {
    if(button.parentNode.classList.contains("first-input-box")){
        calculateResult(inputBox1);
        updateProgress()
        inputBox1.value = "";
    }else if(button.parentNode.classList.contains("second-input-box")){
        calculateResult(inputBox2);
        updateProgress()
        inputBox2.value = ""
    }else if(button.parentNode.classList.contains("third-input-box")){
        calculateResult(inputBox3);
        updateProgress()
        inputBox3.value = ""
    }
    })
  
})




function calculateResult(inputValue){
    inputValue = parseFloat(inputValue.value);
        if( isNaN(inputValue) === false && inputValue > 0 ){
         let dollarAmount = moneyValue.textContent.replace("$", "").replace(",", "");
         let totalValue = inputValue +  parseFloat(dollarAmount);
         result = `$${totalValue.toLocaleString()}`;
         moneyValue.textContent = result;
        //  inputValue.value = "";
         modalContainer.style.display = ""
         feedbackContainer.style.display = "block"
         let count = totalBackers.textContent.replace(",", "");
         let countNumber = parseFloat(count)
         countNumber++
         totalBackers.textContent = countNumber.toLocaleString();
        }else if(inputValue === 0){
            alert("Please input a number greater than zero");
            inputValue.value = "";
        }
         
}

function updateProgress(){
    let dollarAmount = moneyValue.textContent.replace("$", "").replace(",", "");
    let totalValue = parseFloat(dollarAmount)/ total;
    let totalValueResult =  totalValue * 100
    if(totalValueResult > 100){
        progressLine.style.width = 100 + "%";
    }else{
        progressLine.style.width =  totalValueResult + "%";
      }
   
    // if(progressLine.style.width > (100 + "%")){
    //     progressLine.style.width = 100 + "%";
    // }else{
    //     progressLine.style.width =  totalValueResult;
    // }
}





// ctaButton.forEach(button => {
//     button.addEventListener("click", (e) => {
//     let inputValue = parseFloat(inputBox.value);
//     if( isNaN(inputValue) === false && inputValue > 0 ){
//      let dollarAmount = moneyValue.textContent.replace("$", "").replace(",", "");
//      let totalValue = inputValue +  parseFloat(dollarAmount);
//      result = `$${totalValue.toLocaleString()}`;
//      moneyValue.textContent = result;
//      inputBox.value = "";
//      modalContainer.style.display = ""
//      feedbackContainer.style.display = "block"
//      let count = totalBackers.textContent.replace(",", "");
//      let countNumber = parseFloat(count)
//      countNumber++
//      totalBackers.textContent = countNumber.toLocaleString()
//     }else if(inputValue === 0){
//         alert("Please input a number");
//         inputBox.value = "";
//     }
     
//     })
  
// })



modalProducts.forEach(modal => {
    if(!modal.classList.contains("inactive")){
        modal.addEventListener("click", (e) => {
            if(e.target.classList.contains("input-box")){
                // console.log(e.target.className)
                return
            }
            if(modal.classList.contains("active")){
                modal.classList.remove("active");
                return
            }
            deleteActiveInput();

            modal.classList.add("active");
        })
    }
    
})

rewardButton.forEach(button => {
    button.addEventListener("click", () => {
        if(!button.parentNode.classList.contains("inactive-element")){
            console.log("click")
            modalContainer.style.display = "block"
        }

    })
})




function deleteActiveInput(){
    modalProducts.forEach(modal => {
        modal.classList.remove("active");
    })
}



bookmarked.addEventListener("click", () => {
    bookmarkSvg.classList.toggle("color-change")
    if(bookmarkedText.textContent == "Bookmark"){
        bookmarkedText.textContent = "Bookmarked";
        bookmarkedText.style.color = "hsl(176, 72%, 28%)";
        bookmarkedCta.style.backgroundColor = "#f0f3ec";

    }else{
        bookmarkedText.textContent = "Bookmark";
        bookmarkedText.style.color = "hsl(0, 0%, 48%)";
        bookmarkedCta.style.backgroundColor = "lightgray"
    }
})



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if(navMenu.classList.contains("active")){
    document.body.style.overflowY = "hidden"
    }else{
        document.body.style.overflowY = ""
    }
})

OpenProject.addEventListener("click", () => {
    modalContainer.style.display = "block"
})

closeProject.addEventListener("click", () => {
    modalContainer.style.display = ""
})


feedbackButton.addEventListener("click", () => {
    feedbackContainer.style.display = ""
})


// modalContainer.addEventListener("click", (e) => {
//     if(!modalContainer.contains(e.target) && modalContainer.style.display == "block"){
//         console.log("yess");
//         modalContainer.style.display = "none"
//     }
// })

