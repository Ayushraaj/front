

"use client"; // This directive enables client-side rendering

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // Import the useRouter hook

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
`;

const FormContainer = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const FormTitle = styled.h1`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #5c6bc0;
    box-shadow: 0 0 5px rgba(92, 107, 192, 0.5);
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #5c6bc0;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3949ab;
  }
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: #5c6bc0;
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;
`;



const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter(); // Get the router instance

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Redirect to the /auth/hy page on login
    if (isLogin) {
      router.push('/auth/hy'); // Navigate to the new page
    } else {
      // Handle sign-up logic here (e.g., API call to register the user)
      // You can add validation for email and password here.
      console.log('Sign Up Logic'); // Placeholder for sign-up handling
    }
  };

  return (
    <Container>
      <FormContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <FormTitle>{isLogin ? 'Login' : 'Sign Up'}</FormTitle>
        <Form onSubmit={handleSubmit}> {/* Attach the handleSubmit function */}
          <Input type="text" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          {!isLogin && <Input type="password" placeholder="Confirm Password" required />}
          <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
        </Form>
        <ToggleButton onClick={toggleForm}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
        </ToggleButton>
      </FormContainer>
    </Container>
  );
};

export default Auth; // Ensure this is the default export