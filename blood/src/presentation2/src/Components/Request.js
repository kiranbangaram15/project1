import React from 'react'

const Request = () => {
  return (
    <div>

<head>
    <title>Blood Donation Form</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="styles.css"/>
  </head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
        <a class="navbar-brand" href="">Blood Donation</a>
    </nav>
    <div class="container">
        <h1 class="text-center mt-4">REQUEST FORM</h1>
        <form id="donation-form" class="mt-4">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" required />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email" required />
            </div>
            <div class="form-group">
                <label for="blood-group">Blood Group</label>
                <select class="form-control" id="blood-group" name="blood-group" required>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
            </div>
            <div class="form-group">
                <label for="contact-number">Contact Number</label>
                <input type="tel" class="form-control" id="contact-number" name="contact-number" required />
            </div>
            <div class="form-group">
                <label for="Enter-location">Enter-location</label>
                <input type="location" class="form-control" id="Enter-location" name="Enter-location" required />
            </div>
            <a href=""  class="btn btn-primary">Submit</a>

        </form>
    </div>
    <br/> <br/>
    <footer class="bg-danger text-white text-center py-3">
        <p>&copy; 2023 Blood Donation Center</p>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

    </div>
  );
};

export default Request;