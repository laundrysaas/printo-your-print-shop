import productBag from "@/assets/product-bag.jpg";
import { ArrowDownRight } from "lucide-react";

const FutureMindset = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Image */}
          <div>
            <img
              src={productBag}
              alt="Custom printed canvas tote bag with geometric design"
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-8 h-8 rounded-full bg-accent" />
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl font-bold text-foreground leading-[0.95] mb-6">
              Printing
              <br />
              Solutions
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-md mb-8">
              PRINTO's future mindset involves expanding our market 
              influence through innovation, sustainability, and trendsetting designs. 
              We aim to enhance our digital presence, foster designer 
              collaborations, and offer high-quality prints that resonate with a 
              global, style-conscious audience.
            </p>
            <button className="flex items-center gap-2 text-foreground font-medium group">
              <span>Discover More</span>
              <ArrowDownRight className="h-5 w-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureMindset;
