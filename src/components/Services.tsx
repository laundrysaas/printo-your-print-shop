import { Printer, Palette, Shirt, Package } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Apparel Printing",
      description: "Custom t-shirts, hoodies, and sportswear with vibrant, durable prints.",
    },
    {
      icon: Palette,
      title: "Design Services",
      description: "Professional design assistance to bring your creative vision to life.",
    },
    {
      icon: Printer,
      title: "Bulk Orders",
      description: "Competitive pricing for large orders. Perfect for events and businesses.",
    },
    {
      icon: Package,
      title: "Merchandise",
      description: "Mugs, bags, caps, and more. Complete branding solutions for your needs.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-secondary/30" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to creation, we offer comprehensive printing solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 lg:p-8 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <service.icon className="h-10 w-10 text-foreground mb-4" />
              <h3 className="font-semibold text-foreground text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
