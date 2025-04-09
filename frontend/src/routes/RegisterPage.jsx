import { useState } from 'react';
import { Mail, Lock, User, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulated registration
    setTimeout(() => {
      if (email && password && fullName) {
        console.log('Registered:', { fullName, email });
      } else {
        setError('Please fill in all fields');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-transparent'>
      <div className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
        <div className='p-8'>
          <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
            Create Account
          </h2>

          <form onSubmit={handleRegister}>
            <Input
              icon={User}
              type='text'
              placeholder='Full Name'
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />

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
                'Register'
              )}
            </button>
          </form>
        </div>
        <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
          <p className='text-sm text-gray-400'>
            Already have an account?{' '}
            <Link to='/login' className='text-green-400 hover:underline'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
