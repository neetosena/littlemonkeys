import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const onSubmit = (values, actions) => {
  const form = actions.target;
  const form2 = values.target;

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "contact",
      ...values,
    }),
  })
    .then(() => {
      alert("Success");
      actions.resetForm();
      console.log("Actions", form);
      console.log("Values", form2);
      // window.location = "/thankyou/";
    })
    .catch((error) => {
      alert(error);
    });
  console.log("Form data_1", values, actions);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.number().required("Required"),
  message: Yup.string().required("Required"),
});

const FormComp = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      action="../pages/thankyou/"
    >
      <Form name="contact" className="form">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="phone">Phone</label>
          <Field type="text" id="phone" name="phone" />
          <ErrorMessage name="phone" />
        </div>

        <div className="form-control">
          <label htmlFor="message">Message</label>
          <Field as="textarea" id="message" name="message" />
          <ErrorMessage name="message" />
        </div>

        <div data-netlify-recaptcha={true}></div>

        <button type="submit">Submit-2</button>
      </Form>
    </Formik>
  );
};

export default FormComp;
