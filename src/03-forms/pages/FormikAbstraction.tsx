import { Formik, Form } from 'formik';
import { validationSchemaAbstraction } from '../utils/validationSchemaAbstraction';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import { MyCheckbox } from '../components/MyCheckbox';
import '../styles/styles.css';



const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    terms: false,
    jobType: '',
}

export const FormikAbstraction = () => {

  return (
    <div>
        <h1>Formik Abstraction</h1>

        <Formik
            initialValues={ initialValues }
            onSubmit={ (values) => { console.log(values) } }
            validationSchema={ validationSchemaAbstraction }
        >
            {
               (formik) => (
                    <Form>
                        <MyTextInput 
                            label="First Name" 
                            name="firstName" 
                            placeholder="First Name"
                            br
                        />
                        <MyTextInput 
                            label="Last Name" 
                            name="lastName" 
                            placeholder="Last Name"
                            br
                        />   
                        <MyTextInput 
                            label="Email Adress" 
                            name="email" 
                            placeholder="correo@gmail.com"
                            type="email" 
                            br
                        />               

                        <MySelect label="Job Type" name="jobType" br>
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </MySelect>

                        <MyCheckbox label="Terms and conditions" name="terms" />
            
                        <button type="submit">Submit</button>                 
                    </Form>
               )
            }
        </Formik>

    </div>
  )
}
