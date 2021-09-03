function Submit()
{
  document.getElementById("form").submit();
}
function Reset()
{
  document.getElementById("form").reset();
}


function validate_name1()
  {
    //var name= document.getElementById("name").value;
    var name =document.forms["myForm"]["fname"].value;
    var letters= /^[A-Za-z]+$/;
    //var num= /^[0-9]+$/;

    if( name.trim()=="")
    {
      textname1.innerHTML = "Enter something";
      textname1.style.color = "#ff0000";
    }
    else
    {
      if(!name.match(letters))
      {
        textname1.innerHTML = "Invalid ";
        textname1.style.color = "#ff0000";
      }
      if(name.length<=3)
      {
        textname1.innerHTML = "Atleast three characters";
        textname1.style.color = "#ff0000";
      }

    }
    if(name.match(letters) && name.length>=3)
    {
      textname1.innerHTML = "Name is valid";
      textname1.style.color = "#006400";
    }
  }

  function validate_name2()
  {
    //var name= document.getElementById("name").value;
    var mname =document.forms["myForm"]["mname"].value;
    var letters= /^[A-Za-z]+$/;
    //var num= /^[0-9]+$/;

    if( mname.trim()=="")
    {
      textname2.innerHTML = "Enter something";
      textname2.style.color = "#ff0000";
    }
    else
    {
      if(!mname.match(letters))
      {
        textname2.innerHTML = "Invalid";
        textname2.style.color = "#ff0000";
      }
      if(mname.length<=3)
      {
        textname2.innerHTML = "Atleast three characters";
        textname2.style.color = "#ff0000";
      }

    }
    if(mname.match(letters) && mname.length>=3)
    {
      textname2.innerHTML = "Name is valid";
      textname2.style.color = "#006400";
    }


    /*else
    {
      textname.innerHTML = "Correct ";
      textname.style.color = "#00ff00";
    }*/


  }

  function validate_name3()
  {
    //var name= document.getElementById("name").value;
    var name =document.forms["myForm"]["lname"].value;
    var letters= /^[A-Za-z]+$/;
    //var num= /^[0-9]+$/;

    if( name.trim()=="")
    {
      textname3.innerHTML = "Enter something";
      textname3.style.color = "#ff0000";
    }
    else
    {
      if(!name.match(letters))
      {
        textname3.innerHTML = "Invalid";
        textname3.style.color = "#ff0000";
      }
      if(name.length<=3)
      {
        textname3.innerHTML = "Atleast three characters";
        textname3.style.color = "#ff0000";
      }

    }
    if(name.match(letters) && name.length>=3)
    {
      textname3.innerHTML = "Name is valid";
      textname3.style.color = "#006400";
    }


  }
  function validate_email()
  {
    var form = document.getElementById("form");
    var email= document.getElementById("email").value;
    var text = document.getElementById("text");
  //  var pattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//email validate
    if(email.match(pattern))
    {
      //form.classList.add("valid");
    //  form.classList.remove("invalid");
      text.innerHTML = "Your Email Address in Valid";
      text.style.color = "#006400";

    }
    else
    {
    //  form.classList.remove("valid");
    //  form.classList.add("invalid");
      text.innerHTML = "Please Enter valid";
      text.style.color = "#ff0000";
    }

    if( email.trim() =="")
    {
    //  form.classList.remove("valid");
    //  form.classList.remove("invalid");
      text.innerHTML = "Enter something";
      text.style.color = "#ff0000";
    }

  }


  function validate_password1()
  {
    var x= document.getElementById("passwords1").value;
    if(x=="")
    {
      textpassword1.innerHTML = "Enter something";
      textpassword1.style.color = "#ff0000";
    }
  else if(x.length < 5 || x.length > 16)
    {
      textpassword1.innerHTML = "length should be between 5-16";
      textpassword1.style.color = "#ff0000";
    }
    else
    {
      textpassword1.innerHTML = "Valid password";
      textpassword1.style.color = "#006400";
    }

  }

  function validate_password2()
  {
    var x= document.getElementById("passwords1").value;
    var y= document.getElementById("passwords2").value;
    if(x!=y)
    {
      textpassword2.innerHTML = "Passwords do not match";
      textpassword2.style.color = "#ff0000";
    }
    else
    {
      textpassword2.innerHTML = "Password matched";
      textpassword2.style.color = "#006400";
    }
  }

  function validate_phone()
  {
  var x= document.getElementById("mobilenumber").value;
  //var x =document.forms["myForm"]["mobilenumber"];
//    var a = /^\d{10}$/;
  var letters= /^[A-Za-z]+$/;



    if(x.trim()=="")
    {
      textmobilenumber.innerHTML = "No empty field";
      textmobilenumber.style.color = "#ff0000";
    }
    else if(x.length<10 || x.length>10)
    {
      textmobilenumber.innerHTML = "Number of digits should be 10";
      textmobilenumber.style.color = "#ff0000";
    }
    if(isNaN(x))
    {
      textmobilenumber.innerHTML = "No characters allowed";
      textmobilenumber.style.color = "#ff0000";
    }

    if(x.length==10 && !isNaN(x) && x!="")
    {
        textmobilenumber.innerHTML = "Valid Number";
        textmobilenumber.style.color = "#006400";
    }


  }

  function validate_pin()
  {
    var x= document.getElementById("pin").value;
    //var x =document.forms["myForm"]["mobilenumber"];
  //    var a = /^\d{10}$/;
    var letters= /^[A-Za-z]+$/;



      if(x.trim()=="")
      {
        textpin.innerHTML = "No empty field";
        textpin.style.color = "#ff0000";
      }
      else if(x.length<6 || x.length>6)
      {
        textpin.innerHTML = "Number of digits should be 6";
        textpin.style.color = "#ff0000";
      }
      if(isNaN(x))
      {
        textpin.innerHTML = "No characters allowed";
        textpin.style.color = "#ff0000";
      }

      if(x.length==6 && !isNaN(x) && x!="")
      {
          textpin.innerHTML = "Valid Number";
          textpin.style.color = "#006400";
      }
  }
