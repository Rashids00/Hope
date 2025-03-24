$(document).ready(function () {
    emailjs.init("BPCfl3aDRifrpftPf"); // Replace with your EmailJS Public Key

    $("#serviceRequestForm").submit(function (event) {
        event.preventDefault();

        var formData = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            petName: $("#petName").val(),
            appointmentReason: $("#appointmentReason").val(),
            firstTimeClient: $("#firstTimeClient").val(),
        };

        emailjs.send("service_zlcda44", "template_tt72as8", formData)
            .then(function (response) {
                alert("Email sent successfully!");
                $("#serviceRequestForm")[0].reset();
            }, function (error) {
                alert("Failed to send email. Error: " + JSON.stringify(error));
            });
    });
});
