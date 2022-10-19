
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/forms.css'

export const FIELDS = [
    { id: 1, name: "username", type: 'text', label: 'Enter your Username' },
    { id: 2, name: "email", type: 'email', label: 'Enter your Email' },
    { id: 3, name: "password", type: 'password', label: 'Enter your Password' },
    { id: 4, name: "confirmPassword", type: 'password', label: 'Confirm your password' },

]

function Signup() {
    const localStorage = window.localStorage
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const validationSchema = Yup.object({
        username: Yup.string().required('User name is Required'),
        email: Yup.string().email("Invalid email format").required('Email is required'),
        password: Yup.string().required('Password is Required').min(8,"Passowrd must be 8 characters long"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Confirm Password is required'),

    })

    const onSubmit = (values) => {
        
        addNewUser(values.username, values.email, values.password)

        
// var addNewStudent = function (name, roll, age) {
//     // retrieve it (Or create a blank array if there isn't any info saved yet),
//     var students = JSON.parse(localStorage.getItem('studentsInfo')) || [];
//     // add to it,
//     students.push({name: name, roll: roll, age: age});
//     // then put it back.
//     localStorage.setItem('studentsInfo', JSON.stringify(students));
// }
////////////////////////////////////////////

        // console.log(values)
        // const userList = []
        // for(const key in localStorage){
        //     const currObj = JSON.parse(localStorage.getItem(key))
        //     userList.push(currObj)
        // }
        // const newUser = {
        //     username: values.username,
        //     email: values.email,
        //     password: values.password,
        //     confirmPassword: values.confirmPassword
        // }
        // userList.push(newUser)
        // localStorage.setItem('users',JSON.stringify(userList))
    }

    const addNewUser = (username, email, password) => {
        let userList = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = {
            username ,
            email,
            password
        }
        userList.push(newUser)
        localStorage.setItem('users',JSON.stringify(userList) );
        
    }


    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                {
                    (formik) => {
                        return (
                            <Form className='main-form' >
                                {FIELDS.map((fieldValue) => {
                                    switch(fieldValue.type){
                                        case 'checkbox':
                                            return null;

                                        default:
                                            return (
                                                <div className='field-container' key={fieldValue.id} >
                                                    <label className='label-text' htmlFor={fieldValue.id}>{fieldValue.label}</label>
                                                    <Field className='field-text' type={fieldValue.type} id={fieldValue.id} name={fieldValue.name} />
                                                    <ErrorMessage className='error-message' name={fieldValue.name} />
                                                </div>
                                            )
                                    }
                                })}
                                {/* <div className='field-container'>
                                    <label className='label-text' htmlFor='username'>User name</label>
                                    <Field className='field-text' type='text' id='username' name='username' />
                                    <ErrorMessage className='error-message' name='username' />
                                </div>
                                <div className='field-container'>
                                    <label className='label-text' htmlFor='email'>Email</label>
                                    <Field className='field-text' type='email' id='email' name='email' />
                                    <ErrorMessage className='error-message' name='email' />
                                </div>
                                <div className='field-container' >
                                    <label className='label-text' htmlFor='password'>Password</label>
                                    <Field className='field-text' type='password' id='password' name='password' />
                                    <ErrorMessage className='error-message' name='password' />
                                </div>
                                <div className='field-container' >
                                    <label className='label-text' htmlFor='confirmPassword'>Confirm Password</label>
                                    <Field className='field-text' type='password' id='confirmPassword' name='confirmPassword' />
                                    <ErrorMessage className='error-message' name='confirmPassword' />
                                </div> */}
                                <button className='submit-button' type="submit" >Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default Signup