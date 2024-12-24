import React from 'react'
import { Formik, Field, Form } from 'formik'

const Login = ({users}) => {

    const userValidation = (values) => {
       const user = users.find((u) => u.email === values.email)
       if(user){
        let isActivate = user.password === values.password
        console.log(isActivate);
        
       }
    }
  return (
    <div>
        <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values) => userValidation(values)}
            >
                <Form>
                    <Field placeholder="email" name='email' />
                    <Field placeholder="password" name='password' />
                    <button type='submit'>Login</button>
                </Form>
            </Formik>
    </div>
  )
}

export default Login