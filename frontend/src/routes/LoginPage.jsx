import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Loader } from 'lucide-react';
import Input from '../components/Input';
import { useAuthStore } from '../store/authStore';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore(state => state.login);
  const isLoading = useAuthStore(state => state.isLoading);
  const error = useAuthStore(state => state.error);
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/'); // redirect after login
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-transparent'>
      <div className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
        <div className='p-8'>
          <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
            Welcome Back
          </h2>

          <form onSubmit={handleLogin}>
            <Input
              icon={Mail}
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <Input
              icon={Lock}
              type='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <div className='flex items-center mb-6'>
              <Link
                to='/forgot-password'
                className='text-sm text-green-400 hover:underline'>
                Forgot password?
              </Link>
            </div>

            {error && (
              <p className='text-red-500 font-semibold mb-2'>{error}</p>
            )}

            <button
              className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
              type='submit'
              disabled={isLoading}>
              {isLoading ? (
                <Loader className='w-6 h-6 animate-spin mx-auto' />
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
        <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
          <p className='text-sm text-gray-400'>
            Don't have an account?{' '}
            <Link to='/register' className='text-green-400 hover:underline'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
