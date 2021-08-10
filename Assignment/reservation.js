


function validateForm() {
  var days = document.forms["reservation"]["days"].value;
	var hour = document.forms["reservation"]["hours"].value;
	var name = document.forms["reservation"]["name"].value;
	var phone = document.forms["reservation"]["phone"].value;
	var person = document.forms["reservation"]["person"].value;
		
		if (days == null  || hour == null  || name == null || phone == null || person == null ){
			return;
		}
			else {
			alert("Thank you for your reservation :)");
		}
    }