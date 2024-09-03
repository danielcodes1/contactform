import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Grid, TextField, Typography } from '@mui/material';

// Validation Schema with Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required').min(2, 'Name is too short'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  message: Yup.string().required('Message is required').min(10, 'Message should be at least 10 characters long')
});

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" gutterBottom>Contact Us</Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Full Name"
                variant="outlined"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="message"
                name="message"
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
              />
            </Grid>

            <Grid item xs={12}>
              <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
