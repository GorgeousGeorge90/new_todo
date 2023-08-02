import * as yup from 'yup';



export const mainSchema = yup
    .object().shape({
        name: yup.string().min(2).required(),
        password: yup.string().min(2).required(),
    })

