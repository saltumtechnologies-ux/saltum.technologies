// import { useState, useEffect } from 'react';
// import { Brain, Cpu, Smartphone, ArrowRight, Zap, Globe, Users, TrendingUp, Menu, X } from 'lucide-react';

// export default function SaltumWebsite() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const services = [
//     {
//       icon: <Brain className="w-12 h-12" />,
//       title: "AI-Powered ERP",
//       description: "Intelligent enterprise resource planning with AI and IoT integration for autonomous business operations"
//     },
//     {
//       icon: <Smartphone className="w-12 h-12" />,
//       title: "Mobile & Web Apps",
//       description: "Cross-platform applications built with cutting-edge technology for seamless user experiences"
//     },
//     {
//       icon: <Zap className="w-12 h-12" />,
//       title: "Legacy Migration",
//       description: "Seamless transition from outdated systems to modern, AI-based intelligent solutions"
//     }
//   ];

//   const targetAudience = [
//     { icon: <Users className="w-8 h-8" />, title: "Freelancers", desc: "Scale your operations effortlessly" },
//     { icon: <TrendingUp className="w-8 h-8" />, title: "Startups", desc: "Build on solid foundations" },
//     { icon: <Globe className="w-8 h-8" />, title: "Business Owners", desc: "Transform your enterprise" }
//   ];

//   return (
//     <div className="bg-slate-950 text-white min-h-screen">
//       {/* Navigation */}
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center space-x-2">
//               <Cpu className="w-8 h-8 text-cyan-400" />
//               <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 Saltum Technologies
//               </span>
//             </div>
            
//             <div className="hidden md:flex space-x-8">
//               <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
//               <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
//               <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
//             </div>

//             <button 
//               className="md:hidden text-white"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="md:hidden bg-slate-900 border-t border-slate-800">
//             <div className="px-4 py-4 space-y-3">
//               <a href="#services" className="block hover:text-cyan-400 transition-colors">Services</a>
//               <a href="#about" className="block hover:text-cyan-400 transition-colors">About</a>
//               <a href="#contact" className="block hover:text-cyan-400 transition-colors">Contact</a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.1) 1px, transparent 0)',
//           backgroundSize: '40px 40px'
//         }}></div>
        
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-12">
//             <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6 animate-pulse">
//               <span className="text-cyan-400 text-sm font-semibold">🚀 Throw Your Old Legacy - Use Modern AI Systems</span>
//             </div>
            
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//               Transform Your Business with
//               <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
//                 Intelligent Solutions
//               </span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
//               Global leaders in providing world-class, stable, sustainable, intelligent, autonomous, 
//               and physically integrated systems
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a href="/get-started">
//                 <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50">
//                   <span>Get Started</span>
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//               </a>
//               <a href="/learn-more">
//                 <button className="border-2 border-slate-700 hover:border-cyan-500 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
//                   Learn More
//                 </button>
//               </a>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
//             {targetAudience.map((audience, idx) => (
//               <div key={idx} className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all transform hover:scale-105">
//                 <div className="text-cyan-400 mb-4">{audience.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
//                 <p className="text-slate-400">{audience.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 px-4 bg-slate-900/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
//             <p className="text-xl text-slate-400">Cutting-edge solutions for modern businesses</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <div key={idx} className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2">
//                 <div className="text-cyan-400 mb-6 transform group-hover:scale-110 transition-transform">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
//                 <p className="text-slate-400 leading-relaxed">{service.description}</p>
//                 <button className="mt-6 text-cyan-400 flex items-center space-x-2 group-hover:space-x-3 transition-all">
//                   <span>Learn more</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Saltum?</h2>
//               <p className="text-lg text-slate-300 mb-6 leading-relaxed">
//                 We don't just build software – we architect intelligent ecosystems that evolve with your business. 
//                 Our solutions integrate AI, IoT, and modern frameworks to create systems that think, adapt, and grow.
//               </p>
//               <div className="space-y-4">
//                 {['World-Class Technology', 'Stable & Sustainable', 'Intelligent & Autonomous', 'Physically Integrated'].map((feature, idx) => (
//                   <div key={idx} className="flex items-center space-x-3">
//                     <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
//                     <span className="text-slate-300">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
//               <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-8">
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
//                       <Brain className="w-8 h-8" />
//                     </div>
//                     <div>
//                       <div className="text-3xl font-bold text-cyan-400">100%</div>
//                       <div className="text-slate-400">AI-Powered</div>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
//                       <Globe className="w-8 h-8" />
//                     </div>
//                     <div>
//                       <div className="text-3xl font-bold text-purple-400">Global</div>
//                       <div className="text-slate-400">Reach</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section id="contact" className="relative z-10 py-20 px-4 ..."> 
//   <div className="max-w-4xl mx-auto text-center relative z-20">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize?</h2>
//           <p className="text-xl text-slate-300 mb-8">
//             Let's transform your legacy systems into intelligent, AI-powered solutions
//           </p>
//           <a href="/get-started">
//             <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg flex items-center space-x-3 mx-auto transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50">
//               <span>Schedule a Consultation</span>
//               <ArrowRight className="w-5 h-5" />
//             </button>
//           </a>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex items-center justify-center space-x-2 mb-4">
//             <Cpu className="w-6 h-6 text-cyan-400" />
//             <span className="text-xl font-bold">Saltum Technologies</span>
//           </div>
//           <p className="text-slate-400 text-sm">
//             © 2024 Saltum Technologies. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }



import { useState, useEffect } from 'react';
import { Brain, Cpu, Smartphone, ArrowRight, Zap, Globe, Users, TrendingUp, Menu, X, Heart, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SaltumWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Valentine States
  const [showGenerator, setShowGenerator] = useState(false);
  const [partnerName, setPartnerName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
const [targetName, setTargetName] = useState<string | null>(null);

  useEffect(() => {
    // Check URL for partner name
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name') 
    if (name) setTargetName(name);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleYes = () => {
    setIsAccepted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#22d3ee', '#ec4899', '#ffffff']
    });
  };

  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    setNoButtonPos({ x, y });
  };

  const generateLink = () => {
    const url = `${window.location.origin}${window.location.pathname}?name=${encodeURIComponent(partnerName)}`;
    setGeneratedLink(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
  };

  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered ERP",
      description: "Intelligent enterprise resource planning with AI and IoT integration for autonomous business operations"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile & Web Apps",
      description: "Cross-platform applications built with cutting-edge technology for seamless user experiences"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Legacy Migration",
      description: "Seamless transition from outdated systems to modern, AI-based intelligent solutions"
    }
  ];

  const targetAudience = [
    { icon: <Users className="w-8 h-8" />, title: "Freelancers", desc: "Scale your operations effortlessly" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Startups", desc: "Build on solid foundations" },
    { icon: <Globe className="w-8 h-8" />, title: "Business Owners", desc: "Transform your enterprise" }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen relative">
      {/* Valentine Trap Overlay */}
      {targetName && !isAccepted && (
        <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 overflow-hidden">
          <Heart className="w-20 h-20 text-pink-500 animate-bounce mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
            Hey <span className="text-pink-500">{targetName}</span>, <br />
            <span className="text-cyan-400">Will you be my Valentine?</span>
          </h1>
          
          <div className="flex gap-6 relative w-full justify-center items-center h-24">
            <button 
              onClick={handleYes}
              className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-xl hover:scale-110 transition-transform shadow-lg shadow-cyan-500/50 z-[101]"
            >
              YES!
            </button>

            <button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={noButtonPos.x !== 0 ? { position: 'fixed', left: noButtonPos.x, top: noButtonPos.y } : {}}
              className="px-12 py-4 bg-slate-800 text-slate-400 rounded-full font-bold text-xl transition-all duration-200"
            >
              No
            </button>
          </div>
        </div>
      )}

      {/* Success View */}
{isAccepted && (
  <div className="fixed inset-0 z-[100] bg-gradient-to-br from-pink-900/50 via-rose-950/80 to-purple-950/90 backdrop-blur-2xl overflow-auto">
    
    {/* Animated floating hearts background */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="absolute text-pink-400 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 24 + 16}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            opacity: 0.6
          }}
        >
          ❤️
        </div>
      ))}
    </div>

    {/* Main container with proper spacing */}
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-3xl mx-auto py-8">
        
        {/* Celebration emojis */}
        <div className="text-6xl mb-6 text-center animate-bounce">
          🎉✨🎊
        </div>
        
        {/* Big romantic text */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center animate-pulse bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent leading-tight">
          IT'S A DATE! 💖
        </h1>
        
        {/* Cute message */}
        <div className="text-xl md:text-2xl text-white mb-8 text-center leading-relaxed">
          <p className="mb-4">Awwww! I can't wait to see you, my love!</p>
          <p className="text-pink-300 font-semibold">You just made my heart do a happy dance! 💃🕺</p>
        </div>
        
        {/* Animated heart container */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto mb-8">
          {/* Outer glow */}
          <div className="absolute inset-0 animate-ping bg-pink-500 rounded-full opacity-30"></div>
          
          {/* Middle ring */}
          <div className="absolute inset-4 md:inset-6 animate-spin-slow">
            <div className="w-full h-full border-4 border-pink-400 border-dashed rounded-full"></div>
          </div>
          
          {/* Main heart */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Heart className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-pink-500 fill-pink-500 animate-heartbeat" />
              <Heart className="absolute inset-0 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-red-500 fill-red-500 animate-ping opacity-60" />
            </div>
          </div>
          
          {/* Little floating hearts around */}
          <div className="absolute top-2 left-6 animate-bounce text-xl md:text-2xl">💖</div>
          <div className="absolute top-4 right-8 animate-bounce text-xl md:text-2xl delay-300">💕</div>
          <div className="absolute bottom-8 left-8 animate-bounce text-xl md:text-2xl delay-700">💓</div>
          <div className="absolute bottom-4 right-10 animate-bounce text-xl md:text-2xl delay-500">💗</div>
        </div>
        
        {/* Romantic countdown */}
        <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-2xl p-4 md:p-6 mb-6 backdrop-blur-lg mx-2">
          <div className="text-base md:text-lg text-pink-300 mb-3 text-center">Counting down the moments until we meet...</div>
          <div className="text-2xl md:text-3xl font-bold text-white flex justify-center">
            <div className="flex flex-col items-center px-4">
              <span className="text-3xl md:text-4xl">💝</span>
              <span className="mt-2">Soon!</span>
            </div>
          </div>
        </div>
        
        {/* Sweet message */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-4 md:p-6 mb-6 backdrop-blur-lg mx-2">
          <div className="text-lg md:text-xl text-white italic text-center">
            "Every moment with you is special,"
            <span className="block text-pink-300 mt-2">but Valentine's Day with you will be magical! ✨</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-2 mb-8">
          <button 
            onClick={() => {
              setTargetName(null);
              setIsAccepted(false);
            }} 
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Back to Saltum</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          
          <button 
            onClick={() => {
              confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
              });
            }} 
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Heart className="w-4 h-4 md:w-5 md:h-5 fill-white" />
            <span>Celebrate More!</span>
          </button>
        </div>
        
        {/* Cute footer text */}
        <div className="text-center px-2">
          <p className="text-pink-300/70 text-sm md:text-base">
            Made with ❤️ by Saltum Technologies - Spreading love through technology!
          </p>
        </div>
        
        {/* Close button for mobile */}
        <div className="mt-6 md:mt-8 text-center">
          <button 
            onClick={() => {
              setTargetName(null);
              setIsAccepted(false);
            }}
            className="text-slate-400 hover:text-white text-sm underline"
          >
            Close celebration
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      {/* Link Generator Modal */}
      {showGenerator && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-md w-full relative">
            <button onClick={() => setShowGenerator(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Heart className="text-pink-500 fill-pink-500 w-5 h-5" /> Valentine Link Generator
            </h3>
            <input
              type="text"
              placeholder="Enter their name..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white mb-4 focus:ring-2 focus:ring-cyan-500 outline-none"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
            />
            <button 
              onClick={generateLink}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 rounded-xl font-bold hover:from-pink-600 hover:to-rose-600 transition-colors mb-4"
            >
              Generate Valentine Link
            </button>
            {generatedLink && (
              <div className="mt-4 p-3 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 truncate mr-2">{generatedLink}</span>
                <button onClick={copyToClipboard} className="text-cyan-400 hover:text-cyan-300">
                  <Copy size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Cpu className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Saltum Technologies
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              <button 
                onClick={() => setShowGenerator(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-400 px-4 py-2 rounded-full border border-pink-500/30 hover:bg-pink-500 hover:text-white transition-all hover:scale-105"
              >
                <Heart className="w-4 h-4" />
                <span>Valentine Special</span>
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block hover:text-cyan-400 transition-colors">Services</a>
              <a href="#about" className="block hover:text-cyan-400 transition-colors">About</a>
              <a href="#contact" className="block hover:text-cyan-400 transition-colors">Contact</a>
              <button 
                onClick={() => {
                  setShowGenerator(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-400 px-4 py-2 rounded-full border border-pink-500/30 w-full justify-center hover:bg-pink-500 hover:text-white transition-all"
              >
                <Heart className="w-4 h-4" />
                <span>Valentine Special</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-6 animate-pulse">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-pink-500 text-sm font-semibold">❤️ Valentine Special - Create a Surprise Link!</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Global leaders in providing world-class, stable, sustainable, intelligent, autonomous, 
              and physically integrated systems
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/get-started">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
              <a href="/learn-more">
                <button className="border-2 border-slate-700 hover:border-cyan-500 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Learn More
                </button>
              </a>
              <button 
                onClick={() => setShowGenerator(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-pink-500/50"
              >
                <Heart className="w-5 h-5" />
                <span>Create Valentine Surprise</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {targetAudience.map((audience, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all transform hover:scale-105">
                <div className="text-cyan-400 mb-4">{audience.icon}</div>
                <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                <p className="text-slate-400">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-slate-400">Cutting-edge solutions for modern businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-cyan-400 mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
                <button className="mt-6 text-cyan-400 flex items-center space-x-2 group-hover:space-x-3 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Saltum?</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                We don't just build software – we architect intelligent ecosystems that evolve with your business. 
                Our solutions integrate AI, IoT, and modern frameworks to create systems that think, adapt, and grow.
              </p>
              <div className="space-y-4">
                {['World-Class Technology', 'Stable & Sustainable', 'Intelligent & Autonomous', 'Physically Integrated'].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Brain className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-cyan-400">100%</div>
                      <div className="text-slate-400">AI-Powered</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Globe className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-400">Global</div>
                      <div className="text-slate-400">Reach</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valentine CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-rose-500/5 to-purple-500/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Create a Valentine Surprise</h2>
          <p className="text-xl text-slate-300 mb-8">
            Generate a special link to ask someone to be your Valentine in a fun, memorable way!
          </p>
          <button 
            onClick={() => setShowGenerator(true)}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-12 py-4 rounded-lg font-semibold text-lg flex items-center space-x-3 mx-auto transition-all transform hover:scale-105 shadow-lg shadow-pink-500/50"
          >
            <Heart className="w-5 h-5" />
            <span>Generate Valentine Link</span>
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's transform your legacy systems into intelligent, AI-powered solutions
          </p>
          <a href="/get-started">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg flex items-center space-x-3 mx-auto transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50">
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold">Saltum Technologies</span>
            <Heart className="w-5 h-5 text-pink-500" />
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 Saltum Technologies. All rights reserved. | Valentine Special Feature Included ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}