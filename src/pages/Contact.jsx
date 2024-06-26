import React from 'react';
import ContactForm from '../components/ContactForm';


const Contact = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">CONTACT</h1>
          <p className="py-6">
                Have a question or want to work together?
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
