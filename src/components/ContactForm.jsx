import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error", error);
      alert("An error occured.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="input input-bordered flex flex-col">
          <span className="text-sm">Name</span>
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="input input-bordered flex flex-col">
          <span className="text-sm">Enter e-mail</span>
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="ilove2code@site.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="input input-bordered flex flex-col">
          <span className="text-sm">Your message</span>
          <textarea
            name="message"
            className="input-field h-24"
            placeholder=""
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
