import { ChangeEvent, useState } from 'react';

export const useForm = <T>( initState: T ) => {

    const [ formData, setFormData ] = useState( initState );

    const onChange = ( event: ChangeEvent<HTMLInputElement> ) => { 
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });     
    }

    const resetForm = () => {
        setFormData({ ...initState });
    }

    const isValidField = ( item: string ) => {
        return item.trim().length <= 0;
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const isValidPassword = ( item: string ): string => {
        let message: string = '';
        if (item.trim().length <= 0) message = 'Este campo es necesario';
        else if (item.trim().length < 6 && item.trim().length > 0) message = 'El password debe tener minimo 6 caracteres';
        return message;
    }

    const isValidPassword2 = ( item: string, item2: string ): string => {
        let message: string = '';
        if (item2.trim().length <= 0) message = 'Este campo es necesario';
        else if (item2.trim().length < 6 && item2.trim().length > 0) message = 'El password debe tener minimo 6 caracteres';
        else if (item.trim() !== item2.trim() && item2.trim().length > 0) message = 'Los password deben ser iguales';
        return message;
    }

    return {
        formData,
        ...formData,        
        onChange,
        resetForm, 
        isValidField,
        isValidEmail,
        isValidPassword,
        isValidPassword2
    }
}