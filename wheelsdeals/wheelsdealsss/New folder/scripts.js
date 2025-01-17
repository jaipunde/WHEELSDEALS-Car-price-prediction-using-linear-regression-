function openCarPage(model, image, price, mileage, fuel) {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>${model} - Details</title>
                <link rel="stylesheet" href="static/css/style.css">
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
                <style>
                    body {
                        background-color: #1d1f21;
                        color: white;
                        font-family: Arial, sans-serif;
                    }
                    .navbar {
                        background-color: #304b56;
                        padding: 30px;
                    }
                    .navbar-brand {
                        color: #fff;
                        font-size: 1.5rem;
                        font-weight: bold;
                    }
                    .navbar-brand img {
                     width: 100px; /* Set the width */
    height: 100px; /* Set the height to the same value for a square */
     object-fit: cover; /* Ensures the image covers the area without distortion */
    margin-right: 10px;
}

                    .navbar-nav .nav-link {
                        color: #fff;
                    }
                    .navbar-nav .nav-link:hover {
                        color: #2ecc71;
                    }
                    .car-detail-container {
                        max-width: 800px;
                        margin: auto;
                        padding: 20px;
                        background-color: #304b56;
                        border-radius: 10px;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
                    }
                    img {
                        width: 100%;
                        height: auto;
                        border-radius: 8px;
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
                        width: calc(50% - 10px);
                    }
                    .input-group {
                        display: flex;
                        justify-content: space-between;
                    }
                    button {
                        padding: 10px;
                        background-color: #ff9800;
                        border: none;
                        cursor: pointer;
                        width: 100%;
                        border-radius: 5px;
                    }
                    button:hover {
                        background-color: #e68900;
                    }
                    h1, h4 {
                        text-align: center;
                    }
                    .message {
                        display: none;
                        margin: 20px;
                        font-weight: bold;
                        color: green;
                        padding: 8px;
                        background-color: beige;
                        border-radius: 4px;
                    }
                </style>
            </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <a class="navbar-brand" href="#">
                        <img src="logo.jpg" alt="Wheels Deal Logo"> Wheels Deal
                    </a>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href="dog.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Cars for Sale</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Price Prediction</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>

                <div class="car-detail-container">
                    <h1>${model}</h1>
                    <div class="car-image-container">
    <div class="car-image-container">
    <img id="current-car-image" src="${image}" alt="${model}" style="width: 100%; height: auto; border-radius: 8px;">
    <button id="next-image-button" onclick="nextImage();" style="margin-top: 10px; background-color: #ff9800; color: white; border: none; border-radius: 5px; padding: 10px;">Next Image</button>
</div>

<script>
    let currentImageIndex = 0;
    const images = [
        '${image}',      // First image from variable
        'car2.jpg',     // Second image
        'car3.jpg',     // Third image
        'car4.jpg'      // Fourth image
    ];

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through images
        document.getElementById("current-car-image").src = images[currentImageIndex];
    }

    // Initialize the first image on page load
    window.onload = function() {
        document.getElementById("current-car-image").src = images[currentImageIndex];
    };
</script>

                    <p><strong>Price:</strong> ₹${price}</p>
                    <p><strong>Mileage:</strong> ${mileage} km</p>
                    <p><strong>Fuel:</strong> ${fuel}</p>

                    <div class="contact-seller blurred" id="contact-seller-section">
                        <h3>Contact Seller:</h3>
                        <p>Phone: <span id="seller-phone">9876543210</span></p>
                    </div>

                    <div class="unlock-form" id="unlock-form">
                        <h4>Fill in your details to unlock the contact information:</h4>
                        <form id="customer-form">
                            <div class="input-group">
                                <input type="text" name="name" placeholder="Your Name" required>
                                <input type="email" name="email" placeholder="Your Email" required>
                            </div>
                            <input type="text" name="phone" placeholder="Your Phone" required>
                            <button type="submit">Submit</button>
                        </form>
                    </div>

                    <div id="message" class="message"></div>
                </div>

                <script>
                    document.getElementById("customer-form").addEventListener("submit", function(event) {
                        event.preventDefault();

                        const formData = new FormData(this);
                        let keyValuePairs = [];
                        for (const pair of formData.entries()) {
                            keyValuePairs.push(pair[0] + "=" + pair[1]);
                        }

                        const formDataString = keyValuePairs.join("&");
                        const submitButton = this.querySelector('button[type="submit"]');
                        submitButton.disabled = true;
                        document.getElementById("message").textContent = "Submitting...";
                        document.getElementById("message").style.display = "block";

                        fetch('https://script.google.com/macros/s/AKfycbwMxqOYqUjoS3JfcPKeSTtOs-ekXxzCmf1z9TyVFwOOim8U3Lzfd2fBzLqWmfkmds7G4g/exec', {
                            redirect: 'follow',
                            method: 'POST',
                            body: formDataString,
                            headers: {
                                'Content-Type': 'text/plain;charset=utf-8',
                            },
                        })
                        .then(response => response.text())
                        .then(data => {
                            document.getElementById("message").textContent = "Data submitted successfully!";
                            submitButton.disabled = false;
                            this.reset();

                            // Unblur the seller's contact information
                            document.getElementById("contact-seller-section").classList.remove('blurred');

                            setTimeout(() => {
                                document.getElementById("message").style.display = "none";
                            }, 2600);
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            document.getElementById("message").textContent = "An error occurred while submitting the form.";
                            document.getElementById("message").style.display = "block";
                            submitButton.disabled = false;
                        });
                    });
                </script>
            </body>
        </html>
    `);
}
