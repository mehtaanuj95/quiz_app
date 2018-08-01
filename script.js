function validate() {

	var name = document.getElementById('username');
	var pass = document.getElementById('password');

	if(name.value != localStorage.username) {
		alert("Username incorrect");
		return false;
	}
	if(pass.value != localStorage.password) {
		alert("Passworde incorrect");
		return false;
	}

	alert("Login Successful");
	window.location()
	//Create a random order for questions
	var arr= [1,2,3,4,5];
	arr = shuffle(arr);
	console.log(arr);


} 

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}