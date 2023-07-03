import * as Yup from 'yup';

export const validationSchemaYup = Yup.object({
    firstName: Yup.string()
                  .max(15, 'Debe de tener 15 caracteres o menos')
                  .required('Requerido'),
    lastName: Yup.string()
                  .max(15, 'Debe de tener 10 caracteres o menos')
                  .required('Requerido'),
    email: Yup.string()
              .email('El email no tiene un formato valido')
              .required('Requerido')
            
});        