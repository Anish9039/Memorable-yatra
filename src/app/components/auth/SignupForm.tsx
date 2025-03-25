'use client'

import Link from 'next/link';
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import z from 'zod';
import axios from 'axios';
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { Callout } from '@radix-ui/themes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


const createIssueSchema = z.object({
    name: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z.string().min(1, 'Password is required').min(8, 'Password must have at least 8 characters'),
});

const SignupForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(createIssueSchema)
  });  
  
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    try {
      await axios.post('/api/auth', data);
      setError('');
      toast.success('login successfully!');

      router.push('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Unexpected error occurred');
    }
  };

  return (
    <div>
           {error && (
        <Callout.Root color='red'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}  

    <form noValidate   className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" onSubmit={handleSubmit(onSubmit)}  >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/pages/auth" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in here
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input 
                  id="name"  {...register('name')} 
                  name="name"
                  type="text"

                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                    sm:text-sm"
                  placeholder="John Doe" 
                />
          
              </div>
              {errors.name && <p className="text-red-500 text-sm py-2">{errors.name.message}</p>}

            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="email"  {...register('email')} 
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                    sm:text-sm"
                  placeholder="you@example.com"
                />

              </div>
              {errors.email && <p className="text-red-500 text-sm py-2">{errors.email.message}</p>}

            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="password" {...register('password')} 
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                    sm:text-sm"
                  placeholder="••••••••"
                />

              </div>
              {errors.password && <p className="text-red-500 text-sm py-3">{errors.password.message}</p>}

              <p className="mt-2 text-sm text-gray-500">
                At least 8 characters with a number and symbol
              </p>
            </div>

            <div>

            </div>
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md mt-4">Create Account</button>

          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 
                  rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Google</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                </svg>
              </button>
              {/* Add other social login buttons */}
            </div>
          </div>
        </div>
      </div>

    </form>
    </div>
  );
};

export default SignupForm;