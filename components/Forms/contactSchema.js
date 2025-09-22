import * as Yup from 'yup'
import "yup-phone" 


const contactSchema = Yup.object().shape({
    first: Yup.string().required().min(2),
    last: Yup.string().required().min(2),
    email: Yup.string().email().required(),
    phone: Yup.string().required().matches(/^\+?[1-9]\d{9,14}$/, "Enter a valid phone (e.g., +14155552671)"),
    body: Yup.string().required().min(10).max(1000),
})

export default contactSchema 