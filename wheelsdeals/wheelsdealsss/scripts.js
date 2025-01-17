// Function to dynamically open new car detail page in a new window
function openCarPage(model, image, price, mileage, fuel) {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <html>
            <head>
                <title>${model} - Details</title>
                <link rel="stylesheet" href="static/css/style.css">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #1d1f21;
                        color: white;
                        text-align: center;
                    }
                    img {
                        width: 50%;
                        height: auto;
                        margin-top: 20px;
                    }
                    .blurred {
                        filter: blur(5px);
                    }
                    .contact-seller, .unlock-form {
                        margin-top: 20px;
                    }
                    input {
                        padding: 10px;
                        margin: 5px;
                        width: 200px;
                    }
                    button {
                        padding: 10px;
                        background-color: #ff9800;
                        color: white;
                        border: none;
                        cursor: pointer;
                    }
                </style>
            </head>
            <body>
                <h1>${model}</h1>
                <img src="${image}" alt="${model}">
                <p><strong>Price:</strong> ₹${price}</p>
                <p><strong>Mileage:</strong> ${mileage} km</p>
                <p><strong>Fuel:</strong> ${fuel}</p>

                <div class="contact-seller blurred" id="contact-seller-section">
                    <h3>Contact Seller:</h3>
                    <p>Phone: 9876543210</p>
                </div>

                <div class="unlock-form" id="unlock-form">
                    <h4>Fill in your details to unlock the contact information:</h4>
                    <form id="customer-form">
                        <input type="text" name="name" placeholder="Your Name" required>
                        <input type="email" name="email" placeholder="Your Email" required>
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <script>
                    document.getElementById("customer-form").addEventListener("submit", function(event) {
                        event.preventDefault();
                        document.getElementById("contact-seller-section").classList.remove("blurred");
                        document.getElementById("unlock-form").style.display = "none";
                    });
                </script>
            </body>
        </html>
    `);
}

// Function to send form data
function send_data() {
    // Implement form submission logic
    alert('Form Submitted!');
}