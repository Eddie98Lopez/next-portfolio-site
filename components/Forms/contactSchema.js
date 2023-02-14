import * as Yup from 'yup'


const contactSchema = Yup.object().shape({
    first: Yup.string().required().min(2),
    last: Yup.string().required().min(2),
    email: Yup.string().email().required(),
    subject: Yup.string().required().min(8),
    body: Yup.string().required().min(10).max(1000),
})

export default contactSchema 