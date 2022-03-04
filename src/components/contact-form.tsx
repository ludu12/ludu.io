import React, { useState } from 'react';
import { Button, Column, Container, Row } from './shared-styled';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<{ email: string; message: string }>({
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        return 'Sending...';
      case 'success':
        return 'Success! Expect to hear from me soon!';
      case 'error':
        return 'Error! Try again...';
      default:
        return null;
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Column>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
          />
        </Column>
        <Column>
          <label>Message</label>
          <textarea
            name="message"
            required
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            value={form.message}
          />
        </Column>
        <Row justify="flex-start">
          <Button disabled={status !== 'idle'}>Submit</Button>
          <span>{showStatus()}</span>
        </Row>
      </form>
    </Container>
  );
};

export default ContactForm;
