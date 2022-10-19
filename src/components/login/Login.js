
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
// import styles from '../styles/forms.module.css'
import '../styles/forms.css'
import { useNavigate } from 'react-router-dom'

const checkBoxOptions = [
    { key: 'OPTION 1', value: 'coption1' },
    { key: 'OPTION 2', value: 'coption2' },
    { key: 'OPTION 3', value: 'coption3' }
]

export const FIELDS = [
    { id: 1, name: "email", type: 'email', label: 'Enter your email' },
    { id: 2, name: "password", type: 'password', label: 'Enter your password' },
    // {
    //     id: 3, name: 'checkbox', type: 'checkbox', label: 'Select one option',
    //     options: checkBoxOptions
    // }

]



function Login() {
    const navigator = useNavigate()
    const localStorage = window.localStorage
    const initialValues = {
        email: '',
        password: '',
        checkbox:[]
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required('Email is required'),
        password: Yup.string().required('Required'),
        checkbox: Yup.array().required('Check the checkbox')
    })

    const onSubmit = (values) => {
        console.log(localStorage.users)
        let validUser = false;
        const userList = JSON.parse(localStorage.users)
        for (const key in userList) {
            console.log(userList[key]);
            if (values.email === userList[key].email && values.password === userList[key].password) {
                validUser = true;
            }
        }

        if (validUser) {
            console.log('You are allowed')
            navigator('/user')
        } else {
            console.log("Not allowed")
        }

    }


    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                {
                    (formik) => {
                        return (
                            <Form className='main-form'>
                                {FIELDS.map((fieldVal) => {
                                    switch (fieldVal.type) {
                                        
                                        case 'checkbox':
                                            return (
                                            <div className='field-container' key={fieldVal.id} >
                                                <label className='label-text' htmlFor={fieldVal.name}>{fieldVal.label}</label>
                                                <Field className='field-text' name={fieldVal.name}>
                                                    {
                                                        ({field}) => {
                                                            return fieldVal.options.map(option => {
                                                                console.log(field)
                                                                console.log(option)
                                                                return (
                                                                    <React.Fragment key={option.key} >
                                                                        
                                                                        <input 
                                                                            type='checkbox'
                                                                            id={option.value} {...field} 
                                                                            value={option.value}
                                                                            checked={field.value.includes(option.value)} />
                                                                        <label htmlFor={option.value} >{option.key}</label>
                                                                    </React.Fragment>
                                                                )
                                                            })
                                                        }
                                                    }
                                                </Field>
                                                <ErrorMessage className='error-message' name={fieldVal.name} />
                                            </div>
                                            )
                                            default:
                                            return (
                                                <div className='field-container' key={fieldVal.id} >
                                                    <label className='label-text' htmlFor={fieldVal.name}>{fieldVal.label}</label>
                                                    <Field className='field-text' type={fieldVal.type} id={fieldVal.name} name={fieldVal.name} />
                                                    <ErrorMessage className='error-message' name={fieldVal.name} />
                                                </div>
                                            )
                                    }
                                    // <div key={field.id} >
                                    //     <label htmlFor={field.name}>{field.label}</label>
                                    //     <Field type={field.type} id={field.name} name={field.name} />
                                    //     <ErrorMessage name={field.name} />
                                    // </div>
                                }


                                )}
                                <button className='submit-button' type="submit" >Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default Login























  // console.log(values)
        // const validUser = false;
        // for (const key in localStorage) {
        //     console.log("key: ", key);
        //     console.log("local storage: ", JSON.parse(localStorage.getItem(key)))
        //     // console.log(`${key}: ${localStorage.getItem(key)}`);
        //     // console.log(JSON.parse(localStorage.getItem(key)))
        //     let currObj = JSON.parse(localStorage.getItem(key))
        //     if(values?.email === currObj.email && values?.password === currObj?.password){
        //         validUser = true
        //     }
        // }
        // console.log('Reached out of loop')
        // if(validUser) {
        //     console.log("You are allowed")
        // }else{
        //     console.log("Account not present")
        // }