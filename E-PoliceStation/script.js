document.getElementById("complaintForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    // Save data in localStorage (optional)
    const complaintData = {
        name,
        email,
        phone,
        message,
        date: new Date().toLocaleString()
    };

    localStorage.setItem("complaint", JSON.stringify(complaintData));

    // Redirect to success page
    window.location.href = "suscess.html";
});