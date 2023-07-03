import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

// este usa custom hook (useForm)
const initState = {
    name: '',
    email: '',
    password1: '',
    password2: ''
}

export const RegisterPage = () => {

    const { formData, name, email, password1, password2, onChange, resetForm, 
            isValidField, isValidEmail, isValidPassword, isValidPassword2 } = useForm( initState );

    const onSubmit = ( event: FormEvent<HTMLFormElement> ) => { 
        event.preventDefault();   
        console.log('formData', formData);            
    }

   

  return (
    <div>
        <h1>Register Page</h1> 

        <form noValidate onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Name"
                name="name"
                value={ name } 
                onChange={ onChange }
                className={ `${ isValidField(name) && 'has-error' }` }
            />
            { isValidField(name) && <span>Este campo es necesario</span> }

            <input 
                type="email"
                placeholder="Email"
                name="email"
                value={ email } 
                onChange={ onChange }
                className={ `${ !isValidEmail(email) && 'has-error' }` }

            />
             { !isValidEmail(email) && <span>Email no es válido</span> }

            <input 
                type="password"
                placeholder="Password"
                name="password1"
                value={ password1 }   
                onChange={ onChange }
                className={ `${ isValidPassword(password1) && 'has-error' }` }
            />
            { <span>{ isValidPassword(password1) }</span> }

            <input 
                type="password"
                placeholder="Repeat Password" 
                name="password2" 
                value={ password2 } 
                onChange={ onChange }
                className={ `${ isValidPassword2(password1, password2) && 'has-error' }` }
            />
             { <span>{ isValidPassword2(password1, password2) }</span> }

            <button type="submit">Create</button>
            <button type="button" onClick={ resetForm }>Reset Form</button>
        </form>       
    </div>
  )
}
