import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import './formik.css';

const MyForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    role: Yup.string().required('Role is required'),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{ name: '', email: '', role: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <form>
            <h1 className="login">Login</h1>
            <div className="form-field">
              <label htmlFor="name">Name :</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="input"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && (
                <div className="error-message">{errors.name}</div>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="email">Email :</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="input"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="role">Role :</label>
              <Field
                as={Select}
                id="role"
                name="role"
                className="input1"
                onChange={(value) => {
                  handleChange('role')(value.value);
                }}
                onBlur={handleBlur}
                value={values.role}
                options={[
                  { value: '', label: '--Select--' },
                  { value: 'frontend', label: 'Front-End Developer' },
                  { value: 'backend', label: 'Back-End Developer' },
                  { value: 'fullstack', label: 'Fullstack Developer' },
                  { value: 'android', label: 'Android Developer' },
                  { value: 'designer', label: 'Graphics Designer' },
                ]}
              />
              {errors.role && touched.role && (
                <div className="error-message">{errors.role}</div>
              )}
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
