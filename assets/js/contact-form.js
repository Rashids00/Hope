// $(document).ready(function () {
//     emailjs.init("BPCfl3aDRifrpftPf"); // Replace with your EmailJS Public Key

//     $("#serviceRequestForm").submit(function (event) {
//         event.preventDefault();

//         var formData = {
//             firstName: $("#firstName").val(),
//             lastName: $("#lastName").val(),
//             email: $("#email").val(),
//             phone: $("#phone").val(),
//             petName: $("#petName").val(),
//             appointmentReason: $("#appointmentReason").val(),
//             firstTimeClient: $("#firstTimeClient").val(),
//         };

//         emailjs.send("service_zlcda44", "template_tt72as8", formData)
//             .then(function (response) {
//                 alert("Email sent successfully!");
//                 $("#serviceRequestForm")[0].reset();
//             }, function (error) {
//                 alert("Failed to send email. Error: " + JSON.stringify(error));
//             });
//     });
// });
$(document).ready(function () {
    // Ensure EmailJS is initialized
    try {
        emailjs.init("BPCfl3aDRifrpftPf"); // Replace with your EmailJS Public Key
    } catch (error) {
        console.error("EmailJS initialization failed:", error);
        return;
    }

    $("#serviceRequestForm").submit(function (event) {
        event.preventDefault(); // Prevent the form from redirecting

        // Validate EmailJS is available
        if (typeof emailjs === "undefined") {
            alert("Email service not available. Please try again later.");
            return;
        }
        
        // Check if reCAPTCHA is completed
        var recaptchaResponse = grecaptcha.getResponse();
        if (recaptchaResponse.length === 0) {
            // reCAPTCHA not verified
            alert("Please complete the reCAPTCHA verification.");
            return;
        }

        var formData = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            petName: $("#petName").val(),
            appointmentReason: $("#appointmentReason").val(),
            firstTimeClient: $("#firstTimeClient").val(),
            'g-recaptcha-response': recaptchaResponse // Include the reCAPTCHA response
        };

        // Send email using EmailJS
        emailjs.send("service_zlcda44", "template_tt72as8", formData)
            .then(function (response) {
                alert("Email sent successfully!");
                $("#serviceRequestForm")[0].reset(); // Reset form after submission
                grecaptcha.reset(); // Reset reCAPTCHA
            }, function (error) {
                alert("Failed to send email. Error: " + JSON.stringify(error));
            });
    });
});