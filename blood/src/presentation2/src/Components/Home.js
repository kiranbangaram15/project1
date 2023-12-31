import React from 'react';

const Home = () => {
  return (
    <div>
      <title>Blood Donation</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <body>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <a className="navbar-brand" href="#">
            Blood Donation
          </a>
        </nav>

        <div className="container mt-5">
          <div className="jumbotron text-center bg-white">
            <h1>Welcome to the Blood Donation Center</h1>
            <p>Save a life by donating blood today!</p>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img
                  src="https://img.freepik.com/free-vector/blood-donation-symbol-with-hand-blood-bag_1308-115904.jpg"
                  alt="Donate Blood"
                  className="img-fluid"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Why Donate Blood?</h5>
                  <p className="card-text">
                    Learn about the importance of donating blood and how it can save lives.
                  </p>
                  <a href="why.html" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <img
                  src="https://www.pngfind.com/pngs/m/621-6215340_registration-logo-png-register-now-transparent-png.png"
                  alt="Donor Registration"
                  className="card-img-top"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Register as a Donor</h5>
                  <p className="card-text">
                    Become a donor and help those in need by registering with us.
                  </p>
                  <a href="" className="btn btn-primary">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-danger text-white text-center py-3">
          <p>&copy; 2023 Blood Donation Center</p>
        </footer>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>
    </div>
  );
};

export default Home;