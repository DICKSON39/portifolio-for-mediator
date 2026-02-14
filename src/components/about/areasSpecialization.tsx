
import { 
  Users, Briefcase, UserRound, Map, 
  Building2, Receipt, Globe2 
} from 'lucide-react';

const Specialization = () => {

     const handleEmailClick = () => {
  const email = "albertkagwanja917@gmail.com";
  const subject = encodeURIComponent("Inquiry for Mediation Services");
  const body = encodeURIComponent("Hello Albert,\n\nI found your website and would like to discuss a potential mediation case regarding...");

  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, "_blank");
};


  const specializations = [
    {
      title: "Family & Relationship",
      icon: <Users className="w-6 h-6" />,
      desc: "Compassionate resolution for domestic and marital disputes."
    },
    {
      title: "Business & Commercial",
      icon: <Briefcase className="w-6 h-6" />,
      desc: "Protecting professional interests and partnership stability."
    },
    {
      title: "Workplace & Employment",
      icon: <UserRound className="w-6 h-6" />,
      desc: "Settle labor disputes and foster a healthy work culture."
    },
    {
      title: "Land & Property",
      icon: <Map className="w-6 h-6" />,
      desc: "Resolving ownership, boundary, and real estate conflicts."
    },
    {
      title: "Institutional & Organizational",
      icon: <Building2 className="w-6 h-6" />,
      desc: "Strategic conflict management for large institutions."
    },
    {
      title: "Debt & Contractual",
      icon: <Receipt className="w-6 h-6" />,
      desc: "Effective mediation for financial and binding agreements."
    },
    {
      title: "Community & Cross-border",
      icon: <Globe2 className="w-6 h-6" />,
      desc: "Navigating complex cultural and regional disputes."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Background Decorative Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-900/20 rounded-full blur-[120px]" />

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-red-500 font-bold tracking-widest uppercase text-sm mb-3">
              Areas of Specialization
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">
              Expert Solutions for <br /> Every Type of Conflict
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm">
            Tailored mediation strategies designed to deliver peaceful, binding, and mutually beneficial outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-red-500 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-700 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Call to Action Card */}
          <div className="p-8 rounded-3xl bg-red-700 flex flex-col justify-center items-center text-center">
            <h4 className="text-2xl font-bold mb-4">Need a Custom Solution?</h4>
            <button onClick={handleEmailClick} className="bg-white text-red-700 px-6 py-2 rounded-full font-bold hover:bg-slate-100 transition-colors">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;