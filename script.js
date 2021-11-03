function welcomeMsg(){
alert("Hello Visitor, welcome to my page! Please complete the contact form and I will be in touch!");
}
function enquiry(){
	event.preventDefault();
	document.getElementById("contact_form").style.display="none";
	
	var visitorName=document.getElementById("vname").value;
	var visitorEmail=document.getElementById("vemail").value;
	
	alert(visitorName+" thank you for your details. We will be in touch via "+visitorEmail+" shortly.");
}
