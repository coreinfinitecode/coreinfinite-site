import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:aidenelias41@gmai.com?subject=CoreInfinite Consultation Request&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ADescription: ${formData.message}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white p-6">
      <header className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="CoreInfinite Logo" className="h-24" />
        </div>
        <h1 className="text-4xl font-bold mb-2">CoreInfinite</h1>
        <p className="text-xl italic">Infinite Innovation for Smart Living</p>
      </header>

      <section className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Request a Free Consultation</h2>
        <p className="text-sm mb-6">Let CoreInfinite design your next smart solution.</p>
        {submitted && (
          <div className="text-green-300 font-semibold mb-4">
            Thank you! Your message has been prepared in your email app.
          </div>
        )}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4 text-black">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-3 rounded-xl" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-3 rounded-xl" />
          <textarea name="message" placeholder="Describe your needs..." value={formData.message} onChange={handleChange} rows={4} className="p-3 rounded-xl"></textarea>
          <button type="submit" className="bg-white text-indigo-700 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition">Submit</button>
        </form>
        <Link href="/assessment">
          <button className="mt-10 bg-white text-indigo-700 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition">Start Client Assessment</button>
        </Link>
      </section>

      <footer className="text-center text-sm text-white/80 mt-20">
        <p>&copy; {new Date().getFullYear()} CoreInfinite. All rights reserved.</p>
      </footer>
    </div>
  );
}
