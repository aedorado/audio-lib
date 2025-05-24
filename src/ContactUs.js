import React, { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-saffron-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-saffron-700">Contact Us</h2>
        {submitted ? (
          <p className="text-green-600">Thank you for your message! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
                className="w-full border px-3 py-2 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-saffron-600 text-white px-4 py-2 rounded-md hover:bg-saffron-700"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
} 
