import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            message: Yup.string().required("Please enter a message")
        }),
        onSubmit: values => {
            //handle form submission here
        }
    })
  return (
    <form onSubmit={formik.handleSubmit}>
        <label htmFor='name'>Name</label>
        <input id='name' name='name' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <label htmlFor='email'>Email</label>
        <input id='email' name='email' type='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <label htmlFor='message'>Message</label>
        <textarea id='message' name='message' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message}/>
        {formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div> : null}

        <button type="submit">Submit</button>
    </form>
  )
}

export default Contact