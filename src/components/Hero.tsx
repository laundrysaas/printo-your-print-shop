import heroImage from "@/assets/hero-products.jpg";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="min-h-screen pt-20 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <img alt="Premium custom printed products including t-shirts, bags, and mugs" className="w-full aspect-[4/3] object-cover" src="/lovable-uploads/a9ed7e5f-7424-450f-8bdc-aed1f1e72c8e.png" />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h1 className="font-serif text-5xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.9] mb-6">
              PRINTO
              <br />
              <span className="text-muted-foreground">Collection</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              PRINTO is your premier destination for custom printing solutions. 
              From stylish t-shirts to premium merchandise, we bring your designs 
              to life with exceptional quality and craftsmanship.
            </p>
            <div className="flex items-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Shop Now
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground">
                <ArrowDownRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;