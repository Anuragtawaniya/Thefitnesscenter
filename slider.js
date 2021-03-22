var x = document.getElementById("side-bar");

function myfunc() {
  if (x.style.width === "0%") {
    x.style.width = "60%";
  } else {
    x.style.width = "0%";
  }
}

hello = () => {
  var name = document.forms["myform"]["name"].value;
  var email = document.forms["myform"]["email"].value;
  if(name == ""){
    document.getElementById('name-input').innerHTML = "***Name filled is required***";
  }
  else if (email == ""){
    document.getElementById('email-input').innerHTML = "***Email filled is required***";
  }else{
    document.getElementById('message').innerHTML = "Thanks";
  }

}