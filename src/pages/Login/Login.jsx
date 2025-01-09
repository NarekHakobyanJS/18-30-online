import React, { useContext } from 'react'
import { Formik, Field, Form } from 'formik'
import { NavLink, useNavigate } from 'react-router-dom'
import { MyContext } from '../../context'

const Login = () => {
    const {users} = useContext(MyContext)
    const navigate = useNavigate()
    const userValidation = (values) => {
       const user = users.find((u) => u.email === values.email)
       if(user){
        let isActivate = user.password === values.password
        if(isActivate){
            navigate(`/profile/${user.id}`, {state : user})
        }
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
                    <NavLink to='/register'>register</NavLink>
                </Form>
            </Formik>
    </div>
  )
}

export default Login