
import { Mail, Phone, MessageSquare,  Scale,  Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/254724771029?text=Hello%20Albert,%20I%20would%20like%20to%20inquire%20about%20your%20mediation%20services.";

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <footer id="contact" className="bg-slate-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Contact Card Area */}
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row mb-20 border border-gray-100">
          
          {/* Left: Contact Info */}
          <div className="lg:w-1/2 p-10 md:p-16 bg-red-700 text-white">
            <h2 className="text-4xl font-bold mb-6">Let’s Resolve It Peacefully.</h2>
            <p className="text-red-100 mb-10 text-lg">
              Contact me today for professional mediation services, civil process services, or legal support.
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

            <div className="mt-12 pt-10 border-t border-red-600/50 flex gap-4">
               <button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors">
                 <MessageSquare size={20} />
                 Message on WhatsApp
               </button>
            </div>
          </div>

          {/* Right: The Commitment / Brand */}
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center items-center text-center">
             <div className="mb-6 relative">
                {/* Justice and Peace Logo Placeholder */}
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center border-2 border-dashed border-red-200">
                   <Scale size={40} className="text-red-700" />
                </div>
                <div className="absolute -bottom-2 bg-yellow-400 text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter text-red-800 shadow-sm">
                  Justice and Peace
                </div>
             </div>
             
             <h3 className="text-2xl font-serif italic text-slate-800 max-w-xs mb-4">
               "To deliver peaceful solutions, uphold confidentiality, and ensure every party feels heard."
             </h3>
             <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">— Albert Murage Kagwanja</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-4 text-slate-500 text-sm">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <Scale size={18} className="text-red-700" />
            ALBERT MURAGE KAGWANJA
          </div>
          <p>© {currentYear} | Professional Mediator & Paralegal. All Rights Reserved.</p>
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