import React from 'react';

const Menu = () => {
  return (
    <div>
      
      
      <head>
   
        <title>Blood Donation Form</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <a className="navbar-brand" href="#">
            Blood Donation
          </a>
        </nav>
        <div className="container">
          <h1 className="text-center mt-4">REGISTRATION FORM</h1>
          <form id="donation-form" className="mt-4">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="blood-group">Blood Group</label>
              <select className="form-control" id="blood-group" name="blood-group" required>
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
            <div className="form-group">
              <label htmlFor="contact-number">Contact Number</label>
              <input type="tel" className="form-control" id="contact-number" name="contact-number" required />
            </div>
            <a href="" className="btn btn-primary">
              Submit
            </a>
          </form>
        </div>
        <br /> <br />
        <footer className="bg-danger text-white text-center py-3">
          <p>&copy; 2023 Blood Donation Center</p>
        </footer>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>
      
    </div>
  );
};

export default Menu;