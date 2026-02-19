import React from 'react';
import MyImage from '../../assets/main.png';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    /* 1. Used min-h-screen for better mobile browser support.
       2. Changed py-22 to pt-28 pb-12 on mobile to account for fixed navbars.
       3. Used justify-center on mobile so content stays centered if it doesn't fill the whole 90vh.
    */
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
      <div className="w-full md:w-1/2 relative mt-10 md:mt-0 flex justify-center items-center">
        {/* Decorative Background Elements - Scaled down for mobile */}
        <div className="absolute -top-4 -right-4 w-40 h-40 md:w-64 md:h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-6 -left-6 w-40 h-40 md:w-64 md:h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="relative group w-full max-w-[280px] sm:max-w-md">
          <img 
            src={MyImage} 
            alt="Albert Murage Kagwanja" 
            /* Added max-h-[40vh] on mobile so the image doesn't push 
               the content off the screen.
            */
            className="relative rounded-2xl shadow-2xl w-full max-h-[30vh] md:max-h-none object-cover border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]" 
          />
          
          {/* Subtle tag overlay - Smaller text on mobile */}
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
