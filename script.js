function validate() {
  var user = document.getElementById("user").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (user.trim() == "") {
      alert("Please enter your username.");
      return false;
  }
  if (email.trim() == "") {
    alert("Please enter your email.");
    return false;
  }

  if (password.trim() == "") {
    alert("Please enter your password.");
    return false;
  }
  return true;
}
function click1(){
  alert("Account is created")
}
function click2(){
  alert("Logged in successfully")
}