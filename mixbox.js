
$(document).ready(function() {

	$(".fa-search").click(function() {
	   $(".togglesearch").toggle();
	   $("input[type='text']").focus();
	 });

});

// Add this JavaScript in your existing script or create a new one
function openLoginPopup() {
    document.getElementById('login-popup').style.display = 'block';
}

function openSignupPopup() {
    document.getElementById('signup-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('login-popup').style.display = 'none';
    document.getElementById('signup-popup').style.display = 'none';
}

// Optional: You can add AJAX calls to handle login and signup functionality
function login() {
    // Add your login logic here
    alert('Login logic goes here');
    closePopup();
}

function signup() {
    // Add your signup logic here
    alert('Signup logic goes here');
    closePopup();
}



