import { Brain, Cpu, Zap, Shield, Rocket, Users, Globe, Code2, Database, Cloud, Lock, TrendingUp, ArrowRight } from 'lucide-react';

export default function LearnMore() {
  const technologies = [
    { icon: <Brain className="w-8 h-8" />, name: "Artificial Intelligence", color: "from-cyan-500 to-blue-600" },
    { icon: <Database className="w-8 h-8" />, name: "IoT Integration", color: "from-purple-500 to-pink-600" },
    { icon: <Cloud className="w-8 h-8" />, name: "Cloud Architecture", color: "from-blue-500 to-indigo-600" },
    { icon: <Code2 className="w-8 h-8" />, name: "Modern Frameworks", color: "from-green-500 to-emerald-600" },
    { icon: <Lock className="w-8 h-8" />, name: "Security First", color: "from-red-500 to-orange-600" },
    { icon: <TrendingUp className="w-8 h-8" />, name: "Scalable Solutions", color: "from-yellow-500 to-amber-600" }
  ];

  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Intelligence",
      description: "Leverage machine learning and artificial intelligence to automate processes, predict outcomes, and make data-driven decisions in real-time.",
      benefits: ["Predictive Analytics", "Automated Workflows", "Smart Decision Making", "Natural Language Processing"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "IoT Integration",
      description: "Connect physical devices, sensors, and equipment to your software systems for real-time monitoring and control.",
      benefits: ["Real-time Monitoring", "Device Management", "Automated Alerts", "Data Collection"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, role-based access control, and compliance with international standards.",
      benefits: ["Data Encryption", "Access Control", "Audit Trails", "GDPR Compliant"]
    }
  ];

  const caseStudies = [
    {
      company: "Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy ERP system causing inefficiencies",
      solution: "AI-powered ERP with IoT integration",
      results: ["60% faster processing", "40% cost reduction", "Real-time inventory tracking"]
    },
    {
      company: "Retail Chain",
      industry: "Retail",
      challenge: "Disconnected systems across locations",
      solution: "Unified cloud-based platform",
      results: ["Centralized data", "Improved analytics", "Better customer experience"]
    },
    {
      company: "Logistics Startup",
      industry: "Logistics",
      challenge: "Manual tracking and route planning",
      solution: "Mobile app with AI route optimization",
      results: ["30% delivery time reduction", "Improved driver efficiency", "Customer satisfaction up 45%"]
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
              <a href="/get-started" className="hover:text-cyan-400 transition-colors">Get Started</a>
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
            Deep Dive into
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Our Technology
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Discover how we combine cutting-edge technology with proven methodologies to deliver exceptional results
          </p>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Technology Stack</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="group">
                <div className={`bg-gradient-to-br ${tech.color} p-1 rounded-xl`}>
                  <div className="bg-slate-900 rounded-lg p-6 h-full flex flex-col items-center justify-center text-center group-hover:bg-slate-800 transition-colors">
                    <div className="text-cyan-400 mb-3 transform group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <p className="text-sm font-medium">{tech.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Core Capabilities</h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Explore the powerful features that make our solutions stand out
          </p>

          <div className="space-y-12">
            {features.map((feature, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                    <div className="text-cyan-400 mb-6">{feature.icon}</div>
                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-slate-300 text-lg mb-6">{feature.description}</p>
                    
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, bidx) => (
                        <div key={bidx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-slate-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
                    <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur">
                      <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
                        <div className="text-6xl">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Real results from real clients across different industries
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-400 mb-4">
                  {study.industry}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{study.company}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Challenge</p>
                    <p className="text-slate-300">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Solution</p>
                    <p className="text-slate-300">{study.solution}</p>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-4">
                  <p className="text-sm text-slate-500 mb-3">Results</p>
                  <div className="space-y-2">
                    {study.results.map((result, ridx) => (
                      <div key={ridx} className="flex items-start space-x-2">
                        <ArrowRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Partner With Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Rocket className="w-10 h-10" />,
                title: "Proven Track Record",
                description: "Over 100+ successful projects delivered across various industries"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Expert Team",
                description: "Certified professionals with 10+ years average experience"
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Global Reach",
                description: "Serving clients across 20+ countries with 24/7 support"
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Quality Assurance",
                description: "ISO certified processes with rigorous testing standards"
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how we can help modernize your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-started">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg flex items-center space-x-3 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50">
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>
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