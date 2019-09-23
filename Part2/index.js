const grabCard = document.getElementById("grabId");
const styleCard = document.getElementById("styleIt");
const spans = document.getElementsByTagName("span");
const setCard = () => {
	let cardInput = grabCard.value;
	let styleInput = styleCard.value;
	if (
		cardInput.toLowerCase() === "diamonds" ||
		cardInput.toLowerCase() === "hearts"
	) {
		document.getElementById(`${cardInput}`).style.color = `${styleInput}`;
	} else if (
		cardInput.toLowerCase() === "clubs" ||
		cardInput.toLowerCase() === "spades"
	) {
		document.getElementById(`${cardInput}`).style.color = `${styleInput}`;
	}
};
console.log(spans);
const reset = () => {
	for (let i = 0; i < spans.length; i++) {
		spans[i].style.color = "grey";
	}
};
