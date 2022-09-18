function validate() {
    if( document.myForm.FirstName.value == "" ) { alert( "Please provide your First Name!" );
    document.myForm.FirstName.focus() ;
    return false;
    }
    if( document.myForm.LastName.value == "" ) { alert( "Please provide your Last Name!" );
    document.myForm.LasttName.focus() ;
    return false;
    }
    if(!/^[a-z0-9._-]+@gmail.com$/.test(myForm.EmailID.value))
    { alert( "Please provide your Email ID in the format @gmail.com!" );
    document.myForm.EmailID.focus() ; return false;
    }
    if( document.myForm.MobileNumber.value == ""||
    isNaN( document.myForm.MobileNumber.value ) ||
    document.myForm.MobileNumber.value.length != 10 ) { alert( "Please provide a number in 10 digits" );
    document.myForm.MobileNumber.focus() ;
    return false;
    }
    if(document.myForm.Gender.value == false) { alert( "Please provide Gender!");
    return false;
    }
    if( document.myForm.BirthDay.value == "-1" ) { alert( "Please provide your Birth date!" );
    return false;
    }
    if( document.myForm.BirthdayMonth.value == "-1" ) {
    alert( "Please provide your Birthday Month!" );
    return false;
    }
    if( document.myForm.BirthdayYear.value == "-1" ) { alert( "Please provide your Birth Year!" );
    return false;
    }
    if( document.myForm.City.value == "" ) { alert( "Please provide your City!" ); document.myForm.City.focus() ;
    return false;
    }
    if( document.myForm.PinCode.value == "" || isNaN( document.myForm.PinCode.value ) || document.myForm.PinCode.value.length != 6 ) {
    alert( "Please provide a Pincode in 6 digits" );
    document.myForm.PinCode.focus() ;
    return false;
    }
    if( document.myForm.State.value == "" ) { alert( "Please provide your State!" ); document.myForm.State.focus() ;
    return false;
    }
    if( document.myForm.Country.value == "" ) { alert( "Please provide your Country!" );
    document.myForm.Country.focus() ;
    return false;
    }
    if(document.myForm.Life.checked == false && document.myForm.Property.checked == false && document.myForm.Liability.checked == false) {
    alert( "Please tell your interested games!"); return false;
    }
    alert("Form Submitted");
    return( true );
    }
    function getAge(){
    const latestDate = new Date(); let age;
    age=latestDate.getFullYear()-document.myForm.BirthdayYear.value;
    console.log(document.myForm.BirthdayMonth.value);
    if(latestDate.getMonth()+1<document.myForm.BirthdayMonth.value){
    this.age--;
    }
    else if(latestDate.getMonth()+1==document.myForm.BirthdayMonth.value)
    {
    if(latestDate.getDate()<document.myForm.BirthDay.value){ this.age--;
    }
    }
    document.getElementById('age').value=age;
    }
    