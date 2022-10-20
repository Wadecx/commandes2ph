function sendEmail()
{
    Email.send({
        SecureToken : "ec257db1-d630-4346-a6af-e1a73492e788",
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