import { useState } from 'react';
import { ArrowRight, CheckCircle2, Cpu, Mail, Phone, User, Building2, MessageSquare, Loader2 } from 'lucide-react';

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const steps = [
    {
      number: "01",
      title: "Schedule Consultation",
      description: "Book a free 30-minute consultation with our experts to discuss your needs"
    },
    {
      number: "02",
      title: "System Analysis",
      description: "We analyze your current infrastructure and identify improvement opportunities"
    },
    {
      number: "03",
      title: "Custom Proposal",
      description: "Receive a tailored solution with timeline, technology stack, and pricing"
    },
    {
      number: "04",
      title: "Implementation",
      description: "Our team builds and deploys your solution with ongoing support"
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/95 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center space-x-2">
              <Cpu className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Saltum Technologies
              </span>
            </a>
            
            <div className="flex space-x-8">
              <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="/learn-more" className="hover:text-cyan-400 transition-colors">Learn More</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Your
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Start your transformation journey today. Fill out the form below and our team will reach out within 24 hours.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-cyan-400/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-2 text-center">Start Your Project</h2>
            <p className="text-slate-400 text-center mb-8">Tell us about your requirements</p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center space-x-2">
                    <User className="w-4 h-4 text-cyan-400" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Email *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span>Company</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Phone</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Interested In *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="ai-erp">AI-Powered ERP</option>
                  <option value="mobile-web">Mobile & Web Apps</option>
                  <option value="legacy-migration">Legacy Migration</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Project Details *</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell us about your project, requirements, and timeline..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <p className="text-green-400">Thank you! We'll contact you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400">Something went wrong. Please try again or email us directly at contact@saltumtech.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You Get</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Free Consultation",
                description: "No-obligation 30-minute session to understand your needs"
              },
              {
                title: "Dedicated Team",
                description: "Expert developers and project managers assigned to your project"
              },
              {
                title: "Transparent Pricing",
                description: "Clear quotes with no hidden fees or surprise costs"
              },
              {
                title: "Agile Development",
                description: "Regular updates and iterations based on your feedback"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support after deployment"
              },
              {
                title: "Quality Guarantee",
                description: "We ensure your solution meets all requirements and standards"
              }
            ].map((benefit, idx) => (
              <div key={idx} className="flex space-x-4">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold">Saltum Technologies</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 Saltum Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}