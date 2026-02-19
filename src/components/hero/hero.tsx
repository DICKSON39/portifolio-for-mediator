import React from 'react';
import MyImage from '../../assets/main.png';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 pt-28 pb-12 md:p-20 bg-slate-50 min-h-[90vh]">
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-700 z-10">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-3xl md:text-6xl font-extrabold text-red-700 leading-tight">
            Professional Mediation & <br />
            <span className="text-slate-800">Legal Support</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 italic font-medium border-l-4 border-red-600 pl-4">
            "Let's Resolve It Peacefully."
          </p>
        </div>
        
        <p className="text-gray-600 text-base md:text-lg max-w-lg">
          Helping individuals, families, and businesses settle conflicts efficiently 
          without the stress, cost, or delays of long court battles.
        </p>

        <div className="flex gap-4">
          <button 
            onClick={onContactClick} 
            className="w-full md:w-auto bg-red-700 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-red-800 hover:shadow-red-200 transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Book a Consultation
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div className="w-full md:w-1/2 relative mt-12 md:mt-0 flex justify-center items-center">
        {/* Decorative Background Elements */}
        <div className="absolute -top-4 -right-4 w-40 h-40 md:w-64 md:h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-6 -left-6 w-40 h-40 md:w-64 md:h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        {/* FIX: Reduced max-width to 250px on small screens and 400px on desktop.
            The 'h-auto' combined with 'max-h' ensures it stays short but proportional.
        */}
        <div className="relative group w-full max-w-[250px] sm:max-w-xs md:max-w-[400px]">
          <img 
            src={MyImage} 
            alt="Albert Murage Kagwanja" 
            className="relative rounded-2xl shadow-2xl w-full h-auto max-h-[400px] md:max-h-[500px] object-cover border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]" 
          />
          
          {/* Subtle tag overlay */}
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md border border-gray-100 text-right">
            <p className="text-red-700 font-bold text-xs md:text-sm">Albert Murage Kagwanja</p>
            <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 font-semibold">ADR Expert & Mediator</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
