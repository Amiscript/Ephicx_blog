import { Button } from 'flowbite-react';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from './firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signinSuccess, signinFailure } from '../src/Redux/user/userSlice.js';

export const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const auth = getAuth(app);
    
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
    const response = await axios.post('http://localhost:3000/api/auth/google-signin', {
        name: result.user.displayName,
        email: result.user.email,
        googlePhotoUrl: result.user.photoURL
    });

    const { data } = response;
    console.log(data);

    if (data.ok) {
        dispatch(signinSuccess(data));
        navigate('/');
    } else {
        dispatch(signinFailure(data.message));
    }
} catch (error) {
    console.error('Error during Google sign-in:', error);
    const errorMessage = error.response?.data?.message || error.message;
    dispatch(signinFailure(errorMessage));
}
        }

    return (
        <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleLogin}>
            <FcGoogle className='mr-2 h-6 w-6' />
            Sign in with Google
        </Button>
    );
}; 

