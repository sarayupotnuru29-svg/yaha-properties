import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Building2, 
  TrendingUp, 
  Shield, 
  Facebook, 
  Instagram, 
  MessageCircle 
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import investmentCorridor from "@/assets/investment-corridor.jpg";
import CountUpNumber from "@/components/CountUpNumber";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 gradient-overlay" />
        
        {/* Hero Content */}
        <div className="relative flex-grow flex items-center container mx-auto px-4 md:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full mb-6 text-sm font-medium border border-accent/30">
              <Shield size={16} />
              Legally Verified Properties
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Smart Real Estate{" "}
              <span className="text-accent">Investments</span> in Tirupati
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
              Legally Verified | Growth Focused | Investment Driven
            </p>
            
            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/properties" className="btn-accent flex items-center gap-2">
                Explore Properties <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/918106396021" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-md font-bold transition-all shadow-lg transform hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>

            {/* Integrated Social & Contact Details (Moved from Top Bar) */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
              <a 
                href="https://www.facebook.com/share/1E9URqKEay/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-all text-sm font-medium group"
              >
                <Facebook size={18} className="text-accent group-hover:scale-110 transition-transform" />
                <span>Yaha Properties</span>
              </a>

              <a 
                href="https://instagram.com/yahaproperties" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-all text-sm font-medium group"
              >
                <Instagram size={18} className="text-accent group-hover:scale-110 transition-transform" />
                <span>@yahaproperties</span>
              </a>

              {/* <div className="flex items-center gap-2 text-[#25D366] text-sm font-bold">
                <MessageCircle size={18} fill="currentColor" />
                <span>+91 8106396021</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">
              About <span className="text-primary">Yaha Properties</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6 mb-4">
              Yaha Properties is a Tirupati-based real estate firm specializing in legally verified, growth-driven property investments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We help investors and buyers identify high-growth real estate opportunities across Tirupati and surrounding regions.
            </p>
            <Link to="/about" className="btn-primary inline-flex items-center gap-2">
              Read More <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-12">
            Our <span className="text-accent">Achievements</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: 90000, suffix: "+", label: "Sq Ft Land Sold" },
              { end: 5000, suffix: "+", label: "Sq Ft Apartments Delivered" },
              { end: 5, suffix: " Acre", label: "Gated Community Developed" },
              { end: 50, suffix: "+", label: "Happy Investors" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-8 text-center shadow-md card-hover">
                <CountUpNumber end={stat.end} suffix={stat.suffix} />
                <p className="text-muted-foreground font-medium mt-3">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="section-subtitle mt-4">
              Comprehensive real estate services from land acquisition to investment consulting.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Corridor */}
      <section
        className="relative section-padding"
        style={{ backgroundImage: `url(${investmentCorridor})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative container mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-8">
              Investment <span className="text-accent">Corridor</span>
            </h2>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Tirupati Growth Zones" },
                { icon: Building2, text: "Tirupati–Naidupeta Industrial Corridor" },
                { icon: TrendingUp, text: "Highway Facing Developments" },
                { icon: CheckCircle, text: "TUDA Approved Layouts" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-primary-foreground/90">
                  <item.icon size={22} className="text-accent flex-shrink-0" />
                  <span className="text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-blue text-center">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Looking for the Right Property Investment?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Let our experts guide you to the best investment opportunities in Tirupati.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918106396021" target="_blank" rel="noopener noreferrer" className="btn-accent">
              Talk To Our Experts
            </a>
            <Link to="/services" className="btn-outline-primary border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;