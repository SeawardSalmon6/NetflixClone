function openQuestion(btn) {
	btn.firstElementChild.classList.toggle("open");
	btn.nextElementSibling.classList.toggle("open");
}

function playAudio() {
    document.getElementById("lolAudio").play();
}