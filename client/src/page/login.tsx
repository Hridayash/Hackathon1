import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
import { useNavigate } from 'react-router-dom';

interface LoginInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>();
  const navigate = useNavigate();
  const url = import.meta.env.VITE_BACKEND_URL
  const onSubmit = async (data: LoginInputs) => {
    try {
      const response = await axios.post(`${url}/api/login`, {
        email: data.email,
        password: data.password,
      });
      console.log('Login successful:', response.data);
      // Handle successful login (e.g., redirect to dashboard)
      navigate('/home'); // Change to the appropriate route after login
    } catch (error:any) {
      console.error('Login failed:', error.response?.data || error.message);
      // Handle login error (e.g., show error message)
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="max-w-md mx-auto mt-10 flex-grow">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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

          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;