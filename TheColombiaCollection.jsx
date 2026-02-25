import React, { useEffect } from 'react';
import { ArrowRight, Shield, TrendingUp, Palmtree, Coffee, Home, BookOpen, CheckCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './image_1.png'; // Asegúrate de que la ruta al logo sea correcta

const TheColombiaCollection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Función para el scroll suave a las secciones
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const PillarCard = ({ title, subtitle, icon: Icon, description, id, imageBg }) => (
    <div id={id} className="group relative overflow-hidden rounded-[2rem] shadow-xl cursor-pointer" onClick={() => scrollToSection(id + '-detail')}>
      <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110`} style={{ backgroundImage: `url(${imageBg})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/60 to-transparent"></div>
      <div className="relative p-8 h-full flex flex-col justify-end">
        <div className="mb-auto">
          <div className="inline-flex items-center justify-center p-3 bg-gold-500/20 rounded-xl mb-6 backdrop-blur-sm border border-gold-500/30">
            <Icon className="text-gold-400 w-8 h-8" />
          </div>
        </div>
        <h3 className="text-3xl font-serif text-bone-100 mb-2">{title}</h3>
        <p className="text-sm text-gold-300 font-medium uppercase tracking-wider mb-4">{subtitle}</p>
        <p className="text-bone-300 leading-relaxed mb-6">{description}</p>
        <div className="flex items-center text-gold-400 font-medium group/btn">
          <span className="mr-2">Explore Assets</span>
          <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
        </div>
      </div>
    </div>
  );

  const BlogPost = ({ title, category, date }) => (
    <div className="group cursor-pointer">
      <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-2xl bg-charcoal-200">
        {/* Placeholder for blog image */}
        <div className="w-full h-full bg-charcoal-300 group-hover:scale-105 transition-transform duration-500"></div>
      </div>
      <p className="text-gold-600 text-xs font-bold uppercase tracking-widest mb-2">{category} • {date}</p>
      <h4 className="text-xl font-serif text-charcoal-900 group-hover:text-gold-700 transition-colors leading-tight">{title}</h4>
    </div>
  );

  return (
    <div className="min-h-screen bg-bone-100 font-sans text-charcoal-800 selection:bg-gold-200 selection:text-charcoal-900">
      
      {/* Header Navigation */}
      <nav className="fixed w-full z-50 bg-bone-100/90 backdrop-blur-md border-b border-charcoal-950/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="The Colombia Collection Logo" className="h-12 md:h-14" />
          </Link>
          <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
            <button onClick={() => scrollToSection('pillars')} className="hover:text-gold-700 transition-colors">The Collection</button>
            <button onClick={() => scrollToSection('intelligence')} className="hover:text-gold-700 transition-colors">Insider Intelligence</button>
            <button onClick={() => scrollToSection('why-us')} className="hover:text-gold-700 transition-colors">Why Us</button>
          </div>
          <button className="bg-charcoal-900 text-bone-100 px-6 py-3 rounded-full font-bold text-sm hover:bg-gold-600 transition-colors shadow-lg shadow-gold-900/10">
            Schedule Investment Audit
          </button>
        </div>
      </nav>

      {/* Hero Section: The Intention Filter */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
        {/* Background Image (Placeholder) */}
        <div className="absolute inset-0 bg-charcoal-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569416079346-372303c79925?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/60 to-bone-100"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-bone-100 mb-6 leading-tight drop-shadow-sm">
            Your Gateway to <br/>
            <span className="text-gold-400">Colombian Prosperity.</span>
          </h1>
          <p className="text-xl text-bone-300 max-w-3xl mx-auto leading-relaxed mb-12">
            We don't sell properties. We curate high-yield, visa-ready assets for the sophisticated global investor.
          </p>
          
          <div className="bg-bone-100/10 backdrop-blur-md p-2 rounded-full inline-flex flex-wrap justify-center gap-2 border border-bone-100/20 shadow-2xl">
            <span className="px-6 py-3 rounded-full text-bone-200 text-sm font-medium">Where will you place your capital?</span>
            <div className="w-full md:w-auto h-px md:h-auto bg-bone-100/20 my-2 md:my-0 md:mx-2"></div>
            {[
              { label: 'High-Yield (Medellín)', id: 'pillar-medellin' },
              { label: 'Safe Haven (Bogotá)', id: 'pillar-bogota' },
              { label: 'Beachfront (Caribe)', id: 'pillar-caribe' },
              { label: 'Wellness (Eje)', id: 'pillar-eje' },
              { label: 'Heritage (Valle)', id: 'pillar-valle' },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="px-5 py-3 rounded-full bg-charcoal-800 text-bone-100 hover:bg-gold-600 font-bold text-sm transition-all border border-charcoal-700 hover:border-gold-500 hover:-translate-y-1 flex-grow md:flex-grow-0">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* The 5 Pillars Section */}
      <section id="pillars" className="py-24 bg-bone-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-gold-600 uppercase tracking-widest mb-4">The Collection</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">Curated Investment Portfolios</h3>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              Five distinct asset classes, each rigorously vetted for legal security, ROI potential, and lifestyle value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <PillarCard 
              title="The Luxury Yield"
              subtitle="Medellín & Antioquia"
              icon={TrendingUp}
              description="For the nomad investor seeking high-occupancy Airbnb assets in El Poblado and Laureles. Maximize cash flow in the world's most resilient lifestyle hub."
              id="pillar-medellin"
              imageBg="https://images.unsplash.com/photo-1568634694297-284114737405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder: Medellín
            />
            <PillarCard 
              title="The Safe Haven"
              subtitle="Bogotá & La Sabana"
              icon={Shield}
              description="Institutional-grade properties for long-term capital preservation. Focus on Rosales, Chía, and Cajicá for stable appreciation and family security."
              id="pillar-bogota"
              imageBg="https://images.unsplash.com/photo-1636908238885-640333968081?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder: Bogotá
            />
            <PillarCard 
              title="The Beachfront Asset"
              subtitle="Cartagena & Santa Marta"
              icon={Palmtree}
              description="Trophy properties on the Caribbean coast. From modern condos in Bocagrande to restored colonial homes, designed for premium vacation rentals."
              id="pillar-caribe"
              imageBg="https://images.unsplash.com/photo-1598965342755-470790017708?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder: Cartagena
            />
            <PillarCard 
              title="The Wellness Retreat"
              subtitle="Eje Cafetero"
              icon={Coffee}
              description="The ultimate retirement investment. Fincas and gated communities in Cerritos and Pereira, offering a low cost of living in a perennial spring climate."
              id="pillar-eje"
              imageBg="https://images.unsplash.com/photo-1625606937593-38581748308e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder: Eje Cafetero
            />
            <PillarCard 
              title="The Heritage Home"
              subtitle="Cali & Valle del Cauca"
              icon={Home}
              description="For the diaspora building a legacy. Reconnect with your roots and secure your family's future with high-value properties in Ciudad Jardín and Pance."
              id="pillar-valle"
              imageBg="https://images.unsplash.com/photo-1599423218269-962e98b0713e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder: Cali
            />
          </div>
        </div>
      </section>

      {/* Trust & Authority Section */}
      <section id="why-us" className="py-24 bg-charcoal-900 text-bone-100 relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-gold-400 uppercase tracking-widest mb-4">Why The Colombia Collection</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">More Than Real Estate. <br/>It's Due Diligence.</h3>
              <p className="text-bone-300 mb-8 leading-relaxed">
                We are not agents; we are your on-ground partners. Every asset in our collection passes a rigorous 40-point legal and financial audit before it's presented to you. We handle the complexity so you can focus on the returns.
              </p>
              <div className="flex items-center gap-4 text-gold-400 font-bold mb-12">
                <MapPin />
                <span className="text-bone-100">Powered by</span>
                <a href="https://colombianpassport.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-300 transition-colors">
                  ColombianPassport.com
                </a>
              </div>
              <button className="bg-gold-600 text-charcoal-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-500 transition-colors shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                Verify Your Investment Eligibility
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: CheckCircle, title: 'Legal Vetting', desc: 'Clean titles and fiducia-backed projects only.' },
                { icon: BookOpen, title: 'Visa-Ready Assets', desc: 'Properties pre-qualified for Type M/R Investment Visas.' },
                { icon: TrendingUp, title: 'Data-Driven ROI', desc: 'Projections based on real market data, not promises.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-charcoal-800/50 rounded-2xl border border-charcoal-700 hover:border-gold-500/50 transition-colors">
                  <div className="p-3 bg-gold-500/10 rounded-xl shrink-0">
                    <item.icon className="text-gold-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-bone-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insider Intelligence Section (Blog AIO) */}
      <section id="intelligence" className="py-24 bg-bone-200">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold text-gold-600 uppercase tracking-widest mb-4">Insider Intelligence</h2>
              <h3 className="text-4xl font-serif text-charcoal-900">The AIO Investment Brief</h3>
            </div>
            <button className="hidden md:flex items-center gap-2 text-charcoal-700 font-bold hover:text-gold-700 transition-colors">
              View All Analysis <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BlogPost 
              category="Market Analysis"
              date="Feb 25, 2026"
              title="The 2026 Outlook: Why Medellín's 'Golden Mile' is Still Undervalued vs. Miami."
            />
            <BlogPost 
              category="Legal & Tax"
              date="Feb 18, 2026"
              title="The Definitive Guide to the Colombian Investment Visa (Type M) Through Property."
            />
             <BlogPost 
              category="Due Diligence"
              date="Feb 10, 2026"
              title="Fiducia Explained: How to Transfer Capital to Colombia Without Risk."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-950 text-bone-400 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-charcoal-800 pb-12">
            <div className="col-span-2">
              <Link to="/" className="inline-block mb-6">
                 <img src={logo} alt="The Colombia Collection Logo" className="h-10 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              </Link>
              <p className="text-sm leading-relaxed max-w-md mb-6">
                We curate high-yield, visa-ready real estate assets in Colombia for the sophisticated global investor. Powered by data, secured by law.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-bold text-bone-200">A Division of</span>
                <a href="https://colombianpassport.com" className="text-gold-400 hover:underline">ColombianPassport.com</a>
              </div>
            </div>
            <div>
              <h4 className="text-bone-100 font-bold mb-6 uppercase tracking-wider text-sm">The Collection</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => scrollToSection('pillar-medellin')} className="hover:text-gold-400 transition-colors">Medellín (Luxury Yield)</button></li>
                <li><button onClick={() => scrollToSection('pillar-bogota')} className="hover:text-gold-400 transition-colors">Bogotá (Safe Haven)</button></li>
                <li><button onClick={() => scrollToSection('pillar-caribe')} className="hover:text-gold-400 transition-colors">Cartagena (Beachfront)</button></li>
                <li><button onClick={() => scrollToSection('pillar-eje')} className="hover:text-gold-400 transition-colors">Eje Cafetero (Wellness)</button></li>
                <li><button onClick={() => scrollToSection('pillar-valle')} className="hover:text-gold-400 transition-colors">Cali (Heritage)</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-bone-100 font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="mailto:invest@thecolombiacollection.com" className="hover:text-gold-400 transition-colors">invest@thecolombiacollection.com</a></li>
                <li><a href="tel:+13055550123" className="hover:text-gold-400 transition-colors">+1 (305) 555-0123</a></li>
                <li className="pt-4">
                  <button className="bg-charcoal-800 hover:bg-gold-600 text-bone-100 px-4 py-2 rounded-full text-xs font-bold transition-colors">
                    Client Portal Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-charcoal-600">
            <p>© 2026 The Colombia Collection. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold-400">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400">Terms of Service</a>
              <a href="#" className="hover:text-gold-400">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TheColombiaCollection;
