function sendEmail()
{
    Email.send({
        Host : " smtp.elasticemail.com",
        Username : "tyronmorcel@gmail.com",
        Password : "737A52E7C142AD4F4F30EAC4C23541E13E63",
        To : 'wadecpro@gmail.com',
        From : "tyronmorcel@gmail.com",
        Subject : "Nouveau Messagge de 2PH",
        Body : "Nom : " + document.getElementById("name").value
        + "<br> Email : " + document.getElementById("email").value
        + "<br> Message : " + document.getElementById("message").value
    }).then(
      message => alert("Message envoyé avec succès ! ")
    );
}