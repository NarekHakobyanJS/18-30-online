import React, { useContext } from 'react'
import { Formik, Field, Form } from 'formik'

import './Register.css'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../../context'

const Register = () => {
    const { addUsers} = useContext(MyContext)
    const navigate = useNavigate()

    const validUser = (user) => {
        delete user.confirmPassword
        user.id = crypto.randomUUID()
        addUsers(user)
        navigate(`/profile/${user.id}`, {state : user})
    }

    return (
        <div>
            <h2>Register Page</h2>
            <Formik
                initialValues={{
                    name: "",
                    email: '',
                    password: '',
                    confirmPassword: ""
                }}
                onSubmit={(values) => validUser(values)}
            >
                <Form>
                    <Field name='name' placeholder="name" />
                    <Field name='email' placeholder="email" />
                    <Field name='password' placeholder="password" />
                    <Field name='confirmPassword' placeholder="confirmPassword" />
                    <button type='submit'>Register</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Register