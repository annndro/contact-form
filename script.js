function welcomeMsg(){
alert("Hello Visitor, welcome to my page! Please complete the contact form and I will be in touch!");
}
function enquiry(){
	event.preventDefault();
	var visitorName=document.getElementById("vname").value;
	var visitorEmail=document.getElementById("vemail").value;
	hideform();
}
function hideform(){
	document.getElementById("contact_form").style.display="none";
	outputMsg();
}
function outputMsg(){
	var visitorName=document.getElementById("vname").value;
	var visitorEmail=document.getElementById("vemail").value;
	alert(visitorName+" thank you for your details. We will be in touch via "+visitorEmail+" shortly.");
}