import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    br?: boolean;
    [x: string]: any;    
}

export const MyTextInput = ({ br, ...props }: Props) => {

    // const [field, meta] = useField(props);
    const [ field ] = useField(props);

  return (
    <>
        <label htmlFor={ props.id || props.name }>{ props.label }</label>
        <input className='text-input' { ...field } { ...props } />
        <ErrorMessage name={ props.name } component="span" />
        { br && <br /> }
        
        {/* {
            meta.touched && meta.error && (
                <span className='error'>{ meta.error }</span>
            )           
        } */}
        
    </>
  )
}
