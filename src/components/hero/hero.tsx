import React from 'react';
import MyImage from '../../assets/main.png';

// Define the interface to fix the potential 'any' type error
interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-22 md:p-20 bg-slate-50 min-h-[100vh]">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-700">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-700 leading-tight">
            Professional Mediation & <br />
            <span className="text-slate-800">Legal Support</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 italic font-medium border-l-4 border-red-600 pl-4">
            "Let's Resolve It Peacefully."
          </p>
        </div>
        
        <p className="text-gray-600 text-lg max-w-lg">
          Helping individuals, families, and businesses settle conflicts efficiently 
          without the stress, cost, or delays of long court battles.
        </p>

        <div className="flex gap-4">
          {/* Now triggers the modal instead of a direct email redirect */}
          <button 
            onClick={onContactClick} 
            className="bg-red-700 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-red-800 hover:shadow-red-200 transition-all transform hover:-translate-y-1"
          >
            Book a Consultation
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div className="md:w-1/2 relative mt-12 md:mt-0 flex justify-center">
        {/* Decorative Background Elements */}
        <div className="absolute -top-6 -right-6 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="relative group">
          <img 
            src={MyImage} 
            alt="Albert Murage Kagwanja" 
            className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]" 
          />
          {/* Subtle tag overlay */}
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-md border border-gray-100 text-right">
            <p className="text-red-700 font-bold text-sm">Albert Murage Kagwanja</p>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">ADR Expert & Mediator</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;