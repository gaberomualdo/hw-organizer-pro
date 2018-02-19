// Check if user is on a mobile device
function checkMobile(){
	// if ratio between height and width of screen is less than 1:1.25 then set mobile
	if(window.innerHeight / window.innerWidth > 1.25){
		document.getElementsByTagName("form")[0].setAttribute("class","mobileform");
	}else{
		document.getElementsByTagName("form")[0].removeAttribute("class");
	}
}

// call checkMobile function when window is resized and when page loads
window.onload = checkMobile;
window.onresize = checkMobile;

// if it is signup page - if it has the param signup in the ? stage of url
var currentPage = window.location.href.split("?")[1];

if(currentPage == "signup"){
	// change button text and other to match signup page rather than signin page.

	$("h2").html("<br>Sign Up For <a href='index.html'>HW Organizer Pro</a>");
	$("form input[type='button']").attr("value","Sign In");
	$("form input[type='button']").attr("onclick",'window.open("index.html","_self")');
	$("form input[type='password']")[0].outerHTML = ('<input type="password" placeholder="Password:"><input type="password" placeholder="Confirm Password:">');
	$("form input[type='submit']").attr("value","Sign Up");
}

// Sign in and sign up functionality

// Validate password function
function validatePassword(){
	// This function returns an array - array[0] is boolean for if is valid, array[1] is error message if password isn't valid

	// if in Signup Page
	if(currentPage == "signup"){		
		// Check if both password fields' values match
		if($("form input[type='password']:eq(0)").val() != $("form input[type='password']:eq(1)").val()){
			return [false,"Passwords Do Not Match"];
		}
	}

	// Check if email is an ASL email
	if($("form input[type='text']:eq(0)").val().endsWith("@asl.org") == false){
		return [false,"Please use an ASL email"];
	}

	return [true];
}

// Form has been submitted
$("form").on("submit",function(item,index){
	// Differentiate between signup and signin actions
	if(currentPage == "signup"){
		// Sign user up if no error

	}else{
		// Sign in user if no error

	}
});