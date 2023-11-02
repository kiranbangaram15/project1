import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  //const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  //const [Blood_type, setBloodtype] = useState('');
  //const [Mobile, setMobile] = useState('');
  const [Password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/signup", {
        ///Name,
        Email,
        //Blood_type,
        //Mobile,
        Password,
      });
      console.log(response);
      // alert('success')
      // Assuming your backend returns a success message
      toast.success(response.data.msg);
    } catch (error) {
      // Handle registration failure
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div>
      {/* <Container> */}
        <h1 className="text-center mt-4">Signup</h1>
        <Form id="signup-form" className="mt-4" onSubmit={handleSignup}>
          {/* <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={Name} onChange={(e) => setName(e.target.value)}  />
          </Form.Group> */}
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={Email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Bloodtype</Form.Label>
            <Form.Control as="select" value={Blood_type} onChange={(e) => setBloodtype(e.target.value)} required >
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            </Form.Control>
          </Form.Group> */}
{/*           
          <Form.Group>
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" value={Mobile} onChange={(e) => setMobile(e.target.value)} required />
          </Form.Group> */}
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" value={Password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>
          {/* Other form fields (Email, Blood Group, Mobile, Location) follow a similar structure */}

          <Button variant="primary" type="submit">
            SIGNUP
          </Button>
          
        </Form>
          <ToastContainer />
      {/* </Container> */}
    </div>
  );
};

export default Signup;
