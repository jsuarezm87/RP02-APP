import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';


export const RegisterFormikPage = () => {

    const initialValues = {
        name: '',
        email: '',
        password1: '',
        password2: ''
    }   
   

  return (
    <div>
        <h1>Register Formik Page</h1> 
        <Formik 
            initialValues={ initialValues }
            onSubmit={ (values) =>  {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                             .min(2, 'El nombre debe ser de 3 caracteres o mas')
                             .max(15, 'El nombre no debe tener mas de 15 caracteres')
                             .required('Requerido'),
                    email: Yup.string()
                              .email('Revise el formato del correo')
                              .required('Requerido'),
                    password1: Yup.string()
                                  .min(6, 'Minimo 6 letras')
                                  .required('Requerido'),
                    password2: Yup.string()
                                  .oneOf([ Yup.ref('password1') ], 'Las contraseñas debes ser iguales')
                                  .required('Requerido')
                })
            }
        >
            {(formik) => (
                <Form>
                    <MyTextInput 
                        label="Nombre" 
                        name="name" 
                        placeholder="Jhonnatan"
                        br
                    />
                    <MyTextInput 
                        label="Email" 
                        name="email" 
                        type='email'
                        placeholder="jonathan@gmail.com"
                        br
                    />
                    <MyTextInput 
                        label="Password" 
                        name="password1" 
                        type='password'
                        placeholder="*******"
                        br
                    />
                    <MyTextInput 
                        label="Confirm password" 
                        name="password2" 
                        type='password'
                        placeholder="*******"
                        br
                    />

                    <button type="submit">Create</button>
                    <button type="button" onClick={ formik.handleReset }>Reset Form</button>
                </Form>                
            )}
        </Formik>

    </div>
  )
}
