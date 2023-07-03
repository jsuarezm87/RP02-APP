import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    br?: boolean;
    [x: string]: any;    
}

export const MySelect = ({ br, ...props }: Props) => {

    const [ field ] = useField(props);

  return (
    <>
        <label htmlFor={ props.id || props.name }>{ props.label }</label>
        <select { ...field } { ...props } />
        <ErrorMessage name={ props.name } component="span" />
        { br && <br /> }
        
    </>
  )
}
