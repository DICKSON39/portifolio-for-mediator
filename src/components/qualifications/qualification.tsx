import { Award, GraduationCap, Gavel, CheckCircle2, Users, ExternalLink } from 'lucide-react';
import MyImage from '../../assets/image.png';

const Qualifications = () => {
  const credentials = [

     {
      icon: <GraduationCap className="w-8 h-8 text-red-700" />,
      title: "Internationally Accredited",
      institution: "Strathmore University Law School",
      description: "Advanced expertise in Alternative Dispute Resolution (ADR) and legal frameworks.", 
      link: ''
    },
    {
      icon: <Gavel className="w-8 h-8 text-red-700" />,
      title: "Court-Accredited",
      institution: "Judiciary Authorized",
      description: "Authorized for Court Annexed Mediation (CAM) and Mediation Training of Trainers (TOT).", 
      link: ''
    },
    {
    
      icon: <Users className="w-8 h-8 text-red-700" />,
      title: "Internationally Accredited Mediator Trainer of Trainers",
      institution: "Kenya Judiciary Academy & BREAKTHROUGH ADR",
      description: "Completed an intensive Training of Mediation Trainers Course, awarded Dec 2025.",
      link: 'https://pdflink.to/mediationtrainer/'
    },
   
    {
      icon: <Award className="w-8 h-8 text-red-700" />,
      title: "Certified Professional",
      institution: "Professional Mediator (CPM)",
      description: "Expertise in high-stakes negotiation, communication, and conflict management.",
      link: ''
    },
    
  ];

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Work With Me?</h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mt-4 rounded-full"></div>
        </div>

        {/** Updated Logo/Image Section */}
        <div className='flex flex-col items-center mb-16'>
          <div className="relative">
            <img 
              src={MyImage} 
              alt="Logo"
              className="w-56 h-56 md:w-64 md:h-64 object-contain rounded-full border-2 border-slate-100 shadow-xl mb-4 transition-transform duration-300 hover:scale-105 p-2 bg-white"
            />
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              {/* Only shows the link if 'link' property has a value */}
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-red-700 font-bold text-sm hover:underline"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              )}
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
