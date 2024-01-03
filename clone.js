let faqButtons = document.querySelectorAll(".faq-ques");
for (let faqbtn of faqButtons){
    faqbtn.addEventListener("click",(e)=>{
        let ans = e.target.nextElementSibling;
        if(!ans.classList.contains("show")){
            ans.classList.add("show");
        }
        else{
            ans.classList.remove("show");
        }
    })
};