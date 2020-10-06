let elements = document.getElementsByName("cssProperty");
let div = document.getElementById("modify");

function set() {
	let elementId = this.id;

	let cssValue = this.value;

	div.style[elementId] = cssValue;
}

for (let index = 0; index < elements.length; index++) {
	elements[index].addEventListener("change", set);
}
