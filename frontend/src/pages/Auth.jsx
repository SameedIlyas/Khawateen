import { Link } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';
import { RegisterForm } from '../components/auth/RegisterForm';

export function Auth({ mode }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 py-12 sm:px-6 lg:px-8">
      {/* Black overlay with transparency */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main Form Wrapper */}
      <div className="relative z-10 w-full sm:max-w-lg px-6 py-10 bg-white shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-105">
        <h2 className="text-center text-4xl font-extrabold text-teal-800 mb-8">
          {mode === 'login' ? 'Sign in to your account' : 'Create your account'}
        </h2>
        <p className="mt-2 text-center text-sm text-teal-600">
          {mode === 'login' ? (
            <>
              Or{' '}
              <Link
                to="/register"
                className="font-medium text-teal-600 hover:text-teal-500 transition duration-200"
              >
                create a new account
              </Link>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-medium text-teal-600 hover:text-teal-500 transition duration-200"
              >
                Sign in
              </Link>
            </>
          )}
        </p>

        {/* Form Section */}
        <div className="mt-8">
          <div className="bg-white py-8 px-6 rounded-xl shadow-lg sm:px-10">
            {mode === 'login' ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
