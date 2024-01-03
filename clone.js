let faqButtons = document.querySelectorAll(".faq-ques");
let faqAns = document.querySelectorAll(".faq-ans");

for (let faqbtn of faqButtons){
    faqbtn.addEventListener("click",(e)=>{
        for(let fans of faqAns){
            fans.style.display = "none";
            console.log("all answers clsoed");
        }
        let tAns = e.target.nextElementSibling;
        // tAns.style.display = "block";
        if(tAns.style.display == "none"){
            tAns.style.display = "block";
            console.log("targeted answer shown");
        }
        else {
            tAns.style.display == "none";
            console.log("targeted answer closed");

        }
    })
}