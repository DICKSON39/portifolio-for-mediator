import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MessageSquare, Scale, Linkedin, Facebook, Send, CheckCircle } from 'lucide-react';

const Footer = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/254724771029?text=Hello%20Albert,%20I%20would%20like%20to%20inquire%20about%20your%20mediation%20services.";

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    // Replace these with your actual EmailJS IDs
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
        setIsSent(true);
        setIsSubmitting(false);
        setTimeout(() => setIsSent(false), 5000); // Reset success message
        form.current?.reset();
    }, (error) => {
        console.error('Failed to send...', error.text);
        setIsSubmitting(false);
    });
  };

  return (
    <footer id="contact" className="bg-slate-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row mb-20 border border-gray-100">
          
          {/* Left: Contact Info */}
          <div className="lg:w-1/2 p-10 md:p-16 bg-red-700 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let’s Resolve It Peacefully.</h2>
              <p className="text-red-100 mb-10 text-lg">
                Reach out today for professional mediation and legal support.
              </p>
              
              <div className="space-y-6">
                <a href="tel:+254724771029" className="flex items-center gap-4 group">
                  <div className="bg-red-800 p-3 rounded-full group-hover:bg-white group-hover:text-red-700 transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-red-200 uppercase font-bold tracking-wider">Call / WhatsApp</p>
                    <p className="text-xl font-semibold">+254 724 771 029</p>
                  </div>
                </a>

                <a href="mailto:albertkagwanja917@gmail.com" className="flex items-center gap-4 group">
                  <div className="bg-red-800 p-3 rounded-full group-hover:bg-white group-hover:text-red-700 transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-red-200 uppercase font-bold tracking-wider">Email Address</p>
                    <p className="text-xl font-semibold underline decoration-red-400">albertkagwanja917@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-red-600/50">
               <button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105">
                 <MessageSquare size={20} />
                 Chat on WhatsApp
               </button>
            </div>
          </div>

          
          <div className="lg:w-1/2 p-10 md:p-16 bg-white">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">Full Name</label>
                <input type="text" name="user_name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" placeholder="John Doe" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">Email Address</label>
                <input type="email" name="user_email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">How can I help?</label>
                <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none" placeholder="Briefly describe your situation..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isSent ? 'bg-green-500 text-white' : 'bg-slate-900 text-white hover:bg-red-700'}`}
              >
                {isSubmitting ? 'Sending...' : isSent ? <><CheckCircle size={20}/> Message Sent</> : <><Send size={20}/> Send Message</>}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-4 text-slate-500 text-sm">
          <div className="flex items-center gap-2 font-bold text-slate-800 uppercase tracking-tighter">
            <Scale size={18} className="text-red-700" />
            Albert Murage Kagwanja
          </div>
          <p>© {currentYear} | All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-700 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-red-700 transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;