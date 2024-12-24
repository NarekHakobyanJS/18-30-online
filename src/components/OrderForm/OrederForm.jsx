import React from 'react'
import { Formik, Field, Form } from 'formik'


const region = ["Yerevan", "Abovyan", "Gyumri"]
const OrederForm = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    region: ''
                }}
                onSubmit={(values) => console.log(values)}
            >
                <Form>
                    <Field placeholder="name" name='name' />
                    <Field placeholder="email" name='email' />
                    <Field as='select' name='region'>
                        {
                            region.map((reg) => <option value={reg} key={reg}>{reg}</option>)
                        }
                    </Field>
                    <button type='submit'>Order</button>
                </Form>
            </Formik>
        </div>
    )
}

export default OrederForm