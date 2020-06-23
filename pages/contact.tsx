import React from 'react';
import Layout from '../components/layout/layout';
import ContactForm from '../components/contact-form';

interface ContactProps {}

const Contact: React.FC<ContactProps> = (props) => {
  return (
    <Layout siteTitle="Contact">
      <h1>Contact Me</h1>
      <p>About software projects, jobs, books, life...</p>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
