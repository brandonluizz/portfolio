function openNav(){
	var navigation = document.getElementById('navigation')
	
	if (navigation.className === "navigation") {
		navigation.className += " menujs"
		document.getElementById('three-line-icon').innerHTML = "&Cross;"
	} else {
		navigation.className = "navigation"
		document.getElementById('three-line-icon').innerHTML = "&#9776;"
	}
}