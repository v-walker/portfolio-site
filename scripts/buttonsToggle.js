const navbarToggleDiv = document.getElementById("navbarSupportedContent");
const readMoreButton1 = document.getElementById("readMore1")
const readMoreButton2 = document.getElementById("readMore2")
const readMoreButton3 = document.getElementById("readMore3")
const readMoreButton4 = document.getElementById("readMore4")
const readMoreButton5 = document.getElementById("readMore5")

const changeReadMoreText = (element) => {
    if (element.innerText.includes("Read More")) {
        element.innerHTML = 'Collapse <i class="fas fa-angle-double-up"></i>'
    } else if (element.innerText.includes("Collapse")) {
        element.innerHTML = 'Read More <i class="fas fa-angle-double-down"></i>'
    }
}


navbarToggleDiv.addEventListener("click", (e) => {
    console.log(e.target);

    if (navbarToggleDiv.className === "navbar-collapse font-playfair-reg collapse show") {
        navbarToggleDiv.className = "navbar-collapse font-playfair-reg collapse";
    }
})

readMoreButton1.addEventListener("click", (e) => {
    changeReadMoreText(readMoreButton1)
})
readMoreButton2.addEventListener("click", (e) => {
    changeReadMoreText(readMoreButton2)
})
readMoreButton3.addEventListener("click", (e) => {
    changeReadMoreText(readMoreButton3)
})
readMoreButton4.addEventListener("click", (e) => {
    changeReadMoreText(readMoreButton4)
})
readMoreButton5.addEventListener("click", (e) => {
    changeReadMoreText(readMoreButton5)
})

