const form = document.querySelector('form ');

Function sendEmail() {
      Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nafabinjai@gmail.com",
    Password : "9EFF90C14FBC468FAB698517ABC83A440449",
    To : 'nafabinjai@gmail.com',
    From : "nafabinjai@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

form.addEventListener("sumbit", (e) =>{
    e.preventDefault();

    sendEmail();
});