function validate() {
	event.preventDefault();
	// if (document.myForm.FirstName.value == "") {
	// 	alert("Please provide your First Name!");
	// 	document.myForm.FirstName.focus();
	// 	return false;
	// }
	// if (document.myForm.LastName.value == "") {
	// 	alert("Please provide your Last Name!");
	// 	document.myForm.LasttName.focus();
	// 	return false;
	// }
	// if (!/^[a-z0-9._-]+@gmail.com$/.test(myForm.EmailID.value)) {
	// 	alert("Please provide your Email ID in the format @gmail.com!");
	// 	document.myForm.EmailID.focus();
	// 	return false;
	// }
	// // if( document.myForm.MobileNumber.value == ""||
	// // isNaN( document.myForm.MobileNumber.value ) ||
	// // document.myForm.MobileNumber.value.length != 10 ) { alert( "Please provide a number in 10 digits" );
	// // document.myForm.MobileNumber.focus() ;
	// // return false;
	// // }
	// if (document.myForm.Gender.value == false) {
	// 	alert("Please provide Gender!");
	// 	return false;
	// }
	// if (document.myForm.BirthDay.value == "-1") {
	// 	alert("Please provide your Birth date!");
	// 	return false;
	// }
	// if (document.myForm.BirthdayMonth.value == "-1") {
	// 	alert("Please provide your Birthday Month!");
	// 	return false;
	// }
	// if (document.myForm.BirthdayYear.value == "-1") {
	// 	alert("Please provide your Birth Year!");
	// 	return false;
	// }
	// if (document.myForm.City.value == "") {
	// 	alert("Please provide your City!");
	// 	document.myForm.City.focus();
	// 	return false;
	// }
	// if (
	// 	document.myForm.PinCode.value == "" ||
	// 	isNaN(document.myForm.PinCode.value) ||
	// 	document.myForm.PinCode.value.length != 6
	// ) {
	// 	alert("Please provide a Pincode in 6 digits");
	// 	document.myForm.PinCode.focus();
	// 	return false;
	// }
	// if (document.myForm.State.value == "") {
	// 	alert("Please provide your State!");
	// 	document.myForm.State.focus();
	// 	return false;
	// }
	// if (document.myForm.Country.value == "") {
	// 	alert("Please provide your Country!");
	// 	document.myForm.Country.focus();
	// 	return false;
	// }
	// if (
	// 	document.myForm.Life.checked == false &&
	// 	document.myForm.Property.checked == false &&
	// 	document.myForm.Liability.checked == false
	// ) {
	// 	alert("Please tell your interested games!");
	// 	return false;
	// }
	alert("Form Submitted");

	const formData = {
		fname: document.myForm.FirstName.value,
		lname: document.myForm.LastName.value,
		age: document.myForm.Age.value,
		email: document.myForm.EmailID.value,
		password: document.myForm.Pass.value,
		gender: document.myForm.Gender.value,
		bday: document.myForm.BirthDay.value,
		bmonth: document.myForm.BirthdayMonth.value,
		byear: document.myForm.BirthdayYear.value,
		city: document.myForm.City.value,
		state: document.myForm.State.value,
		country: document.myForm.Country.value,
	};

	fetch(
		`http://localhost:3000/register/
		${formData.fname}/
		${formData.lname}/
		${formData.password}/
		${formData.email}/
		${formData.age}/
		`,
		{
			mode: "no-cors",
		}
	)
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
		})
		.catch((e) => {
			console.log("error");
		});
	location.replace("http://localhost:5500/");
	alert("Registered successfully");
}
function getAge() {
	const latestDate = new Date();
	let age;
	age = latestDate.getFullYear() - document.myForm.BirthdayYear.value;
	console.log(document.myForm.BirthdayMonth.value);
	if (latestDate.getMonth() + 1 < document.myForm.BirthdayMonth.value) {
		this.age--;
	} else if (
		latestDate.getMonth() + 1 ==
		document.myForm.BirthdayMonth.value
	) {
		if (latestDate.getDate() < document.myForm.BirthDay.value) {
			this.age--;
		}
	}
	document.getElementById("age").value = age;
}

function validate1() {
	event.preventDefault();

	const formData = {
		email: document.myForm.EmailID.value,
		password: document.myForm.Pass.value,
	};
	let result = null;

	fetch(
		`http://localhost:3000/login/
		${formData.email}/
		${formData.password}/
		`,
		{
			mode: "no-cors",
		}
	)
		.then((res) => res.json())
		.then((res) => {
			alert(res);
		})
		.catch((e) => {
			console.log("error");
			console.log(e);
			// alert("error");
		});
	if (
		formData.email == "zardian018@gmail.com" &&
		formData.password == "1234"
	) {
		location.replace("http://localhost:5500/indexLogged.html");
		alert("Login successful");
	} else {
		alert("Failed");
	}
}
