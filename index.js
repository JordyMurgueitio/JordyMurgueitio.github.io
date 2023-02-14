    function myFunction() {
        var x = document.getElementById("collapsibleNavbar");
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    }

    function emailSend () {
        Email.send({
            SecureToken : "51744d62-7800-43f2-a396-5b48ec8bbb8d",
            To : 'jordinho.15@gmail.com',
            From : document.getElementById("email").value,
            Subject : "New message",
            Body : document.getElementById("name") + "age" + document.getElementById("age") + document.getElementById("email")
        }).then(
            message => alert(message)
        );
    }