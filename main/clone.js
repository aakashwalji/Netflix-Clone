let faqButtons = document.querySelectorAll(".faq-ques");
for (let faqbtn of faqButtons){
    faqbtn.addEventListener("click",(e)=>{
        e.target.classList.toggle("active");
        let ans = e.target.nextElementSibling;
        if (ans.style.maxHeight) {
            ans.style.maxHeight = null;
          } else {
            ans.style.maxHeight = ans.scrollHeight + "px";
          } 
    })
};