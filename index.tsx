import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle, 
  ArrowRight,
  MessageSquare,
  Send,
  Loader2,
  Bot
} from 'lucide-react';
import { SERVICES, TEAM_MEMBERS, TESTIMONIALS, FAQ_ITEMS } from './constants';
import { Service, ChatMessage } from './types';

// --- Components ---

const Header = ({ 
  activePage, 
  navigateTo, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}: { 
  activePage: string; 
  navigateTo: (page: string) => void; 
  mobileMenuOpen: boolean; 
  setMobileMenuOpen: (open: boolean) => void;
}) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigateTo('home')}
          >
            <div className="w-10 h-10 bg-primary-900 rounded flex items-center justify-center text-white font-bold text-xl">
              CL
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">ClearLedger</h1>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Accounting & Advisory</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  activePage === link.id ? 'text-primary-700 font-semibold' : 'text-gray-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => navigateTo('contact')}
              className="bg-primary-600 text-white px-5 py-2 rounded hover:bg-primary-700 transition-colors text-sm font-medium"
            >
              Free Consultation
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg absolute w-full left-0 top-20">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  navigateTo(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 ${
                  activePage === link.id ? 'text-primary-700 font-semibold' : 'text-gray-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => {
                navigateTo('contact');
                setMobileMenuOpen(false);
              }}
              className="bg-primary-600 text-white px-5 py-3 rounded text-center font-medium"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = ({ navigateTo }: { navigateTo: (page: string) => void }) => (
  <footer className="bg-primary-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white font-bold">CL</div>
            <h2 className="text-xl font-bold">ClearLedger</h2>
          </div>
          <p className="text-primary-200 text-sm leading-relaxed mb-6">
            Your trusted partner for tax, accounting, and business success. We simplify the complex so you can focus on what matters.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary-50">Services</h3>
          <ul className="space-y-2 text-primary-200 text-sm">
            {SERVICES.slice(0, 5).map(service => (
              <li key={service.id}>
                <button onClick={() => navigateTo('services')} className="hover:text-white transition-colors text-left">
                  {service.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary-50">Company</h3>
          <ul className="space-y-2 text-primary-200 text-sm">
            <li><button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">About Us</button></li>
            <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">Contact</button></li>
            <li><button onClick={() => navigateTo('services')} className="hover:text-white transition-colors">Resources</button></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary-50">Contact Us</h3>
          <ul className="space-y-4 text-primary-200 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              <span>Level 3, 100 Business Parade,<br />Sydney NSW 2000</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0" />
              <span>(02) 9999 8888</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0" />
              <span>hello@clearledger.com.au</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-400">
        <p>&copy; {new Date().getFullYear()} ClearLedger Accounting & Advisory. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Liability limited by a scheme approved under Professional Standards Legislation.</p>
      </div>
    </div>
  </footer>
);

const ServiceCard: React.FC<{ service: Service; onClick: () => void }> = ({ service, onClick }) => {
  const Icon = service.icon;
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
        {service.shortDescription}
      </p>
      <button 
        onClick={onClick}
        className="text-primary-600 font-medium text-sm flex items-center hover:text-primary-800 transition-colors mt-auto"
      >
        Learn More <ArrowRight size={16} className="ml-1" />
      </button>
    </div>
  );
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am the ClearLedger Assistant. How can I help you with your accounting or tax questions today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({ 
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: `You are a helpful, professional AI assistant for ClearLedger Accounting & Advisory. 
        Your goal is to answer general questions about accounting, tax, and business services based on Australian standards.
        Tone: Professional, friendly, trustworthy, concise.
        Do NOT provide specific financial advice. Always include a disclaimer if the user asks for specific advice, suggesting they book a consultation with one of our human accountants.
        Services we offer: Bookkeeping, Tax Returns, SMSF, Business Advisory, NDIS Plan Management, Corporate Secretarial.
        Location: Sydney, Australia.`
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessage({ message: userMessage });
      const response = result.text;

      if (response) {
          setMessages(prev => [...prev, { role: 'model', text: response }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I'm having trouble connecting right now. Please call us directly for assistance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors z-40 flex items-center gap-2"
        aria-label="Open Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="text-sm font-medium hidden md:inline">Chat with us</span>}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-40 flex flex-col h-[500px]">
          <div className="bg-primary-700 p-4 text-white flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">ClearLedger Assistant</h3>
              <p className="text-xs text-primary-200">Online now</p>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] rounded-lg p-3 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm">
                  <Loader2 size={16} className="animate-spin text-primary-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our services..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 disabled:opacity-50 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// --- Pages ---

const HomePage = ({ navigateTo, onSelectService }: { navigateTo: (page: string) => void; onSelectService: (id: string) => void }) => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <section className="relative bg-primary-900 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Reliable Accounting & Tax Services for <span className="text-primary-300">Individuals and Businesses</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 font-light">
            Your Partner for Tax, Accounting & Business Success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigateTo('contact')}
              className="bg-primary-500 hover:bg-primary-400 text-white font-semibold py-3 px-8 rounded transition-all transform hover:scale-105 shadow-lg text-center"
            >
              Get a Free Consultation
            </button>
            <button 
              onClick={() => navigateTo('services')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-semibold py-3 px-8 rounded transition-all text-center"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Introduction */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
              alt="Team Meeting" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to ClearLedger</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a boutique accounting firm dedicated to providing clear, accurate, and strategic financial advice. Our mission is to empower individuals and businesses with the financial clarity they need to succeed.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you need help with a simple tax return, complex business structuring, or ongoing bookkeeping support, our team of qualified professionals is here to guide you every step of the way.
            </p>
            <button 
              onClick={() => navigateTo('about')}
              className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Read Our Story <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.slice(0, 4).map(service => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onClick={() => onSelectService(service.id)}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <button 
            onClick={() => navigateTo('services')}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 transition-colors"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose ClearLedger?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Personalized Attention', desc: 'We take the time to understand your unique situation. You are not just a number to us.' },
            { title: 'Expert Knowledge', desc: 'Our team stays up-to-date with the latest tax laws and regulations to ensure compliance.' },
            { title: 'Proactive Advisory', desc: 'We don’t just record history; we help you plan for the future to maximize your wealth.' }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-primary-800 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to streamline your finances?</h2>
        <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
          Book a free 15-minute introductory call to discuss your accounting and tax needs.
        </p>
        <button 
          onClick={() => navigateTo('contact')}
          className="bg-white text-primary-900 font-bold py-3 px-8 rounded shadow hover:bg-gray-100 transition-colors"
        >
          Contact Us Today
        </button>
      </div>
    </section>
  </div>
);

const ServicesPage = ({ onSelectService }: { onSelectService: (id: string) => void }) => (
  <div className="animate-fade-in pt-10 pb-20">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From individual tax returns to complex corporate structuring, we offer a full suite of accounting services designed to help you achieve financial success.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map(service => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onClick={() => onSelectService(service.id)}
          />
        ))}
      </div>
    </div>
  </div>
);

const ServiceDetailPage = ({ serviceId, navigateTo }: { serviceId: string; navigateTo: (page: string) => void }) => {
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) return <div>Service not found</div>;

  return (
    <div className="animate-fade-in pb-20">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 bg-gray-900">
        <div className="absolute inset-0 opacity-40">
           <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-end pb-12">
          <div>
            <button onClick={() => navigateTo('services')} className="text-gray-300 hover:text-white mb-4 text-sm flex items-center gap-1">
              &larr; Back to Services
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{service.title}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{service.shortDescription}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.fullDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="text-primary-600 mt-1 shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-100 rounded-xl p-8">
               <h3 className="text-xl font-bold text-primary-900 mb-4">Who is this for?</h3>
               <div className="flex flex-wrap gap-3">
                 {service.targetAudience.map((aud, idx) => (
                   <span key={idx} className="bg-white text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200">
                     {aud}
                   </span>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Started</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Ready to optimize your {service.title.toLowerCase()}? Contact us today for a personalized quote.
              </p>
              <button 
                onClick={() => navigateTo('contact')}
                className="w-full bg-primary-600 text-white font-semibold py-3 px-4 rounded hover:bg-primary-700 transition-colors mb-4"
              >
                Request a Quote
              </button>
              <div className="text-center text-sm text-gray-500">
                Or call us at (02) 9999 8888
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="animate-fade-in pt-10 pb-20">
    <div className="container mx-auto px-4 md:px-6">
      {/* Story Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About ClearLedger</h1>
        <div className="prose prose-lg text-gray-600 mx-auto leading-relaxed">
          <p className="mb-6">
            Founded in 2010, ClearLedger Accounting & Advisory began with a simple mission: to bridge the gap between complex tax regulations and business owners who just want to focus on their passion.
          </p>
          <p className="mb-6">
            We believe that accounting is about more than just numbers; it's about people. It's about the family business passing to the next generation, the startup founder realizing their dream, and the individual wanting peace of mind at tax time.
          </p>
          <p>
            Our team combines big-firm expertise with the personal touch of a boutique practice. We pride ourselves on accuracy, integrity, and being proactive rather than reactive.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map(member => (
            <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="h-64 overflow-hidden">
                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-primary-50 rounded-2xl p-8 md:p-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-gray-700 italic mb-6">"{t.quote}"</p>
              <div>
                <p className="font-bold text-gray-900">{t.client}</p>
                <p className="text-sm text-gray-500">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {FAQ_ITEMS.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      // Keep isSubmitted true for the success message
    }, 1000);
  };

  return (
    <div className="animate-fade-in pt-10 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-16">
          Ready to get started? Get in touch for a consultation or quote.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
             <div className="bg-primary-900 text-white p-8 rounded-2xl shadow-xl h-full relative overflow-hidden">
               <div className="relative z-10">
                 <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                 <div className="space-y-8">
                   <div className="flex items-start gap-4">
                     <div className="bg-white/20 p-3 rounded-lg"><Phone size={24} /></div>
                     <div>
                       <p className="text-primary-200 text-sm mb-1">Phone</p>
                       <p className="font-semibold text-lg">(02) 9999 8888</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <div className="bg-white/20 p-3 rounded-lg"><Mail size={24} /></div>
                     <div>
                       <p className="text-primary-200 text-sm mb-1">Email</p>
                       <p className="font-semibold text-lg">hello@clearledger.com.au</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <div className="bg-white/20 p-3 rounded-lg"><MapPin size={24} /></div>
                     <div>
                       <p className="text-primary-200 text-sm mb-1">Office</p>
                       <p className="font-semibold text-lg">Level 3, 100 Business Parade,<br/>Sydney NSW 2000</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="mt-12 pt-12 border-t border-white/20">
                   <h3 className="font-bold mb-4">Office Hours</h3>
                   <div className="grid grid-cols-2 gap-4 text-primary-100 text-sm">
                     <div>
                       <p>Monday - Friday</p>
                       <p className="font-semibold text-white">9:00 AM - 5:00 PM</p>
                     </div>
                     <div>
                       <p>Saturday - Sunday</p>
                       <p className="font-semibold text-white">Closed</p>
                     </div>
                   </div>
                 </div>
               </div>
               {/* Decorative circle */}
               <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-800 rounded-full opacity-50 z-0"></div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-8">
                  Thank you for contacting ClearLedger. One of our team members will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary-600 font-semibold hover:text-primary-800 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="(02) 0000 0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                    <textarea 
                      required
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      placeholder="Tell us a bit about your business or tax needs..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-primary-600 text-white font-bold py-4 rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- App Container ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedServiceId]);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    if (page !== 'service-detail') {
      setSelectedServiceId(null);
    }
    setMobileMenuOpen(false);
  };

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    setCurrentPage('service-detail');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
      <Header 
        activePage={currentPage} 
        navigateTo={navigateTo} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-grow">
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} onSelectService={handleSelectService} />}
        {currentPage === 'services' && <ServicesPage onSelectService={handleSelectService} />}
        {currentPage === 'service-detail' && selectedServiceId && (
          <ServiceDetailPage serviceId={selectedServiceId} navigateTo={navigateTo} />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer navigateTo={navigateTo} />
      <ChatWidget />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);