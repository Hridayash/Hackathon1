// Signup.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
import { useNavigate } from 'react-router-dom';

interface SignupInputs {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupInputs>();
  const navigate = useNavigate(); // Hook for navigation
    const url = import.meta.env.VITE_BACKEND_URL
  const onSubmit = async (data: SignupInputs) => {
    if (data.password !== data.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    
    try {
      const response = await axios.post(`${url}/api/signup`, {
        name: data.fullName,
        email: data.email,
        password: data.password,
      });
      console.log('Signup successful:', response.data);
      // Handle successful signup (e.g., redirect, show message)
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error:any) {
      console.error('Signup failed:', error.response.data);
      // Handle signup error (e.g., show error message)
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Include the Header component here */}
      <div className="max-w-md mx-auto mt-10 flex-grow">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              {...register('fullName', { required: 'Full name is required' })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Re-enter Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', { required: 'Please confirm your password' })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign Up
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-blue-600 hover:underline"
              >
                Login here
              </button>
            </p>
          </div>
        </form>
      </div>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
};

export default Signup;
