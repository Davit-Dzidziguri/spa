import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import validationSchema from '../validationSchema';
import useSessionStorage from '../hooks/useSessionStorage';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const [formData, setFormData] = useSessionStorage('formData', {});

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      alert(`Form submitted successfully: ${JSON.stringify(result)}`);
      setFormData({});
    } catch (error) {
      alert(`Form submission failed: ${error.message}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <h1>Contact Page</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              defaultValue={formData.name || ''}
              {...register('name')}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              defaultValue={formData.email || ''}
              {...register('email')}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              defaultValue={formData.message || ''}
              {...register('message')}
            ></textarea>
            {errors.message && <p>{errors.message.message}</p>}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFormData({
              name: document.getElementById('name').value,
              email: document.getElementById('email').value,
              message: document.getElementById('message').value
            })}
          >
            Submit
          </motion.button>
        </form>
      </main>
    </motion.div>
  );
};

export default Contact;
