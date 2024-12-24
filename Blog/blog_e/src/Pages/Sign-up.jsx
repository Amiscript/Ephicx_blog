import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { OAuth } from '../OAuth';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errorHandler, setErrorHandler] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value.trim() }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setErrorHandler('Please fill in all fields');
      return;
    }

    try {
      setIsLoading(true);
      setErrorHandler(null);

      const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
      const { data } = response;

      if (!data.success) {
        setErrorHandler(data.message);
      } else {
        navigate('/signin');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      setErrorHandler(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex max-w-3xl p-3 mx-auto flex-col md:flex-row md:items-center'>
        {/* Left side */}
        <div className='flex-1'>
          <Link to="/" className=''>
            <span className="self-center whitespace-nowrap text-4xl font-bold dark:text-white px-2 py-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg text-white">
              EphicxBlog
            </span>
          </Link>
          <p className='text-sm mt-5'>
            Welcome to EphicxBlog. Please sign up with your email, password, or Google account to continue.
          </p>
        </div>

        {/* Right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <Label value='User Name' />
            <TextInput type='text' placeholder='Ephicx16' id='username' className='mb-4' onChange={handleChange} />

            <div>
              <Label value='User Email' />
              <TextInput type='email' placeholder='@company.com' id='email' className='mb-4' onChange={handleChange} />
            </div>

            <div className='relative'>
              <Label value='Password' />
              <TextInput
                type={showPassword ? 'text' : 'password'}
                placeholder='********'
                id='password'
                className='mb-4'
                onChange={handleChange}
              />
              <div className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer' onClick={togglePasswordVisibility}>
                {showPassword ? <FaEye className='h-5 w-5 text-gray-500' /> : <FaEyeSlash className='h-5 w-5 text-gray-500' />}
              </div>
            </div>

            <Button className='bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500' type='submit' disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner size='sm' />
                  <span>Loading...</span>
                </>
              ) : 'Sign Up'}
            </Button>

            <OAuth />
          </form>
          <div className='flex mt-5 flex-1 gap-2 text-sm'>
            <span>Already have an account? <Link to="/signin" className='text-blue-500'>Sign in</Link></span>
          </div>

          {errorHandler && (
            <Alert className='mt-5' color='red'>
              {errorHandler}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;