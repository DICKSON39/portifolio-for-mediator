import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MessageSquare, Phone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleGmailClick = () => {
    const email = "albertkagwanja917@gmail.com";
    const subject = encodeURIComponent("Inquiry for Mediation Services");
    const body = encodeURIComponent("Hello Albert,\n\nI found your website and would like to discuss a potential mediation case regarding...");

    // This opens Gmail directly in a new tab
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, "_blank");
  };

  const whatsappUrl = "https://wa.me/254724771029?text=Hello%20Albert,%20I%20would%20like%20to%20inquire%20about%20your%20mediation%20services.";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative"
        >
          {/* Header */}
          <div className="bg-red-700 p-6 text-white text-center">
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 hover:bg-red-800 p-1 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold">Start a Conversation</h3>
            <p className="text-red-100 text-sm mt-1">Professional & Confidential Support</p>
          </div>

          <div className="p-8 space-y-4">
            {/* WhatsApp Option */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-50 hover:border-green-500 hover:bg-green-50 transition-all group"
            >
              <div className="bg-green-100 p-3 rounded-xl text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all">
                <MessageSquare size={24} />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900">WhatsApp Message</p>
                <p className="text-xs text-slate-500">Fastest for quick inquiries</p>
              </div>
            </a>

            {/* Gmail Option (Using your function) */}
            <button 
              onClick={handleGmailClick}
              className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-50 hover:border-red-500 hover:bg-red-50 transition-all group"
            >
              <div className="bg-red-100 p-3 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900">Open in Gmail</p>
                <p className="text-xs text-slate-500">Send formal case details</p>
              </div>
            </button>

            {/* Direct Call Option */}
            <a 
              href="tel:+254724771029"
              className="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-50 hover:border-slate-300 hover:bg-slate-100 transition-all group"
            >
              <div className="bg-slate-100 p-3 rounded-xl text-slate-600 group-hover:bg-slate-600 group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900">Direct Call</p>
                <p className="text-xs text-slate-500">0724771029</p>
              </div>
            </a>
          </div>

          <div className="p-4 bg-slate-50 text-center text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            Justice and Peace • Resolution Experts
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;