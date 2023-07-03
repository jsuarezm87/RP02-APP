import * as Yup from 'yup';

export const validationSchemaAbstraction = Yup.object({
    firstName: Yup.string()
                  .max(15, 'Debe de tener 15 caracteres o menos')
                  .required('Requerido'),
    lastName: Yup.string()
                 .max(15, 'Debe de tener 10 caracteres o menos')
                 .required('Requerido'),
    email: Yup.string()
              .email('El email no tiene un formato valido')
              .required('Requerido'),
    terms: Yup.boolean()
              .oneOf([true], 'Debe de aceptar las condiciones'),
    jobType: Yup.string()
                .notOneOf(['it-jr'], 'Esta opción no es permitida')
                .required('Requerido')
            
});        