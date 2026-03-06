import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Agricultural Land Sales",
  "Residential Plots",
  "Gated Communities",
  "Apartments",
  "Villas",
  "Industrial Investments",
  "Property Verification",
  "Loan Assistance",
  "Investment Consulting",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <div>
      <section className="gradient-blue pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Get in touch with our team for expert real estate guidance.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <Phone className="text-primary mt-1" size={22} />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">8309458058</p>
                    <p className="text-muted-foreground">8106396021</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <Mail className="text-primary mt-1" size={22} />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">Yahaproperties@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <MapPin className="text-primary mt-1" size={22} />
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      Thukivakam, Renigunta Mandal,<br />
                      Tirupati District, Andhra Pradesh, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <Clock className="text-primary mt-1" size={22} />
                  <div>
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">Monday – Monday</p>
                    <p className="text-muted-foreground">8:00 AM – 8:00 PM (7 Days Open)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Send a Message</h2>
              {submitted ? (
                <div className="text-center py-12 animate-fade-in-up">
                  <CheckCircle size={64} className="text-success mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    maxLength={15}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a Service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Your Message"
                    required
                    maxLength={1000}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <button type="submit" className="btn-accent w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
