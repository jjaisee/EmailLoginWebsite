function validate(){
	var mobile = document.getElementById("field").value;
  var form = document.getElementById("myForm");
  form.reset();
	var pattern1 = /^\d{10}$/
	var pattern2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
	if(!mobile.match(pattern1) && !mobile.match(pattern2)){
		alert("Input a valid mobile number or email id");
		return false;
	}
	else
    return true;
}