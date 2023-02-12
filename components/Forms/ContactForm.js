import React, {useState} from 'react'
import { Label,Input, Field, Form, TextArea
 } from './Forms.styles'
 import supabase from '../../utils/supabase'

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

    const change = (e) => {
        const {name, value} = e.target
        setForm({...form,[name]:value})
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
            <div>first error</div>
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
            <div>first error</div>
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
            <div>first error</div>
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
            <div>first error</div>
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
            <div>first error</div>
        </Field>

        <button>send</button>
    </Form>
  )
}

export default ContactForm