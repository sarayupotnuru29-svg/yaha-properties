import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <section className="gradient-blue pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Comprehensive real estate services from agricultural land sales to investment consulting.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-blue text-center">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-3xl text-primary-foreground mb-4">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Our experts will guide you through every step of your real estate journey.
          </p>
          <Link to="/contact" className="btn-accent">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
