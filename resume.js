function Extendible() {
	var coll = document.getElementsByClassName("collapsible")[0];
	var i;
	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.display === "block") {
				content.style.display = "none";
			} else {
				content.style.display = "block";
			}
		});
	}

	// var btn= document.getElementsByClassName("collapsible")[0];
}

const elem = document.getElementsByClassName("internship")[0];
elem.addEventListener("mouseover", (event) => {
	const a = document.getElementById("i1");
	a.style.display = "block";
});

elem.addEventListener("mouseleave", (event) => {
	const a = document.getElementById("i1");
	a.style.display = "none";
});
