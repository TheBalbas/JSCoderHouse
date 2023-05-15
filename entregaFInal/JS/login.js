$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();
    if (username === "admin" && password === "123") {
      window.location.href = "../HTML/inventario.html";
    } else {
      M.toast({ html: "Incorrect username or password" });
    }
  });
});