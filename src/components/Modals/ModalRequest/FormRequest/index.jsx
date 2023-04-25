import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap/';
import { useForm } from '@formspree/react';

function FormRequest({ nextStep }) {
  const [validated, setValidated] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [state, handleSubmit] = useForm("xdovlwdq");

  const submitForm = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      handleSubmit(event);
      nextStep(2);
    };

    setValidated(true);
  };

  return (
    <>
      <div className="small-title mb-2 fw-normal">
        get to know more about DLH
      </div>
      <div className="mb-4">
        please leave your contact details below so we can tell you more about our platform
      </div>
      <Form noValidate validated={validated} onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>first name*</Form.Label>
          <Form.Control
            id="firstName"
            type="text"
            name="firstName"
            placeholder="first name*"
            required
          />
          <Form.Control.Feedback type="invalid">please fill all the mandatory fields</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>last name*</Form.Label>
          <Form.Control
            id="lastName"
            type="text"
            name="lastName"
            placeholder="last name*"
            required
          />
          <Form.Control.Feedback type="invalid">please fill all the mandatory fields</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCompanyName">
          <Form.Label>company name*</Form.Label>
          <Form.Control
            id="companyName"
            type="text"
            name="companyName"
            placeholder="company name*"
            required
          />
          <Form.Control.Feedback type="invalid">please fill all the mandatory fields</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCompanyScope">
          <Form.Label>company scope*</Form.Label>
          <Form.Control
            id="companyScope"
            type="text"
            name="companyScope"
            placeholder="company scope*"
            required
          />
          <Form.Control.Feedback type="invalid">please fill all the mandatory fields</Form.Control.Feedback>
        </Form.Group>          

        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>your role*</Form.Label>
          <Form.Control
            id="yourRole"
            type="text"
            name="yourRole"
            placeholder="your role*"
            required
          />
          <Form.Control.Feedback type="invalid">please fill all the mandatory fields</Form.Control.Feedback>
        </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label>mobile</Form.Label>
          <Form.Control
            id="mobile"
            type="number"
            name="mobile"
            placeholder="mobile"
          />
          <Form.Control.Feedback type="invalid">please fill all the mandatory fields</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>business e-mail*</Form.Label>
          <Form.Control
            id="businessEmail"
            type="email"
            name="businessEmail"
            placeholder="business e-mail*"
            required
          />
          <Form.Control.Feedback type="invalid">please fill all the mandatory fields</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAdditional">
          <Form.Label>enter any additional comments</Form.Label>
          <Form.Control
            id="additional"
            type="text"
            name="additional"
            placeholder="enter any additional comments"
          />
        </Form.Group>

        <Form.Group className="d-flex align-items-center privacy" controlId="formBasicPrivacyPolicy">
          <Form.Check 
            id="checkboxPrivacyPolicy"
            type="checkbox"
            name="checkboxPrivacyPolicy"
            required
          />        
          <Form.Label column>
            <a href={`${window.location.origin}/privacy`} target="_blank" rel="noopener noreferrer">i accept privacy policy</a>
          </Form.Label>
          
        </Form.Group>

        <Form.Control.Feedback type="invalid">please fill all the mandatory fields</Form.Control.Feedback>
          
        <Button type="submit" className="my-4">tell me about DLH</Button>
      </Form>
    </>
  );
}

export default FormRequest;
