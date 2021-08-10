


function validateForm() {
  var name = document.forms["contactform"]["name"].value;
	var email = document.forms["contactform"]["email"].value;
	var subject = document.forms["contactform"]["subject"].value;
	var message = document.forms["contactform"]["message"].value;
		
		if (name == "" || subject == "" || message == ""|| email == ""){
			return;
		}
			else {
			alert("Thank you for the feedback :)");
		}
    }