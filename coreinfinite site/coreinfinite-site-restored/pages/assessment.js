import { useState } from "react";
import Link from "next/link";

export default function ClientAssessmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    plan: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:aidenelias41@gmai.com?subject=CoreInfinite Assessment Form&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AServices Needed: ${form.services.join(", ")}%0D%0AChosen Plan: ${form.plan}%0D%0AAdditional Notes: ${form.notes}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-900 text-white p-6">
      <nav className="mb-8 text-center">
        <Link href="/">
          <span className="text-white text-lg font-semibold hover:underline cursor-pointer">← Back to Home</span>
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Client Intake Assessment</h1>
        {submitted ? (
          <p className="text-green-300 text-center font-semibold mb-6">
            Thank you! Your assessment has been prepared in your email app.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 text-black">
            <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="p-3 rounded-xl" required />
            <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="p-3 rounded-xl" required />
            <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="p-3 rounded-xl" required />
            <fieldset className="text-white">
              <legend className="font-semibold mb-2">Services Needed</legend>
              <label className="block"><input type="checkbox" name="services" value="Computer Support" onChange={handleChange} /> Computer Support</label>
              <label className="block"><input type="checkbox" name="services" value="Home Automation" onChange={handleChange} /> Home Automation</label>
              <label className="block"><input type="checkbox" name="services" value="Business Automation" onChange={handleChange} /> Business Automation</label>
            </fieldset>
            <select name="plan" value={form.plan} onChange={handleChange} className="p-3 rounded-xl" required>
              <option value="">Select a Subscription Plan</option>
              <option value="Essential Plan">Essential Plan ($29/month or $313/year)</option>
              <option value="Advanced Plan">Advanced Plan ($79/month or $853/year)</option>
              <option value="Elite Business Plan">Elite Business Plan ($199/month or $2,149/year)</option>
            </select>
            <textarea name="notes" placeholder="Tell us more about what you need..." value={form.notes} onChange={handleChange} rows={4} className="p-3 rounded-xl"></textarea>
            <button type="submit" className="bg-white text-indigo-700 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition">Submit Assessment</button>
          </form>
        )}
      </div>
    </div>
  );
}
