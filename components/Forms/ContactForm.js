import React, {useState, useEffect} from 'react'
import { Label,Input, Field, Form, TextArea, SubmitButton
 } from './Forms.styles'
 import contactSchema from './contactSchema'
 import * as Yup from 'yup'
import sendMessage from './sendMessage'
import { useModal } from '../Modal/ModalProvider'

const initialForm = {
    first:'',
    last:'',
    email:'',
    subject:'',
    body:''
}

const ContactForm = () => {
    const {modal, dispatch} = useModal()

    const [form,setForm] = useState(initialForm)
    const [errs,setErrs] = useState(initialForm)
    const [disabled,setDisabled] = useState(true)

    const change = (e) => {
        const {name, value} = e.target
        setForm({...form,[name]:value})

        Yup.reach(contactSchema,name)
            .validate(value)
            .then(res=>setErrs({...errs,[name]:''}))
            .catch(err=> setErrs({...errs,[name]:err.errors[0]}))
    }
    const submit = (e) =>{
        e.preventDefault()
        sendMessage(form).then(res=>{
                dispatch({type:"OPEN_MODAL", payload:{
                    title:'MESSAGE SENT',
                    text:'Message sent successfully. Thank you for reaching out. I will get back to you as soon as possible.',
                    error:false
                }})
            }).catch(err=>{
                dispatch({type:"OPEN_MODAL", payload:{
                    title:'MESSAGE NOT SENT',
                    text:'Message not sent. Please try again.',
                    error:true
                }})
            })
        console.log(form)

        setForm(initialForm)

    }

    useEffect(()=>{
        contactSchema.isValid(form).then(res=>setDisabled(!res))
    },[form])
  return (
    <Form onSubmit={submit}>
        <Field className='firstName'>
            <Label>First</Label>
            <Input
            type='text'
            name='first'
            onChange={change}
            value={form.first}
            placeholder='John'
            />
            <div className='errs'>{errs.first}</div>
        </Field>

        <Field className='lastName'>
            <Label>last</Label>
            <Input
            type='text'
            name='last'
            onChange={change}
            value={form.last}
            placeholder='doe'
            />
            <div className='errs'>{errs.last}</div>
        </Field>

        <Field className='email'>
            <Label>email</Label>
            <Input
            type='email'
            name='email'
            onChange={change}
            value={form.email}
            placeholder='John@doe.com'
            />
            <div className='errs'>{errs.email}</div>
        </Field>
        <Field className='subject'>
            <Label>subject</Label>
            <Input
            type='text'
            name='subject'
            onChange={change}
            value={form.subject}
            placeholder='subject'
            />
            <div className='errs'>{errs.subject}</div>
        </Field>

        <Field className='body'>
            <Label>Message</Label>
            <TextArea
            type='text'
            name='body'
            onChange={change}
            value={form.body}
            placeholder='John'
            />
            <div className='errs'>{errs.body}</div>
        </Field>

        <SubmitButton disabled = {disabled}>send</SubmitButton>
    </Form>
  )
}

export default ContactForm