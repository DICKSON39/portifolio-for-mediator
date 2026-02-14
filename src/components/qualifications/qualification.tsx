
import { Award, GraduationCap, Gavel, CheckCircle2 } from 'lucide-react';

const Qualifications = () => {
  const credentials = [
    {
      icon: <GraduationCap className="w-8 h-8 text-red-700" />,
      title: "Internationally Trained",
      institution: "Strathmore University Law School",
      description: "Advanced expertise in Alternative Dispute Resolution (ADR) and legal frameworks."
    },
    {
      icon: <Award className="w-8 h-8 text-red-700" />,
      title: "Certified Professional",
      institution: "Professional Mediator (CPM)",
      description: "Expertise in high-stakes negotiation, communication, and conflict management."
    },
    {
      icon: <Gavel className="w-8 h-8 text-red-700" />,
      title: "Court-Accredited",
      institution: "Judiciary Authorized",
      description: "Authorized for Court Annexed Mediation (CAM) and Mediation Training of Trainers (TOT)."
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Work With Me?</h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-red-100 transition-all duration-300 group"
            >
              <div className="mb-6 inline-block p-4 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-red-700 font-semibold text-sm mb-4 uppercase tracking-wide">
                {item.institution}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Licensed Paralegal Callout */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-red-700 rounded-2xl text-white">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-yellow-400" />
            <span className="text-lg font-bold">Licensed Paralegal</span>
          </div>
          <div className="hidden md:block h-6 w-px bg-red-500/50"></div>
          <p className="text-red-50 font-medium text-center md:text-left">
            Licensed for All Court Civil Process Services & Civil Investigations
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Qualifications;