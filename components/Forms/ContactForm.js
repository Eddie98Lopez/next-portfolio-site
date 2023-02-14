import React, {useState} from 'react'
import { Label,Input, Field, Form, TextArea
 } from './Forms.styles'
 import supabase from '../../utils/supabase'
 import contactSchema from './contactSchema'
 import * as Yup from 'yup'

 const sendMessage = async (form) => {
    try {
        const {data} = await supabase.from('messages').insert(form)
        console.log(data)
        
    } catch (error) {
        console.log(error)
        
    }
 }

const initialForm = {
    first:'',
    last:'',
    email:'',
    subject:'',
    body:''
}

const ContactForm = () => {

    const [form,setForm] = useState(initialForm)
    const [errs,setErrs] = useState(initialForm)

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
        //sendMessage(form)
        console.log(form)
        setForm(initialForm)
    }
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

        <button>send</button>
    </Form>
  )
}

export default ContactForm