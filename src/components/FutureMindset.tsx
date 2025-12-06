import productBag from "@/assets/product-bag.jpg";
import { ArrowDownRight } from "lucide-react";
const FutureMindset = () => {
  return <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Image */}
          <div>
            <img alt="Custom printed canvas tote bag with geometric design" className="w-full aspect-square object-cover" src="/lovable-uploads/5209c851-e678-49b8-acb1-4f5e70f197f6.png" />
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
              From corporate documents to custom merchandise, we combine advanced printing technology with premium materials to deliver sharp details, rich colors, and consistent results every time
            </p>
            <button className="flex items-center gap-2 text-foreground font-medium group">
              <span>Discover More</span>
              <ArrowDownRight className="h-5 w-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default FutureMindset;