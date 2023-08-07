import {Formik, Form} from 'formik';
import formJson from '../data/custom-form.json';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';


interface Validatios {
    type: string;
    label: string;
    value?: number | string;
}

interface Options {
  id: number;
  label: string;
}

interface FormJson {  
  type: string;
  name:  string;
  placeholder?:  string;
  label: string;
  value:  string;
  validations?: Validatios[];
  options?: Options[];
}

const initialValues: { [key: string]: any } = {}; 
const requiredFields: { [key: string]: any } = {}; 
const inputForm: FormJson[] = formJson;

console.log(inputForm);


inputForm.forEach(({ name, value, validations}) => {
  initialValues[name] = value;

  let schema = Yup.string();

  validations?.forEach(rule => {
    if (rule.type === 'required') schema = schema.required(rule.label);    
    if (rule.type === 'minLength') schema = schema.min(Number(rule.value) || 1, rule.label);
    if (rule.type === 'email') schema = schema.email(rule.label);    
  });

  requiredFields[name] = schema;
});

const validationSchema = Yup.object({ ...requiredFields });


export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
          initialValues={ initialValues }
          validationSchema={ validationSchema }
          onSubmit={(values) => { console.log(values) }}
        >
          {(formik) => (
            <Form noValidate>
              {
                formJson.map( ({type, name, placeholder, label, options}) => {
                  if(type === 'input' || type === 'password' || type === 'email') {
                    return (
                      <MyTextInput
                        key={name}
                        label={label} 
                        name={name} 
                        type={(type as any)}
                        placeholder={placeholder}
                        br
                      />
                    );
                  } else if (type === 'select') {
                    return (
                      <MySelect key={name} label={label}  name={name}  br>
                         <option value="">Pick something</option>
                          {
                            options?.map(({ id, label }) => (
                              <option key={id} value={id}>{label}</option>                         
                            ))

                          }                         
                      </MySelect>
                    );                  
                  }
                  
                  return <span>Type: {type} no es soportado</span>
                })
              }

              <button type="submit">Submit</button>
            </Form>            

          )}
        </Formik>
    </div>
  )
}
