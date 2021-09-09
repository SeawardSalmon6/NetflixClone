function questions(element) {
    let faqAnswer = element.nextElementSibling;
    let svgClose = element.firstElementChild;
    
    if(faqAnswer.classList.contains("closed")) {
        faqAnswer.classList.remove("closed");
        faqAnswer.classList.add("open");
        
        svgClose.classList.remove("closed");
        svgClose.classList.add("open");
    } else {    
        faqAnswer.classList.remove("open");
        faqAnswer.classList.add("closed");
        
        svgClose.classList.remove("open");
        svgClose.classList.add("closed");
    }
}

function playAudio() {
    document.getElementById("lolAudio").play();
}