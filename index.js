(function() {
    emailjs.init("fRI6WqcmvTN5PKyGQ"); 
})();

function sendMail(event) {
    event.preventDefault(); 

    let params = {
        Email: document.getElementById("exampleFormControlInput1").value,
        Mobile: document.getElementById("exampleFormControlInput2").value,
        Message: document.getElementById("exampleFormControlTextarea3").value,
    }

    const serviceID = "service_j6dkolf";
    const templateID = "template_uu69y9j";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("exampleFormControlInput1").value = "";
            document.getElementById("exampleFormControlInput2").value = "";
            document.getElementById("exampleFormControlTextarea3").value = "";
            console.log(res);
            alert("Your message was sent successfully");
        })
        .catch(err => console.log(err));
}