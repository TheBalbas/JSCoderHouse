$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();
    $("#loading").addClass("show");
    if (username === "admin" && password === "123") {
      setTimeout(function () {
        window.location.href = "entregaFinal/HTML/inventario.html";
      }, 1500);
    } else {
      M.toast({ html: "Nombre de usuario o contraseña incorrectos" });
    }
    $("#loading").removeClass("show");
  });
});
