const spans = document.querySelectorAll(".responsive__span");
const container = document.querySelector("#info__idea");
const stretch = (items, container) => {
	const containerWidth = container.offsetWidth;
	for (let item of items) {
		const currentLength = item.innerText.length;
		const currentCharWidth = item.offsetWidth / currentLength;
		const spaceForChar = containerWidth / currentLength;
		const charWidth =
			spaceForChar -
			currentCharWidth +
			(spaceForChar - currentCharWidth) / currentLength;
		item.style.letterSpacing = charWidth + "px";
	}
};
stretch(spans, container);
