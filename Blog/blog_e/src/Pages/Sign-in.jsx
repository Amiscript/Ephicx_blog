import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { signinSuccess, signinFailure, signinStart } from '../Redux/user/userSlice';
import { OAuth } from '../OAuth';
function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value.trim()
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      dispatch(signinFailure('Please fill in all fields'));
      return;
    }

    try {
      dispatch(signinStart());
      const response = await axios.post('/api/auth/signin', formData);

      if (response.data.success === false) {
        dispatch(signinFailure(response.data.message));
        return;
      }

      dispatch(signinSuccess(response.data));
      navigate('/');
    } catch (error) {
      dispatch(signinFailure( error.message ||'Invalid information'));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex max-w-3xl p-3 mx-auto flex-col md:flex-row md:items-center gap-8'>
        {/* Left side */}
        <div className='flex-1'>
          <Link to="/" className='inline-block'>
            <span className="self-center whitespace-nowrap text-4xl font-bold px-2 py-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg text-white">
              EphicxBlog
            </span>
          </Link>
          <p className='text-sm mt-5'>
            Welcome to EphicxBlog. Please sign in with your email and password to continue.
          </p>
        </div>

        {/* Right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label htmlFor='email' value='User Email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='relative'>
              <Label htmlFor='password' value='Password' />
              <TextInput
                type={showPassword ? 'text' : 'password'}
                placeholder='••••••••'
                id='password'
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className='absolute right-2 top-9 text-gray-500'
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <Button
              gradientDuoTone="purpleToBlue"
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className="ml-2">Loading...</span>
                </>
              ) : 'Sign in'}
            </Button>

            <OAuth/>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to="/signup" className='text-blue-500 hover:underline'>
              Sign up
            </Link>
          </div>

          {error && (
            <Alert className='mt-5' color="failure" >
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signin;