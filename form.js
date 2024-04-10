function validateForm() {
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let date = document.getElementById("date").value;

    if (!validateLength(fName, 5, "First name")) return false;
    if (!validateLength(lName, 5, "Last name")) return false;
    if (!validateEmail(email)) return false;
    if (!validatePhone(phone)) return false;
    if (!validateLength(message, 50, "Message")) return false;

    sendEmail(); // Call sendEmail function if validation passes
}

function validateLength(value, minLength, fieldName) {
    if (value.length < minLength) {
        alert(fieldName + " should be at least " + minLength + " characters.");
        return false;
    }
    return true;
}

function validateEmail(email) {
    if (!email.includes("@")) {
        alert("Email should contain the domain name (with '@').");
        return false;
    }
    return true;
}

function validatePhone(phone) {
    if (!phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
        alert("Phone must contain digits in the format xxx-xxx-xxxx.");
        return false;
    }
    return true;
}

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "jainsahil030505@gmail.com",
        Password: "A2765E0D7AFBF48624A24D2FC6205AEB3D69",
        To: 'jainsahil030505@gmail.com',
        From: "jainsahil030505@gmail.com",
        Subject: "New Enquiry",
        Body: "First Name: " + document.getElementById("fName").value + "<br> Last Name: " + document.getElementById("lName").value + "<br/> Email ID: " + document.getElementById("email").value + "<br/> Date: " + document.getElementById("date").value + "<br/> Phone: " + document.getElementById("phone").value + "<br/> Message: " + document.getElementById("message").value
    }).then(
        message => {
            if (message == "OK") {
                swal("Succesful", "Your data has been successfully submitted!", "success");
            }
        }
    );
}
