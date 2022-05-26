import * as yup from 'yup'

const formSchema = yup.object().shape({
    fname: yup
        .string()
        .trim()
        .required("Enter First Name"),
    lname: yup
        .string()
        .trim()
        .required("Enter Last Name"),
    password: yup
        .string()
        .trim()
        .required("Enter Password")
        .min(6, "At least 6 characters"),
    email: yup 
        .string()
        .email("Valid email required")
        .required("Enter Email"),
    terms: yup 
        .boolean()
        .oneOf([true], "Terms required")
         
});

export default formSchema;