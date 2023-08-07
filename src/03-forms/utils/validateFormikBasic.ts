import { FormikErrors } from 'formik';

interface formValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const validateBasic = ({firstName, lastName, email}: formValues) => {

    const errors: FormikErrors<formValues> = {};
    const regex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!firstName) errors.firstName ='First name is required';
    else if (firstName.length >= 15) errors.firstName ='Must be 15 characters or less';
    
    if (!lastName) errors.lastName ='Last name is required';
    else if (lastName.length >= 10) errors.lastName ='Must be 10 characters or less';

    if (!email) errors.email = 'Email is required';
    else if (!regex.test(email)) errors.email = 'Check for an valid email format';

    console.log(errors);

    return errors;
}