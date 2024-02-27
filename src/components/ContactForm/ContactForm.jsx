
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required').min(3, 'Minimum 3 characters').max(50, 'Maximum 50 characters'),
  number: Yup.string().required('Number is required'),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="name">Name:</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="number">Number:</label>
        <Field type="text" id="number" name="number" />
        <ErrorMessage name="number" component="div" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;