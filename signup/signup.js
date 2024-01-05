let learnmoreBTn = document.getElementById("learn-more-btn");
let learnmoreInfo = document.querySelector(".learn-more-info");
learnmoreBTn.addEventListener("click", () => {
    learnmoreInfo.style.visibility = "visible";
    learnmoreInfo.style.opacity = "1";
    console.log("clicked");

})