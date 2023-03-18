function myFunc() {
  var name = document.getElementById("name");
  document.requestStorageAccess(name);
  localStorage.setItem("Full Name", name);
  changedName = JSON.stringify(name);
  var userData = [];
  userData.push(changedName);
  alert(userData);

  alert("Welcome");
}
