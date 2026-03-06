interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-md card-hover border border-border">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
