import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Login = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        }),
        onSubmit: values => {
            setIsSubmitting(true);
            console.log(values);
            navigate('/dashboard')
        },
    })
  return (
    <div className='login-page'>
        <div>
            <Navbar />
        </div>
        <form onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    {...formik.getFieldProps('email')} 
                    className={formik.touched.email && formik.errors.email ? 'invalid' : ''}
                />
                {formik.touched.email && formik.errors.email ? <div className='error-message'>{formik.errors.email}</div> : null}
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input 
                    type='password' 
                    id='password' 
                    name='password' 
                    {...formik.getFieldProps('password')} 
                    className={formik.touched.password && formik.errors.password ? 'invalid' : ''}
                />
                {formik.touched.password && formik.errors.password ? <div className='error-message'>{formik.errors.password}</div> : null}
            </div>
            <button type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Logged in...' : 'Login'}
            </button>
        </form>
    </div>
  )
}

export default Login