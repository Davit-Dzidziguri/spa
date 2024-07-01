import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

export default validationSchema;
