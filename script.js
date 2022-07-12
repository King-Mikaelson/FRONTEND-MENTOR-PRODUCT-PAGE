


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


modalProducts.forEach(modal => {
    if(!modal.classList.contains("inactive")){
        modal.addEventListener("click", () => {
            if(modal.classList.contains("active")){
                modal.classList.remove("active");
                return
            }
            deleteActiveInput();

            modal.classList.add("active");
        })
    }

    modal.removeEventListener("click");
    
})

// function removeEvent1Listener(){
//     modalProducts.forEach(modal => {
        
//     })
// }

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
    navMenu.classList.toggle("active")
})

OpenProject.addEventListener("click", () => {
    modalContainer.style.display = "block"
})

closeProject.addEventListener("click", () => {
    modalContainer.style.display = ""
})


modalContainer.addEventListener("click", (e) => {
    if(!modalContainer.contains(e.target) && modalContainer.style.display == "block"){
        console.log("yess");
        modalContainer.style.display = "none"
    }
})




