import React, { useState } from 'react';
import { Button, Paper, Row } from './shared/shared-styled';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;
`;

const Input = styled.input`
  padding: 0.5em;
  border-radius: 0.2em;
  border: 0.1em solid ${props => props.theme.main.primary};
  background-color: ${props => props.theme.neturals.lightGray1};
  
  &:focus {
    outline: 0.2em solid ${props => props.theme.main.secondary};
  }
`;

const TextArea = styled.textarea`
  padding: 0.5em;
  border-radius: 0.2em;
  border: 0.1em solid ${props => props.theme.main.primary};
  background-color: ${props => props.theme.neturals.lightGray1};
  resize: none;
  height: 5em;
  
  &:focus {
    outline: 0.2em solid ${props => props.theme.main.secondary};
  }
`;

const Status = styled.span`
  margin: 0 1em;
`

interface ContactFormProps {
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [form, setForm] = useState<{ email: string, message: string }>({ email: '', message: '' });

  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('pending');
    try {
      await fetch('api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus('success');
      setTimeout(() => setStatus('idle'), 2000);
    } catch (e) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

  const showStatus = () => {
    switch (status) {
      case 'pending':
        return 'Loading...';
      case 'success':
        return 'Success! Expect to hear from me soon!';
      case 'error':
        return 'Error! Try again...';
      default:
        return null;
    }
  };

  return (
    <Paper>
      <Form onSubmit={handleSubmit}>
        <Column>
          <label>Email</label>
          <Input type="email" name="email" required
                 onChange={(e) => setForm({ ...form, email: e.target.value })}
                 value={form.email}/>
        </Column>
        <Column>
          <label>Message</label>
          <TextArea name="message" required
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    value={form.message}/>
        </Column>
        <Row justify='flex-start'>
          <Button disabled={status !== 'idle'}>Submit</Button>
          <Status>
            {showStatus()}
          </Status>
        </Row>
      </Form>
    </Paper>
  );
};

export default ContactForm;
