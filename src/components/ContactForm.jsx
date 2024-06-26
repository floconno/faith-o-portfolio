import React from "react";

const ContactForm = () => {
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2 mb-4">
        Name
        <input type="text" className="grow" placeholder="John Doe" />
      </label>
      <label className="input input-bordered flex items-center gap-2 mb-4">
        Enter e-mail
        <input type="text" className="grow" placeholder="ilove2code@site.com" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Your message
        <input type="text" className="grow"/>
      </label>
    </div>
  );
};

export default ContactForm;
