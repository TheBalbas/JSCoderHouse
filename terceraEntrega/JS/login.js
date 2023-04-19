document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems);
});
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    if (username === 'admin' && password === 'pass123') {
        window.location.href = 'terceraEntrega/HTML/inventario.html' } else {
        M.toast({html: 'Incorrect username or password'});
    }
});