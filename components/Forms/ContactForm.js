import { useState, useEffect } from 'react';
import { Label, Input, Field, Form, TextArea, SubmitButton } from './Forms.styles';
import contactSchema from './contactSchema';
import * as Yup from 'yup';
import { useModal } from '../Modal/ModalProvider';
import axios from 'axios';

const initialForm = {
  first: '',
  last: '',
  email: '',
  phone: '',
  body: '',
};

const ContactForm = () => {
  const { modal, dispatch } = useModal();

  const [form, setForm] = useState(initialForm);
  const [errs, setErrs] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);

  const change = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    Yup.reach(contactSchema, name)
      .validate(value)
      .then((res) => setErrs({ ...errs, [name]: '' }))
      .catch((err) => setErrs({ ...errs, [name]: err.errors[0] }));
  };
  const submit = (e) => {
    e.preventDefault();
    axios
      .post('/api/post-message', form)
      .then((res) => {
        setForm(initialForm);
      })
      .catch((err) => console.log({ ...err }));
  };

  useEffect(() => {
    contactSchema.isValid(form).then((res) => setDisabled(!res));
  }, [form]);
  return (
    <Form onSubmit={submit}>
      <Field className="firstName">
        <Label>First</Label>
        <Input
          tabIndex={1}
          type="text"
          name="first"
          onChange={change}
          value={form.first}
          placeholder="John"
        />
        <div className="errs">{errs.first}</div>
      </Field>

      <Field className="lastName">
        <Label>last</Label>
        <Input
          tabIndex={2}
          type="text"
          name="last"
          onChange={change}
          value={form.last}
          placeholder="doe"
        />
        <div className="errs">{errs.last}</div>
      </Field>

      <Field className="email">
        <Label>email</Label>
        <Input
          tabIndex={3}
          type="email"
          name="email"
          onChange={change}
          value={form.email}
          placeholder="John@doe.com"
        />
        <div className="errs">{errs.email}</div>
      </Field>
      <Field className="phone">
        <Label>phone</Label>
        <Input
          tabIndex={4}
          type="tel"
          name="phone"
          onChange={change}
          value={form.phone}
          placeholder="phone"
        />
        <div className="errs">{errs.phone}</div>
      </Field>

      <Field className="body">
        <Label>Message</Label>
        <TextArea
          tabIndex={5}
          type="text"
          name="body"
          onChange={change}
          value={form.body}
          placeholder="John"
        />
        <div className="errs">{errs.body}</div>
      </Field>

      <SubmitButton disabled={disabled}>send</SubmitButton>
    </Form>
  );
};

export default ContactForm;
