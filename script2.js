function generateElement() {

	var p = document.createElement("p");
    var t = document.createTextNode("Some text of question");
	p.appendChild(t);
	document.body.appendChild(p);

    var btn = document.createElement("BUTTON");
    var text = document.createTextNode("CLICK ME");
	btn.appendChild(text);
	document.body.appendChild(btn);

	
}