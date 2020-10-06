function set() {
	let background = document.getElementById("background").value;
	let width = document.getElementById("width").value;
	let height = document.getElementById("height").value;
	let div = document.getElementById("modify");

	div.style = `width:${width}; height:${height}; background: ${background};`;
}

document.getElementById("set").addEventListener("click", set);
